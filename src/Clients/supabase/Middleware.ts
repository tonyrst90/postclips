import { NextResponse, type NextRequest } from "next/server";
import { fetchAPI } from "../postclips/server/ApiClient";
import { PostClipsMenuListAdmin, PostClipsMenuListBrand, PostClipsMenuListClipper } from "@/Data/Layout/PostClipsMenu";
import { cookies } from "next/headers";

export async function updateSession(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  // Get token from cookies
  const token = request.cookies.get("auth_token")?.value ? request.cookies.get("auth_token")?.value === 'null' ? null : request.cookies.get("auth_token")?.value : null;

  // Check if user is trying to access protected routes
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/campaigns") ||
    request.nextUrl.pathname.startsWith("/home") ||
    request.nextUrl.pathname.startsWith("/accounts") ||
    request.nextUrl.pathname.startsWith("/clips") ||
    request.nextUrl.pathname.startsWith("/settings");

  // If no token and trying to access protected route, redirect to login
  if (!token && isProtectedRoute) {
    const url = request.nextUrl.clone();
    console.log("Redirect login 5");
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  console.log("Token", { token, pathname: request.nextUrl.pathname });

  // If user has token and is on login page, verify token and redirect to appropriate page
  if (token && request.nextUrl.pathname.includes("/login")) {
    try {
      console.log("Fetching roles 1");
      const { data, error } = await fetchAPI("GET", "/auth/roles");

      if (!data) {
        const cookieStore = await cookies();
        cookieStore.delete("auth_token");
        const url = request.nextUrl.clone();
        url.pathname = "/comming-soon";
        return NextResponse.redirect(url);
      }

      let roles = [];
      let permissions = [];
      let brand;

      if (data) {
        roles = data.roles;
        permissions = data.permissions;
        brand = data.brand;
      } else {
        const url = request.nextUrl.clone();
        url.pathname = "/comming-soon";
        return NextResponse.redirect(url);
      }

      console.log({ roles, brand });

      if (roles && roles.length > 0) {
        let selectedRole = roles[0];

        let menuList;
        if (selectedRole === "ADMIN") {
          menuList = PostClipsMenuListAdmin;
        } else if (selectedRole === "BRAND") {
          menuList = PostClipsMenuListBrand;
        } else if (selectedRole === "CLIPPER") {
          menuList = PostClipsMenuListClipper;
        }

        if (menuList && menuList.length > 0 && menuList[0].Items && menuList[0].Items.length > 0) {
          const firstItem = menuList[0].Items[0];
          const url = request.nextUrl.clone();
          console.log("Redirect login 3");
          url.pathname = firstItem.path || "/login";
          return NextResponse.redirect(url);
        }
      } else {
        console.log("Redirect login 1");
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
    } catch (error: any) {
      if (error.message === "UNAUTHORIZED" || error.error?.includes("Unauthorized")) {
        const cookieStore = await cookies();
        cookieStore.delete("auth_token");

        console.log("Redirect login 2");
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
}

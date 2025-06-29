"use server";

import axios, { AxiosRequestConfig, Method } from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export interface ErrorResponse {
  error?: string;
  message?: string;
}

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: ErrorResponse | string;
};

// Create an Axios instance for internal API requests
const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL, // Use backend URL (DO NOT expose in NEXT_PUBLIC)
  timeout: 60000, // Increased from 10000 to 30000 (30 seconds)
});

/**
 * Secure Server Action for making authenticated requests.
 * @param {Method} method - HTTP method (GET, POST, etc.)
 * @param {string} url - API endpoint
 * @param {any} data - Request body (optional)
 * @param {AxiosRequestConfig} config - Additional Axios config (optional)
 */

export const fetchAPI = async <T = any>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    console.log("[fetchAPI] Starting request:", {
      method,
      url,
      dataType: data instanceof FormData ? 'FormData' : typeof data,
      hasConfig: !!config,
      backendUrl: process.env.BACKEND_URL
    });

    // Get token from cookies
    const cookieStore = await cookies();
    const tokenFromCookie = cookieStore.get("auth_token")?.value;

    // Check if token is provided in config headers, otherwise use cookie token
    const authHeader = config?.headers?.Authorization;
    const token = authHeader ? authHeader.replace('Bearer ', '') : tokenFromCookie;

    console.log("[fetchAPI] Token present:", !!token);

    // Prepare headers
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };

    // Only set Content-Type if not FormData
    if (!(data instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    // Filter out Content-Type from config headers if data is FormData
    const configHeaders: Record<string, any> = { ...config?.headers };
    if (data instanceof FormData && configHeaders['Content-Type']) {
      delete configHeaders['Content-Type'];
    }

    const finalHeaders = {
      ...headers,
      ...configHeaders,
    };

    console.log("[fetchAPI] Final headers:", finalHeaders);
    console.log("[fetchAPI] Full URL:", `${process.env.BACKEND_URL}${url}`);

    // Make API request
    const response = await apiClient({
      method,
      url,
      data,
      ...config,
      headers: finalHeaders,
    });

    console.log("[fetchAPI] Response received:", response.status);

    if (response.status === 200) {
      return {
        success: true,
        data: response.data,
      };
    }

    if (response.status === 401) {
      redirect("/login");
    }

    return {
      success: false,
      error: "Could not fetch data",
    };
  } catch (error: any) {
    console.log("[fetchAPI] Error caught:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });

    // Check for 401 status code in the response
    if (error.response?.status === 401 ||
      error.message === "UNAUTHORIZED" ||
      error.error === "Unauthorized") {
      const cookieStore = await cookies();
      cookieStore.delete("auth_token");
      redirect("/login");
    }

    return {
      success: false,
      error: error.response?.data || error.message,
    };
  }
};
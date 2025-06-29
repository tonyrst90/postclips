import NextAuth from "next-auth/next";
import { authoption } from "./authOption";

const handler = NextAuth(authoption)

export { handler as GET, handler as POST };

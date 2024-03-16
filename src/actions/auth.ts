export async function signIn(
  method: "credentials",
  credentials: Record<"email" | "password", string> | undefined
) {
  switch (method) {
    case "credentials":
      return await signInUsingCredentials(credentials);

    default:
      throw "Not implemented yet";
  }
}

export async function signInUsingCredentials(
  credentials: Record<"email" | "password", string> | undefined
) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });
  const user = await res.json();
  return res.ok && user ? user : null;
}

export async function register(
  method: "credentials",
  credentials: { name: string; email: string; password: string }
) {
  console.log(method);
  console.log(credentials);
}

export interface AuthError extends Error {
  type: "CredentialsSignin" | "CredentialsRegister";
}

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@mail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return await signIn("credentials", credentials);
      },
    }),
  ],
};

export default NextAuth(authOptions)

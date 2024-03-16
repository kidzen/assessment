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

export async function forgotPassword(email: string) {
  console.log(email);
}

export async function resetPassword(email: string, token: string) {
  console.log(email);
  console.log(token);
}

export interface AuthError extends Error {
  type: "CredentialsSignin" | "CredentialsRegister";
}

import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
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

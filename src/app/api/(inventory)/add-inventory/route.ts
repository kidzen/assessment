import { NextResponse } from "next/server";
// import { AuthError, signIn } from "@/actions/auth";

// const handler = async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const { email, password } = req.body;
//     await signIn("credentials", { email, password });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     if ((error as AuthError).type === "CredentialsSignin") {
//       res.status(401).json({ error: "Invalid credentials." });
//     } else {
//       res.status(500).json({ error: "Something went wrong." });
//     }
//   }
// };

// export { handler as POST };

export async function GET(request: Request) {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 200 });
}

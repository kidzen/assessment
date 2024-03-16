import { FormEvent } from "react";
import LoginComponent from "./login";
import { useRouter } from "next/router";
import { signInUsingCredentials } from "@/actions/auth";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const user = await signInUsingCredentials({ email, password });
    console.log(user);

    router.push("/dashboard");
  }

  return (
    <div className="p-2 ">
      <div className="flex flex-col card border">
        <form onSubmit={handleSubmit}>
          <LoginComponent />
          <div className="flex justify-around w-30 py-2">
            <button
              type="button"
              className="btn rounded-lg bg-gray-400 text-white"
            >
              Back
            </button>
            <button className="btn rounded-lg bg-blue-400 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

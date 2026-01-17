import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <>

      <Head>
        <title>Reset pasword</title>
      </Head>

      <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
        <div className="bg-white max-w-md w-full p-6 rounded-md shadow-md">
          <h2 className="text-center text-2xl font-bold mb-2">Forgot password</h2>
          <form
            className="flex flex-col gap-3  rounded-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="pl-2 rounded-md h-12 border border-gray-400 w-full "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 transition active:bg-blue-700 h-12 text-white cursor-pointer">
                Forgot password
              </button>
            </div>
          </form>
          <div className="my-3 text-center">
            <Link href={"/login"} className=" text-blue-600 hover:underline">
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

ForgotPassword.getLayout = (page) => page;

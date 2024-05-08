import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { option } from "../api/auth/[...nextauth]/option";

const Login = async () => {
  const session = getServerSession(option);
  return (
    <div>
      {session ? (
        <Link
          href="/api/auth/signout?callbackUrl=/"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Sign out
          </span>
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Sign In
          </span>
        </Link>
      )}
    </div>
  );
};

export default Login;

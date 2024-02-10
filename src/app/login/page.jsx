import React from "react";
import Image from "next/image";
import Link from "next/link";
import log from "../../assets/login.jpg";
export default function page() {
  return (
    <div className="flex w-full">
      <div className="w-[50%] h-[100vh] bg-white text-black py-12 px-32">
        <h2 className="mb-4 pt-8 font-bold text-center text-2xl">
          Welcome back
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Welcome back! Please enter your details
        </p>
        <form>
          <label htmlFor="Email">
            Email <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 mb-4 p-2 w-full rounded-md border-2 border-slate-100"
              required
            />
          </label>
          <br />
          <label htmlFor="Password">
            Password <br />
            <input
              type="password"
              placeholder="Create a password"
              className="mt-2 p-2 w-full rounded-md border-2 border-slate-100 mb-2"
              required
            />
          </label>
          <br />
          <div className="flex justify-between mt-5">
            <label htmlFor="remember">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="border-2 bg-white"
              />
              <span className="pl-1">Remember for 30 days</span>
            </label>
            <div className="text-violet-800 font-bold cursor: pointer">
              Forgot password?
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#55418b] mt-10 w-full p-2 rounded-md"
          >
            Log in
          </button>
        </form>
        <p className="mt-12 text-center">
          Don't have an account?
          <span className="font-bold text-blue-500">
            <Link href="../../Signup.jsx"> Signup </Link>
          </span>{" "}
        </p>
      </div>
      <div className="relative w-[50%] h-[100vh]">
        <Image src={log} className="h-[100vh]" />
        <div className=""></div>
      </div>
    </div>
    // </div>
  );
}

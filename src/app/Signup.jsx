import React from "react";
import Image from "next/image";
import up from "../assets/signup.jpg";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex w-full ">
      <div className="relative w-[60%] h-[100vh]">
        <Image src={up} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-purple-700 bg-opacity-50"></div>
      </div>
      <div className="w-[40%] bg-white text-black p-12">
        <h2 className="pb-8 font-bold text-xl">Sign up</h2>
        <form>
        <label htmlFor="Name">Name <br />
          <input type="text" placeholder="Enter your name"  className="mt-2 mb-4 p-2 w-full rounded-md border-2 border-slate-100" required />
        </label>
        <br />
        <label htmlFor="Email">Email <br />
          <input type="email" placeholder="Enter your email" className="mt-2 mb-4 p-2 w-full rounded-md border-2 border-slate-100"  required />
        </label>
        <br />
        <label htmlFor="Password"> Password <br />
          <input type="password" placeholder="Create a password" className="mt-2 p-2 w-full rounded-md border-2 border-slate-100 mb-2" required />
        </label>
        <br />
        <p>Must be at least 8 characters</p>
        <button type="submit" className="bg-blue-600 mt-20 w-full p-2 rounded-md">Get started</button>
        </form>
        
        <p className="mt-12 text-center">Already have an account? <span className="font-bold text-blue-500"><Link href="../dashboard">Log in </Link></span> </p>
      </div>
    </div>
  );
}

import { MessageCircleHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopIntro = () => {
  return (
    <div className=" min-h-full container md:p-20 flex-col p-6 hidden md:flex bg-gray-50 items-center justify-center">
      <div className="flex w-full md:p-20 items-center justify-end px-5">
        <Link
          href={"/sign-in"}
          className="bg-primary/20 px-3 flex items-center justify-center py-1 rounded-full"
        >
          <span className="text-xs text-primary font-medium">Skip</span>
        </Link>
      </div>
      {/* chat Logo */}
      <div className="mt-10 w-screen flex items-center justify-center px-5">
        <Image
          src={"/introImage.png"}
          alt="Intro-Image"
          width={420}
          height={480}
          className=" rounded-full shadow-md"
        />
      </div>
      {/* title  */}
      <div className="m-3 flex animate-bounce items-center justify-center px-5 text-primary">
        <MessageCircleHeart />
        <h1>Friendz Chat</h1>
      </div>
      {/* Intro text   */}
      <div className="m-5 pt-7 font-bold text-gray-700 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-4xl">
          Welcome to <br />
          <span className="">Friendz Chat</span>
        </h1>

        <p className="text-xs mt-2 text-gray-500 font-light">
          A simple chat app to connect with your friends and family.
        </p>
      </div>

      {/* button  */}
      <div className="w-full mx-auto h-2 flex items-center pt-10 px-5">
        <Link
          href={"/sign-up"}
          className="w-full bg-primary py-3 text-center text-white px-5 rounded-lg"
        >
          Let&apos;s Get Started
        </Link>
      </div>
      <div className="mt-10 text-xs">
        <p className="mt-3">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DesktopIntro;

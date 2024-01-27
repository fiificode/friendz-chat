import React from "react";
import { Button } from "../button";
import Link from "next/link";
import Image from "next/image";
import { MessageCircleHeart } from "lucide-react";

const MobileIntro = () => {
  return (
    <div className="flex min-h-full flex-col p-6 lg:hidden bg-gray-50 items-center justify-center">
      <div className="flex w-screen items-center justify-end px-5">
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
        <h1 className="text-2xl">
          Welcome to <br />
          <span className="">Friendz Chat</span>
        </h1>

        <p className="text-xs mt-2 text-gray-500 font-light">
          A simple chat app to connect with your friends and family.
        </p>
      </div>

      {/* button  */}
      <div className="w-screen h-2 pt-5 px-5">
        <Button className="w-full">Let&apos;s Get Started</Button>
      </div>
      <div className="mt-10 text-xs">
        <p className="mt-2">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MobileIntro;

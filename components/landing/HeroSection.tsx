"use client";
import React from "react";
import MessageInput from "../common/MessageInput";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center w-full min-h-screen px-2">
      <div className="w-full max-w-7xl min-h-screen flex justify-center items-center gap-10 py-20">
        <div className="flex flex-col justify-center items-center gap-8 max-w-2xl w-full text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="">
              <Image
                src="/halo.svg"
                alt=""
                width={80}
                height={80}
                className="dark:invert"
                draggable="false"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-br from-muted to-secondary bg-clip-text text-transparent">
              Build with Halo
            </h1>
          </div>
          <p className="text-muted text-base lg:text-lg leading-relaxed">
            The simplest way to turn ideas into working projects. Start building
            your next big idea with our intuitive platform.
          </p>
          <div className="w-full flex justify-center px-2">
            <MessageInput placeholder="What do you want to build?" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

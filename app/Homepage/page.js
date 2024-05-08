"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Login from "../Login/page";


const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-9 h-full mt-20">
      <div>
        <h1 className="text-center  sm:text-3xl lg:text-5xl lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold text-3xl">
          {" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Complete roadmap for",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Complete roadmap for Frontend",
              1000,
              "Complete roadmap for Backend",
              1000,
              "Complete roadmap for Database",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="text-center text-[#ADB7BE] w-80">
        <p>
          This is a realistic roadmap that will help you become a full-stack
          developer in 6 months. Everthing you need in one place.
        </p>
      </div>
      <div className="lg:flex">
        <Link
          href="/Frontend"
          className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-center"
        >
          Get Started
        </Link>
       <Login />
      </div>
    </main>
  );
};

export default HomePage;

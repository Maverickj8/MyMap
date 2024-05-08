import React from "react";
import Link from "next/link";
import Nav from "../Nav/page";

const Backend = () => {
  return (
    <>
    <Nav />
    <section className="px-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
            NODE.JS
          </h2>
        </div>
        <div>
          <p className="text-2xl font-bold text-white mb-4">
            Essential topics in NODE.JS
          </p>
          <ul className="list-disc">
            <li>Understanding Node.js</li>
            <li>Version control (Git)</li>
            <li>Package Manager (npm)</li>
            <li>Task Runner (Nodemon)</li>
            <li>Web Frameworks (Express.js)</li>
            <li>API Clients</li>
            <li>ORM (Mongoose)</li>
            <li>NoSQL Database (MongoDB)</li>
            <li>Security Libraries (Bcrypt, AuthO, jwt)</li>
          </ul>
        </div>
      </div>
      <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
        Projects
      </p>
      <ul className="flex flex-col">
        <Link
          href="/Backend"
          className="text-[#ADB7BE] hover:underline"
        >
          Twitter clone Web App
        </Link>
      </ul>
    </section>
    </>
  );
};

export default Backend;

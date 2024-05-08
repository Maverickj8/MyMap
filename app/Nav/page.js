import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header>
      <nav className="flex item-center justify-between py-4 px-3 backdrop-blur">
        <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
          MyMap
        </div>
        <div className="space-x-5">
          <Link
            href="/Frontend"
            className="text-[#F3F2ED] hover:bg-slate-800 hover:text-white p-2 rounded-full "
          >
            Frontend
          </Link>
          <Link
            href="/Backend"
            className="text-[#F3F2ED] hover:bg-slate-800  hover:text-white p-2 rounded-full"
          >
            Backend
          </Link>
          {/* <Link href="/Memories" className="text-[#F3F2ED] hover:bg-slate-800  hover:text-white p-2 rounded-full">Memories</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

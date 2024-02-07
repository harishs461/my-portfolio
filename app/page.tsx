"use client"
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useContext } from "react";
import { IsSideBarVisibleContext } from "@/lib/SidebarContext";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home() {
  const IsSideBarVisibleContextValue = useContext(IsSideBarVisibleContext);
  const isSideBarVisible = IsSideBarVisibleContextValue.isSideBarVisible;

  return (
    <div className="relative flex flex-col md:grid md:grid-cols-2 items-center">
      <div className="p-5 md:p-20 flex flex-col gap-y-6 md:gap-y-12">
        <h1 className="font-extrabold text-4xl md:text-7xl leading-tight md:leading-normal">Hello,<br /> I am <span className="text-amber-500">Harish</span> <br /> Indian People</h1>
        <Link className="bg-amber-500 px-4 py-1.5 md:px-8 md:py-3 rounded-lg text-white hover:text-gray-300 w-fit" href={`mailto:harishs461@gmail.com`}>Email &rarr;
        </Link>
        <ul className=" flex space-x-6">
          <li><a href="https://github.com/harishs461" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" text-2xl md:text-3xl" />
          </a></li>
          <li><a href="#">
            <FaInstagramSquare className=" text-2xl md:text-3xl" />
          </a></li>
          <li><a href="https://www.linkedin.com/in/harish-sharma-72244527b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className=" text-2xl md:text-3xl" />
          </a></li>
        </ul>
      </div>
      <div className="p-5 md:p-20 order-first md:order-last">
        <img src='/floating-robot_78370-3669.jpg' alt="bot image" className="rounded-xl" ></img>
      </div>
      {/* Sidebar div */}
      <div className={`md:hidden fixed py-4 top-15 left-0 w-1/2 h-full bg-white shadow-md shadow-gray-200 z-20 ${isSideBarVisible ? 'block' : 'hidden'}`}>
        <Sidebar />
      </div>
    </div>
  );
}

"use client"
import { IsSideBarVisibleContext } from "@/lib/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState, useEffect } from "react"

export default function Navbar() {
    const IsSideBarVisibleContextValue = useContext(IsSideBarVisibleContext);
    const toggleSidebar = IsSideBarVisibleContextValue.toggleSidebar;
    const [ activePage, setActivePage ] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setActivePage(pathname);
        console.log(pathname)
    }, [pathname] );
    
    return (
        <nav className=" bg-white shadow-md shadow-gray-200 h-full w-full p-3.5 md:p-6 flex justify-between items-center text-black text-base font-medium md:px-16">
            {/* Left Side-- My name */}
            <div className="order-last md:order-first">
                <Link href={"/"}><h1 className="w-fit">developedByHarish<span className=" text-3xl md:text-5xl text-amber-500">.</span></h1></Link>
            </div>

            {/* Right side -- Links */}
            <div className="hidden md:flex ">
                <ul className="flex gap-x-10">
                    <li>
                        <a href="/" className= { activePage === '/' ? 'active-link' : 'hover:text-gray-300'} >Home</a>
                    </li>
                    <li>
                        <a href="/about" className= {activePage === '/about' ? 'active-link' : 'hover:text-gray-300'}>About</a>
                    </li>
                    <li>
                        <a href='/contact' className= {activePage === '/contact' ? 'active-link' : 'hover:text-gray-300'} >Contact</a>
                    </li>
                </ul>
            </div>

            {/* Sidebar for mobile */}
            <div className="md:hidden">
                <button className=" text-2xl hover:text:gray:300" onClick={toggleSidebar}>☰</button>
            </div>
        </nav>
    )
}
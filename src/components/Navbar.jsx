'use client'

import Link from "next/link";

import Image from "next/image";
import Menu from "./Menu";

import icon from '../../public/img/logo.png'

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <Menu className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"/>
          </div>
          <div className="">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={icon} className="w-12" alt="amplop duit logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Amplop Duit</span>
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <Menu className='menu menu-horizontal px-1'/>
        </div>
      </div>     
    </nav>    
  );
}

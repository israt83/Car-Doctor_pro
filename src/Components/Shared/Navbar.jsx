import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contacts", path: "/contacts" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link href="/">
          <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              className="font-semibold hover:text-red-700"
              href={item.path}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="navbar-end">
     <div className="flex items-center space-x-3">
     <IoCartOutline className="text-xl" />
      <IoSearchOutline className="text-xl"/>
        <a className="btn btn-outline text-[#FF3811]">Appointment</a>
     </div>

      </div>
    </div>
  );
};

export default Navbar;

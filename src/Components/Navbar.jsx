
import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const links = <>
          <NavLink to='/' className={({ isActive }) => isActive ? "flex items-center gap-1 text-[#632EE3] font-bold border-b-2 border-[#632EE3]" : "flex items-center gap-1 font-bold"}><IoHomeOutline />Home</NavLink>
          <NavLink to='/allapps' className={({ isActive }) => isActive ? "flex items-center gap-1 text-[#632EE3] font-bold border-b-2 border-[#632EE3]" : "flex items-center gap-1 font-bold"}><AiOutlineAppstore />Apps</NavLink>
          <NavLink to='/installapps' className={({ isActive }) => isActive ? "flex items-center gap-1 text-[#632EE3] font-bold border-b-2 border-[#632EE3]" : "flex items-center gap-1 font-bold"}><MdInstallDesktop />Installation</NavLink>
    </>
  return (
    <div className="navbar bg-base-100 md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="flex items-center">
            <a className="btn btn-ghost text-2xl font-extrabold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img src="/src/assets/logo.png" className="w-10"/>HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="body-font menu menu-horizontal px-1 gap-6">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 text-white">
        <Link to='https://github.com/Sehabulislam' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:shadow-2xl hover:scale-102"><FaGithub className="w-5 h-5" />Contribute</Link>
      </div>
    </div>
  );
};

export default Navbar;

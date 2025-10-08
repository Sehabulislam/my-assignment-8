import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white rounded-t-2xl p-10">
      <aside>
        <img src="/src/assets/logo.png" alt="logo" className="w-15" />
        <p>
          HERO.IO
          <br />
          Discover, Install, and Enjoy top-rated apps easily.
        </p>
        <p className="mt-4">
          Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Apps</a>
        <a className="link link-hover">My Installation</a>
        <a className="link link-hover"></a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover ">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <a className="link link-hover flex items-center gap-2">
          <FaGithub />
          GitHub
        </a>
        <a className="link link-hover flex items-center gap-2">
          <FaLinkedin /> LinkedIn
        </a>
        <a className="link link-hover flex items-center gap-2">
          <FaTwitter />
          Twitter
        </a>
        <a className="link link-hover flex items-center gap-2">
          <IoLogoYoutube />
          Youtube
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

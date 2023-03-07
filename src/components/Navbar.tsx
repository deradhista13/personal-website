import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-lg px-10">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl font-bold text-[#041C32]">
          Adhista.
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-[#041C32] font-semibold">My Project</a>
          </li>
          <li>
            <a className="text-[#041C32] font-semibold">About Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn capitalize bg-[#0A6289] text-white border-none">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;

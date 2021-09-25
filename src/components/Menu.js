import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Book } from "../assets/svg/book.svg";
import { ReactComponent as Briefcase } from "../assets/svg/briefcase.svg";
import { ReactComponent as GraduationCap } from "../assets/svg/graduation-cap.svg";
import { ReactComponent as Home } from "../assets/svg/home.svg";
import { ReactComponent as PaperPlane } from "../assets/svg/paper-plane.svg";
import { ReactComponent as User } from "../assets/svg/user.svg";

export default function Menu(props) {
  return (
    <div className='h-full'>
      <ul className="bg-gray-800 text-xs text-gray-100">
        <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2 text-gray-100" activeClassName="text-yellow-400" to="/home">
            <Home
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></Home>
            <p className="mt-2">Home</p>
          </NavLink>
        </li>
        <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2 text-gray-100" activeClassName="text-yellow-400" to="/aboutme">
            <User
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></User>
            <p className="mt-2">AboutMe</p>
          </NavLink>
        </li>
        <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2 text-gray-100" activeClassName="text-yellow-400" to="/resume">
            <GraduationCap
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></GraduationCap>
            <p className="mt-2">Resume</p>
          </NavLink>
        </li>
        <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2 text-gray-100" activeClassName="text-yellow-400" to="/porfolio">
            <Briefcase
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></Briefcase>
            <p className="mt-2">Porfolio</p>
          </NavLink>
        </li>
        {/* <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2" activeClassName="text-yellow-400" to="/blog">
            <Book
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></Book>
            <p className="mt-2">Blog</p>
          </NavLink>
        </li> */}
        <li className="flex flex-col items-center border-b border-gray-500 p-4">
          <NavLink className="mt-2 text-gray-100" activeClassName="text-yellow-400" to="/contact">
            <PaperPlane
              className="mx-auto "
              fill="#9CA3AF"
              width={30}
              height={29}
            ></PaperPlane>
            <p className="mt-2">Contact</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

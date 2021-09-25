import React from "react";
import { ReactComponent as Portfolio } from "../assets/svg/portfolio.svg";
import demo1 from "../assets/img/demo1.png";
import demo2 from "../assets/img/demo2.png";
import demo3 from "../assets/img/demo3.jpg";
import demo4 from "../assets/img/demo4.png";
import demo5 from "../assets/img/demo5.png";
import demo6 from "../assets/img/demo6.png";
import demomini1 from "../assets/img/demomini1.png";
import demomini2 from "../assets/img/demomini2.png";
import demomini3 from "../assets/img/demomini3.png";
import minidemo4 from "../assets/img/minidemo4.png";
import minidemo5 from "../assets/img/minidemo5.png";
import minidemo6 from "../assets/img/minidemo6.png";
import democinema from "../assets/img/democinema.png";
import demojira from "../assets/img/demojira.png";
import democv from "../assets/img/democv.png";
import { NavLink } from "react-router-dom";

export default function DesignProject(props) {
  return (
    <div className="w-full text-gray-100 lg:p-14">
      <div className="flex">
        <div className="text-3xl font-semibold mr-3 mt-2">Portfolio</div>
        <Portfolio fill="#FBBF24" width={40} height={40}></Portfolio>
      </div>
      <div className="my-4 space-x-5">
        <NavLink to='/porfolio'  className="cursor-pointer text-gray-400 hover:text-gray-300">
          All
        </NavLink>
        <NavLink to='/porfolio/designproject' activeClassName="text-yellow-300" className="cursor-pointer text-gray-400 hover:text-gray-300">
          Design Project
        </NavLink>
        <NavLink to='/porfolio/codingproject' activeClassName="text-yellow-300" className="cursor-pointer text-gray-400 hover:text-gray-300">
          Coding Project
        </NavLink>
      </div>

      <div className="lg:flex">
        <div className="lg:grid grid-cols-3 gap-3 justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo4} alt="demo4" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Carousel 1
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo5} alt="demo5" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Carousel 2
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo6} alt="demo6" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Themes
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://www.figma.com/file/Gc6fEczJDy8ZoOw0z53zEE/Zupi-Paracord?node-id=0%3A1">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>       

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo1} alt="demo1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Carousel 3
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo2} alt="demo2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Carousel 4
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demo3} alt="demo3" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Logo
              </div>
              <p className="text-gray-400 text-base">
                A small project is taken and inspired which based on my handmade
                product.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out">
                  <a href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #illustrator
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #paracord
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #strong
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

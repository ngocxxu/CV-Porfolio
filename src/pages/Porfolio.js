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

export default function Porfolio(props) {
  return (
    <div className="w-full text-gray-100 lg:p-14 bg-gray-800 animate__animated animate__fadeIn">
      <div className="flex">
        <div className="text-3xl font-semibold mr-3 mt-2">Portfolio</div>
        <Portfolio fill="#FBBF24" width={40} height={40}></Portfolio>
      </div>
      <div className="my-4 space-x-5">
      <NavLink to='/porfolio' activeClassName="text-yellow-300" className="cursor-pointer text-gray-400 hover:text-yellow-300">
          All
        </NavLink>
        <NavLink to='/porfolio/designproject'  className="cursor-pointer text-gray-400 hover:text-yellow-300">
          Design Project
        </NavLink>
        <NavLink to='/porfolio/codingproject'  className="cursor-pointer text-gray-400 hover:text-yellow-300">
          Coding Project
        </NavLink>
      </div>

      <div className="lg:flex">
        <div className="lg:grid grid-cols-3 gap-3 justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={democinema} alt="democinema" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Cinema Management
              </div>
              <p className="text-gray-400 text-base">
                Cinema web is used to such as booking tickets as customer role
                and film & user management as admin role.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className="text-gray-100 hover:text-gray-100" href="https://github.com/ngocxxu/Cinema-Project">Github</a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className="text-gray-100 hover:text-gray-100" href="https://zupi-cinema-project.web.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #booking
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #manage
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demojira} alt="demojira" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Jira Management
              </div>
              <p className="text-gray-400 text-base">
                Jira web is used to control the projects and tasks for members
                and help managers can be easy interact.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/JIRA_PROJECT">Github</a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://zupi-jira-project.web.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #tasks
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #manage
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={democv} alt="democv" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Curriculum Vitae
              </div>
              <p className="text-gray-400 text-base">
                Cinema web is used to such as booking tickets as customer role
                and film & user management as admin role.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/CV-Porfolio">Github</a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://zupi-cinema-project.web.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #cv
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #information
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demomini1} alt="demomini1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                To Do List
              </div>
              <p className="text-gray-400 text-base">
                Sometimes you have to plan for your project and arrage it how to
                much suitable.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/ReactJS-Excersice">
                    Github
                  </a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://todolist-bono.netlify.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #tasks
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #plan
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demomini2} alt="demomini2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Chinese Dice
              </div>
              <p className="text-gray-400 text-base">
                Dice games are games that use or incorporate one or more dice as
                their sole or central component.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/BC08E-TaiXiu-Bono">
                    Github
                  </a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://taixiucovid.netlify.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #game
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #dice
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={demomini3} alt="demomini3" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Rock, Paper, Scissors
              </div>
              <p className="text-gray-400 text-base">
                Between two people which each player randomly forms one of three
                shapes from their hand.{" "}
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/BC08E-OanTuTi-BaoNgoc">
                    Github
                  </a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://oantuticovid.netlify.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #reactjs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #game
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #hand
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={minidemo4} alt="minidemo4" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Industry
              </div>
              <p className="text-gray-400 text-base">
                It's a center of economy, including manufacturing and production
                of other intermediate or final goods.{" "}
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/Industry-PJ">Github</a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="http://industry-world.surge.sh/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #html
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #industry
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #sass
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={minidemo5} alt="minidemo5" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Farming
              </div>
              <p className="text-gray-400 text-base">
                It's devoted primarily to agricultural processes with producing
                food and other crops
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/Farm-Web">Github</a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://farm-bono.netlify.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #html
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #farm
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #sass
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4">
            <img className="w-full" src={minidemo6} alt="minidemo6" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">
                Corporation
              </div>
              <p className="text-gray-400 text-base">
                A corporation is a group of people or a company—authorized by
                the state. Corporations come in many types.
              </p>
              <div className="flex justify-between space-x-2 mt-6">
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://github.com/ngocxxu/project-Corp-Web">
                    Github
                  </a>
                </button>
                <button className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out">
                  <a className='text-gray-100 hover:text-gray-100' href="https://corp-bono.netlify.app/">Demo</a>
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #html
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #corporation
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out">
                #sass
              </span>
            </div>
          </div>

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
                  <a className='text-gray-100 hover:text-gray-100' href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
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
                  <a className='text-gray-100 hover:text-gray-100' href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
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
                  <a className='text-gray-100 hover:text-gray-100' href="https://www.figma.com/file/Gc6fEczJDy8ZoOw0z53zEE/Zupi-Paracord?node-id=0%3A1">Demo</a>
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
                  <a className='text-gray-100 hover:text-gray-100' href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
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
                  <a className='text-gray-100 hover:text-gray-100' href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
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
                  <a className='text-gray-100 hover:text-gray-100' href="https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ">Demo</a>
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

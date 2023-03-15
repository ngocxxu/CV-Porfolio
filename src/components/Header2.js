import dayjs from 'dayjs';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MainPhoto from '../assets/img/avame.jpg';
import '../assets/styles/Header.css';
import { ITEM_SHOW, TOGGLE_MENU } from '../redux/const/const';

export default function Header2() {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-between bg-gray-600 lg:w-1/3 fixed lg:static w-4/5 z-10 right-0 transition duration-500 ease-in-out h-full animate__animated animate__fadeInRight'>
      <div className=' lg:pt-24 lg:mx-20'>
        <div className='mx-auto mt-8' style={{ width: 180 }}>
          <img
            className='max-w-full rounded-full border-white border-2'
            src={MainPhoto}
            alt='Bono'
          ></img>
        </div>
        <div className='text-center space-y-4'>
          <p className='text-gray-100 text-4xl font-semibold mt-6 mb-0'>
            Ngoc Quach
          </p>
          <p className='text-gray-300 text-lg'>Frontend Development</p>
          <div className='flex justify-center space-x-4 text-3xl'>
            <div>
              <a href='https://www.linkedin.com/in/ngoc-quach-17397620a/'>
                <i className='fab fa-linkedin text-white hover:text-red-400'></i>{' '}
              </a>
            </div>
            <div>
              <a href='https://github.com/ngocxxu'>
                <i className='fab fa-github-square text-white hover:text-yellow-400'></i>{' '}
              </a>
            </div>
            <div>
              <a href='https://www.facebook.com/ngocquach97'>
                <i className='fab fa-facebook-square text-white hover:text-blue-500'></i>{' '}
              </a>
            </div>
          </div>
          <div className='text-gray-300 text-lg lg:hidden'>
            <ul>
              <li>
                <NavLink
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_MENU,
                      booleanMenu: false,
                    });
                  }}
                  className='mt-2 text-gray-100 hover:text-yellow-400'
                  activeClassName='text-yellow-400'
                  to='/home'
                >
                  <p className='mt-2'>Home</p>
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_MENU,
                      booleanMenu: false,
                    });
                    dispatch({
                      type: ITEM_SHOW,
                      num: 1,
                    });
                  }}
                  className='mt-2 text-gray-100 hover:text-yellow-400'
                  activeClassName='text-yellow-400'
                  to='/aboutme'
                >
                  <p className='mt-2'>AboutMe</p>
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_MENU,
                      booleanMenu: false,
                    });
                  }}
                  className='mt-2 text-gray-100 hover:text-yellow-400'
                  activeClassName='text-yellow-400'
                  to='/resume'
                >
                  <p className='mt-2'>Resume</p>
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_MENU,
                      booleanMenu: false,
                    });
                  }}
                  className='mt-2 text-gray-100 hover:text-yellow-400'
                  activeClassName='text-yellow-400'
                  to='/porfolio'
                >
                  <p className='mt-2'>Porfolio</p>
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_MENU,
                      booleanMenu: false,
                    });
                  }}
                  className='mt-2 text-gray-100 hover:text-yellow-400'
                  activeClassName='text-yellow-400'
                  to='/contact'
                >
                  <p className='mt-2'>Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className='download-button text-gray-100 hover:text-yellow-500 bg-gray-500 border-gray-100 border-2 py-2 px-7 rounded-full hover:bg-white mt-8'>
              <a
                className='text-gray-100 hover:text-yellow-500'
                href='https://www.topcv.vn/xem-cv/DFlWBgQGAw9dDwILVwIFVg4GCQ8MAgIDXFQLUg74ed'
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <p className='text-gray-300 text-xs text-center py-4 mb-0 '>
        © {dayjs().year()} All rights reserved.
      </p>
    </div>
  );
}

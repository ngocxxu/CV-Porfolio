import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Portfolio } from '../assets/svg/portfolio.svg';
import { PortfolioCodingList } from './PortfolioList';

export default function CodingProject(props) {
  return (
    <div className='w-full text-gray-100 lg:p-14 bg-gray-800'>
      <div className='flex'>
        <div className='text-3xl font-semibold mr-3 mt-2'>Portfolio</div>
        <Portfolio fill='#FBBF24' width={40} height={40}></Portfolio>
      </div>
      <div className='my-4 space-x-5'>
        <NavLink
          to='/porfolio'
          className='cursor-pointer text-gray-400 hover:text-yellow-300'
        >
          All
        </NavLink>
        <NavLink
          to='/porfolio/codingproject'
          activeClassName='text-yellow-300'
          className='cursor-pointer text-gray-400 hover:text-yellow-300'
        >
          Coding Project
        </NavLink>
        <NavLink
          to='/porfolio/designproject'
          activeClassName='text-yellow-300'
          className='cursor-pointer text-gray-400 hover:text-yellow-300'
        >
          Design Project
        </NavLink>
      </div>

      <div className='lg:flex'>
        <div className='lg:grid grid-cols-3 gap-3 justify-center'>
          <PortfolioCodingList />
        </div>
      </div>
    </div>
  );
}

import { NavLink } from 'react-router-dom';

export const NavMenuPortfolio = () => (
  <div className='my-4 space-x-5 ml-6 lg:ml-0'>
    <NavLink
      to='/porfolio'
      activeClassName='text-yellow-300'
      className='cursor-pointer text-gray-400 hover:text-yellow-300'
    >
      All
    </NavLink>
    <NavLink
      to='/porfolio/codingproject'
      className='cursor-pointer text-gray-400 hover:text-yellow-300'
    >
      Coding Project
    </NavLink>
    <NavLink
      to='/porfolio/designproject'
      className='cursor-pointer text-gray-400 hover:text-yellow-300'
    >
      Design Project
    </NavLink>
  </div>
);

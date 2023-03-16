import React, { useEffect } from 'react';
import { ReactComponent as Portfolio } from '../assets/svg/portfolio.svg';
import { NavMenuPortfolio } from '../components/NavMenuPortfolio';
import {
  PortfolioCodingList,
  PortfolioDesignList
} from '../components/PortfolioList';

export default function Porfolio(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full text-gray-100 lg:p-14 bg-gray-800 animate__animated animate__fadeIn'>
      <div className='flex'>
        <div className='text-3xl font-semibold mr-3 lg:mt-2 mt-10 ml-6 lg:ml-0'>
          Portfolio
        </div>
        <Portfolio
          className='mt-8 lg:mt-0'
          fill='#FBBF24'
          width={40}
          height={40}
        ></Portfolio>
      </div>
      <NavMenuPortfolio />

      <div className='lg:flex lg:pb-0 pb-1'>
        <div className='lg:grid grid-cols-3 gap-3 justify-center '>
          <PortfolioCodingList />
          <PortfolioDesignList />
        </div>
      </div>
    </div>
  );
}

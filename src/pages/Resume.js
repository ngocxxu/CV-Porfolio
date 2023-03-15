import React, { useEffect } from 'react';
import '../assets/styles/Resume.css';
import { ReactComponent as Resumes } from '../assets/svg/resume.svg';
import { ReactComponent as Badge } from '../assets/svg/badge.svg';
import { Info } from '../info';

export default function Resume(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full text-gray-100 lg:p-14 bg-gray-800 animate__animated animate__zoomIn'>
      <div className='flex'>
        <div className='text-3xl font-semibold mr-3 lg:mt-2 mt-10 ml-6 lg:ml-0'>
          Resumes
        </div>
        <Resumes
          className='mt-8 lg:mt-0'
          fill='#FBBF24'
          width={40}
          height={40}
        ></Resumes>
      </div>
      <div className='lg:flex'>
        <div className='resume-left lg:w-3/5 mr-3'>
          <div className='text-2xl font-semibold mt-10 ml-6 lg:ml-0'>
            <span className='border-b-2 text-gray-100 border-yellow-400'>
              Experience
            </span>
          </div>
          <div className='mt-7 '>
            {Info.resumePage.experience.map((ex, index) => (
              <div key={index} className='flex relative'>
                <div className='education-left text-right mt-1'>
                  <p className='text-gray-300 font-medium'>{ex.time}</p>
                  <p className='text-gray-400 text-sm'>{ex.company}</p>
                </div>
                <div className='vertical-axis-4 border-l border-gray-400 mx-6'></div>
                <div className='education-right mb-8'>
                  <p className='text-gray-100 font-medium text-lg'>
                    {ex.position}
                  </p>
                  {ex.description.map((item) => (
                    <p className='text-gray-400 mb-0'>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='text-2xl font-semibold mt-10 ml-6 lg:ml-0'>
            <span className='border-b-2 text-gray-100 border-yellow-400'>
              Education
            </span>
          </div>
          <div className='mt-7 '>
            {Info.resumePage.education.map((ex, index) => (
              <div key={index} className='flex relative'>
                <div className='education-left text-right mt-1'>
                  <p className='text-gray-300 font-medium'>{ex.time}</p>
                  <p className='text-gray-400 text-sm'>{ex.company}</p>
                </div>
                <div className='vertical-axis-4 border-l border-gray-400 mx-6'></div>
                <div className='education-right mb-8'>
                  <p className='text-gray-100 font-medium text-lg'>
                    {ex.position}
                  </p>
                  {ex.description.map((item) => (
                    <p className='text-gray-400 mb-0'>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='resume-right lg:w-2/5'>
          <div className='text-2xl font-semibold mt-10 pl-6 lg:pl-0 '>
            Coding
            <span className='text-yellow-400'> Skills</span>
          </div>
          {Info.resumePage.skill.map((obj, index) => (
            <div key={index} className='mt-4 flex flex-wrap mx-5 lg:mx-0'>
              <span className='bg-gray-600 text-gray-100 px-2 py-1 rounded m-1'>
                {obj.title}
              </span>
              {obj.detail.map((item) => (
                <span className='bg-yellow-600 text-gray-100 px-2 py-1 rounded m-1'>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='text-2xl font-semibold mt-10 pl-6 lg:pl-0'>
          <span className='border-b-2 text-gray-100 border-yellow-400'>
            Certificates
          </span>
        </div>
        <div className='lg:flex mt-8 lg:pb-0 pb-6 mx-6 lg:mx-0'>
          <div className='flex border-gray-500 border-2 lg:w-1/3 rounded-xl lg:mx-0 mx-auto'>
            <div className='flex justify-center items-center border-gray-500 border-r-2 py-6 px-10 bg-gray-700 rounded-l-xl'>
              <Badge width={40} height={40} fill='#D1D5DB'></Badge>
            </div>
            <div className='p-6 '>
              <p className='text-gray-100 text-md font-medium'>TOEIC</p>
              <p className='text-gray-400 text-md'>670 Scores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

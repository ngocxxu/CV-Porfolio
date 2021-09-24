import React from "react";
import Carousel from "react-elastic-carousel";
import '../assets/styles/AboutMe.css'
import { ReactComponent as Adaptation } from "../assets/svg/adaptation.svg";
import { ReactComponent as Administration } from "../assets/svg/administration.svg";
import { ReactComponent as Creation } from "../assets/svg/creation.svg";
import { ReactComponent as Code } from "../assets/svg/programming-code-signs.svg";
import { ReactComponent as QuoteLeft } from "../assets/svg/left-quote.svg";
import { ReactComponent as QuoteRight } from "../assets/svg/right-quote-sign.svg";
import { ReactComponent as Clock } from "../assets/svg/alarm-clock.svg";
import { ReactComponent as Happy } from "../assets/svg/happy.svg";
import { ReactComponent as Shuttle } from "../assets/svg/shuttle.svg";

export default function AboutMe(props) {
  return (
    <div className="w-full text-gray-100 lg:p-14">
      <div className="text-3xl font-semibold ">
        About
        <span className="text-yellow-400"> Me</span>
      </div>
      <div className="lg:flex space-x-12 pt-8">
        <div className="w-7/12">
          <p className="text-gray-200">
            Previously I used to be a chemical engineering but due to both
            logical and creative passion for IT since I studied in middle
            school, I decided to go back to it. I have known the frontend and
            feel interested in it because I want to bring the best-completed
            products for consumers. at the same time, can satisfy all the
            requirements from them. Because I don't have an IT background, I
            spend more than 6 hours daily self-study and register for a course
            studying at Cybersoft Academy to speed up the process and make my
            knowledge steadier. After spending a few months studying, I have a
            good grasp of HTML, CSS, Bootstrap, SASS, ... and some basic editing
            software such as AI, PTS for application in frontend.
          </p>
        </div>
        <div className="">
          <ul className=" space-y-2">
            <li className="text-yellow-400 font-medium">
              Birthday
              <span className="text-gray-200 ml-2 font-normal">
                {" "}
                04.03.1997
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Residence
              <span className="text-gray-200 ml-2 font-normal"> Viet Nam</span>
            </li>
            <li className="text-yellow-400 font-medium">
              Address
              <span className="text-gray-200 ml-2 font-normal">
                {" "}
                Tran Hung Dao Street, HCM City
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Email
              <span className="text-gray-200 ml-2 font-normal">
                {" "}
                ngocquach43@gmail.com
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Phone
              <span className="text-gray-200 ml-2 font-normal">
                {" "}
                +84 902 4323 97
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-14">
        What
        <span className="text-yellow-400"> I Can Do</span>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="text-gray-200 mt-6">
          <Code fill="#FBBF24" width={42} height={42}></Code>
          <p className="font-medium text-xl my-1 ">Code</p>
          <p className="text-gray-300">
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
        <div className="text-gray-200 mt-6">
          <Creation fill="#FBBF24" width={42} height={42}></Creation>
          <p className="font-medium text-xl my-1 ">Creation</p>
          <p className="text-gray-300">
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
        <div className="text-gray-200 mt-6">
          <Administration
            fill="#FBBF24"
            width={42}
            height={42}
          ></Administration>
          <p className="font-medium text-xl my-1 ">Management</p>
          <p className="text-gray-300">
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
        <div className="text-gray-200 mt-6">
          <Adaptation fill="#FBBF24" width={42} height={42}></Adaptation>
          <p className="font-medium text-xl my-1 ">Adaptation</p>
          <p className="text-gray-300">
            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
            tortor bibendum massa, sit amet ultricies ex lectus scelerisque
            nibh. Ut non sodales.
          </p>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-14 mb-8">
        Inspirational
        <span className="text-yellow-400"> Quotes</span>
      </div>
      <div className="" style={{cursor: 'grab'}}>
        <Carousel itemsToScroll={2} itemsToShow={2}>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
              <div className="flex justify-between">
              <div>
                <p className='text-gray-100 text-md '>Julia Hickman</p>
                <p className='text-gray-300 text-xs'>Omni Source</p>
              </div>
              <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
              <div className="flex justify-between">
              <div>
                <p className='text-gray-100 text-md '>Julia Hickman</p>
                <p className='text-gray-300 text-xs'>Omni Source</p>
              </div>
              <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
              <div className="flex justify-between">
              <div>
                <p className='text-gray-100 text-md '>Julia Hickman</p>
                <p className='text-gray-300 text-xs'>Omni Source</p>
              </div>
              <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
              <div className="flex justify-between">
              <div>
                <p className='text-gray-100 text-md '>Julia Hickman</p>
                <p className='text-gray-300 text-xs'>Omni Source</p>
              </div>
              <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
        </Carousel>
      </div>
      <div className="text-2xl font-semibold mt-6 mb-8">
        Fun
        <span className="text-yellow-400"> Facts</span>
      </div>
      <div className="flex space-x-8">
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Happy className="mx-auto" fill="#FBBF24" width={30} height={30}></Happy>
          <p className='text-gray-100 my-3 font-medium'>Happy Index</p>
          <p className='text-gray-300 text-4xl'>100</p>
        </div>
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Clock className="mx-auto" fill="#FBBF24" width={30} height={30}></Clock>
          <p className='text-gray-100 my-3 font-medium'>Working Hours</p>
          <p className='text-gray-300 text-4xl'>720</p>
        </div>
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Shuttle className="mx-auto" fill="#FBBF24" width={30} height={30}></Shuttle>
          <p className='text-gray-100 my-3 font-medium'>Overcome Index</p>
          <p className='text-gray-300 text-4xl'>200</p>
        </div>
      </div>

    </div>
  );
}

import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/AboutMe.css";
import CountUp from "react-countup";
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
  const dispatch = useDispatch();
  const { itemShow } = useSelector((state) => state.MenuReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="w-full bg-gray-800 text-gray-100 lg:p-14 animate__animated animate__fadeInUp">
      <div className="text-3xl font-semibold lg:pt-2 pt-10 pl-6 lg:pl-0">
        About
        <span className="text-yellow-400"> Me</span>
      </div>
      <div className="lg:flex space-x-12 pt-8">
        <div className="lg:w-7/12 px-6 lg:px-0">
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
        <div className="lg:w-3/12 pt-4 lg:pt-0">
          <ul className=" space-y-2 ">
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
      <div className="text-2xl font-semibold mt-14 pl-6 lg:pl-0">
        What
        <span className="text-yellow-400"> I Can Do</span>
      </div>
      <div className="lg:grid grid-cols-2 ">
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Code fill="#FBBF24" width={42} height={42}></Code>
          <p className="font-medium text-xl my-1 ">Code</p>
          <p className="text-gray-300">
            I can spend all day coding without getting tired. My working time is
            very flexible, it can fit many projects.
          </p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Creation fill="#FBBF24" width={42} height={42}></Creation>
          <p className="font-medium text-xl my-1 ">Creation</p>
          <p className="text-gray-300">
            For me, creativity is equally important, it helps me evaluate and
            analyze the complexity of the interface.
          </p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Administration
            fill="#FBBF24"
            width={42}
            height={42}
          ></Administration>
          <p className="font-medium text-xl my-1 ">Management</p>
          <p className="text-gray-300">
            For each project always requires completion time, so I always have
            to manage the assigned tasks well.
          </p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Adaptation fill="#FBBF24" width={42} height={42}></Adaptation>
          <p className="font-medium text-xl my-1 ">Adaptation</p>
          <p className="text-gray-300">
            I can adapt well in different working environments or different
            projects without feeling much pressure.
          </p>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-14 mb-8 pl-6 lg:pl-0">
        Inspirational
        <span className="text-yellow-400"> Quotes</span>
      </div>
      <div className="" style={{ cursor: "grab" }}>
        <Carousel itemsToScroll={2} itemsToShow={itemShow}>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Today is hard, tomorrow will be worse but the day after tomorrow
                will be sunshine.
              </p>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-gray-100 text-md ">Jack Ma</p>
                  <p className="text-gray-300 text-xs mb-0">Jack Ma</p>
                </div>
                <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Life is like riding a bicycle. To keep your balance, you must
                keep moving.
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-100 text-md ">Albert Einstein</p>
                  <p className="text-gray-300 text-xs  mb-0">Albert Einstein</p>
                </div>
                <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Success is most often achieved by those who don’t know that
                failure is inevitable.{" "}
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-100 text-md ">Coco Chanel</p>
                  <p className="text-gray-300 text-xs  mb-0">Coco Chanel</p>
                </div>
                <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
          <item>
            <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
              <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
              <p className="text-gray-300 my-3 italic ">
                Life is not about waiting for the storm to pass, it’s about
                learning to dance in the rain.
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-100 text-md ">Vivian Greene</p>
                  <p className="text-gray-300 text-xs  mb-0">Vivian Greene</p>
                </div>
                <QuoteRight height={30} width={30} fill="#FBBF24"></QuoteRight>
              </div>
            </div>
          </item>
        </Carousel>
      </div>
      <div className="text-2xl font-semibold mt-6 mb-8 pl-6 lg:pl-0">
        Fun
        <span className="text-yellow-400"> Facts</span>
      </div>
      <div className="lg:flex lg:space-x-8 lg:space-y-0 space-y-6 m-6 lg:m-0 lg:pb-0 pb-6">
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Happy
            className="mx-auto"
            fill="#FBBF24"
            width={30}
            height={30}
          ></Happy>
          <p className="text-gray-100 my-3 font-medium">Happy Index</p>
          <p className="text-gray-300 text-4xl mb-0">
            <CountUp end={100} duration={8}></CountUp>
          </p>
        </div>
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Clock
            className="mx-auto"
            fill="#FBBF24"
            width={30}
            height={30}
          ></Clock>
          <p className="text-gray-100 my-3 font-medium">Working Hours</p>
          <p className="text-gray-300 text-4xl mb-0">
          <CountUp end={720} duration={8}></CountUp>
          </p>
        </div>
        <div className="bg-gray-700 text-center w-full rounded-xl border-gray-600 border-2 p-7">
          <Shuttle
            className="mx-auto"
            fill="#FBBF24"
            width={30}
            height={30}
          ></Shuttle>
          <p className="text-gray-100 my-3 font-medium">Overcome Index</p>
          <p className="text-gray-300 text-4xl mb-0">
          <CountUp end={200} duration={8}></CountUp>
          </p>
        </div>
      </div>
    </div>
  );
}

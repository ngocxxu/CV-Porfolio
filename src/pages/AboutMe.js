import React, { useEffect } from "react";
import CountUp from "react-countup";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import "../assets/styles/AboutMe.css";
import { ReactComponent as Adaptation } from "../assets/svg/adaptation.svg";
import { ReactComponent as Administration } from "../assets/svg/administration.svg";
import { ReactComponent as Clock } from "../assets/svg/alarm-clock.svg";
import { ReactComponent as Creation } from "../assets/svg/creation.svg";
import { ReactComponent as Happy } from "../assets/svg/happy.svg";
import { ReactComponent as QuoteLeft } from "../assets/svg/left-quote.svg";
import { ReactComponent as Code } from "../assets/svg/programming-code-signs.svg";
import { ReactComponent as QuoteRight } from "../assets/svg/right-quote-sign.svg";
import { ReactComponent as Shuttle } from "../assets/svg/shuttle.svg";
import { Info } from "../info";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export default function AboutMe(props) {
  const currentDate = dayjs();
  const june2021 = dayjs("2021-06", "YYYY-MM");
  const diffDuration = dayjs.duration(currentDate.diff(june2021));
  const adjustedDuration = diffDuration.subtract(2, "month");
  const years = adjustedDuration.asYears().toFixed(1);
  const averageWorkHoursPerMonth = 160; // Giả định làm việc 40 giờ mỗi tuần
  const averageWorkHoursPerYear = averageWorkHoursPerMonth * 12;
  const totalWorkHours = years * averageWorkHoursPerYear;
  const { itemShow } = useSelector((state) => state.MenuReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-gray-800 text-gray-100 lg:p-14 animate__animated animate__fadeInUp">
      <div className="text-3xl font-semibold lg:pt-2 pt-10 pl-6 lg:pl-0">
        About
        <span className="text-yellow-400"> Me</span>
      </div>
      <div className="lg:flex space-x-12 pt-8">
        <div className="lg:w-7/12 px-6 lg:px-0">
          <p className="text-gray-200">{Info.aboutMePage.me}</p>
        </div>
        <div className="lg:w-3/12 pt-4 lg:pt-0">
          <ul className=" space-y-2 ">
            <li className="text-yellow-400 font-medium">
              Birthday
              <span className="text-gray-200 ml-2 font-normal">
                {Info.aboutMePage.birthday}
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Residence
              <span className="text-gray-200 ml-2 font-normal">
                {Info.aboutMePage.residence}
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Address
              <span className="text-gray-200 ml-2 font-normal">
                {Info.aboutMePage.address}
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Email
              <span className="text-gray-200 ml-2 font-normal">
                {Info.aboutMePage.email}
              </span>
            </li>
            <li className="text-yellow-400 font-medium">
              Phone
              <span className="text-gray-200 ml-2 font-normal">
                {Info.aboutMePage.phone}
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
          <p className="text-gray-300">{Info.aboutMePage.do.code}</p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Creation fill="#FBBF24" width={42} height={42}></Creation>
          <p className="font-medium text-xl my-1 ">Creation</p>
          <p className="text-gray-300">{Info.aboutMePage.do.creation}</p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Administration
            fill="#FBBF24"
            width={42}
            height={42}
          ></Administration>
          <p className="font-medium text-xl my-1 ">Management</p>
          <p className="text-gray-300">{Info.aboutMePage.do.management}</p>
        </div>
        <div className="text-gray-200 mt-6 px-6 lg:px-0">
          <Adaptation fill="#FBBF24" width={42} height={42}></Adaptation>
          <p className="font-medium text-xl my-1 ">Adaptation</p>
          <p className="text-gray-300">{Info.aboutMePage.do.adaptation}</p>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-14 mb-8 pl-6 lg:pl-0">
        Inspirational
        <span className="text-yellow-400"> Quotes</span>
      </div>
      <div className="" style={{ cursor: "grab" }}>
        <Carousel itemsToScroll={2} itemsToShow={itemShow}>
          {Info.aboutMePage.quotes.map((quote) => (
            <item key={quote.id}>
              <div className="border-gray-300 border-2 m-3 p-6 rounded-2xl">
                <QuoteLeft height={30} width={30} fill="#FBBF24"></QuoteLeft>
                <p className="text-gray-300 my-3 italic ">{quote.content}</p>
                <div className="flex justify-between">
                  <div className="">
                    <p className="text-gray-100 text-md "> {quote.author}</p>
                    <p className="text-gray-300 text-xs mb-0">{quote.author}</p>
                  </div>
                  <QuoteRight
                    height={30}
                    width={30}
                    fill="#FBBF24"
                  ></QuoteRight>
                </div>
              </div>
            </item>
          ))}
        </Carousel>
      </div>
      <div className="text-2xl font-semibold mt-6 mb-8 pl-6 lg:pl-0">
        Some
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
          <p className="text-gray-100 my-3 font-medium">
            Experience year of ReactJS
          </p>
          <p className="text-gray-300 text-4xl mb-0">{years}</p>
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
            <CountUp end={totalWorkHours} duration={8}></CountUp>
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

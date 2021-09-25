import React, { useEffect } from "react";
import "../assets/styles/Resume.css";
import { ReactComponent as Resumes } from "../assets/svg/resume.svg";
import { ReactComponent as Badge } from "../assets/svg/badge.svg";

export default function Resume(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full text-gray-100 lg:p-14 bg-gray-800 animate__animated animate__zoomIn">
      <div className="flex">
        <div className="text-3xl font-semibold mr-3 lg:mt-2 mt-10 ml-6 lg:ml-0">Resumes</div>
        <Resumes className='mt-8 lg:mt-0' fill="#FBBF24" width={40} height={40}></Resumes>
      </div>
      <div className="lg:flex">
        <div className="resume-left lg:w-3/5 mr-3">
          <div className="text-2xl font-semibold mt-10 ml-6 lg:ml-0">
            <span className="border-b-2 text-gray-100 border-yellow-400">
              Experience
            </span>
          </div>
          <div className="mt-7 ">
            <div className="flex relative">
              <div className="education-left text-right mt-1">
                <p className="text-gray-300 font-medium">06/2021 - 08/2021</p>
                <p className="text-gray-400 text-sm">Kyanon Digital</p>
              </div>
              <div className="vertical-axis-4 border-l border-gray-400 mx-6"></div>
              <div className="education-right">
                <p className="text-gray-100 font-medium text-lg mt-0.5">
                  Intern Frontend Development
                </p>
                <p className="text-gray-400 ">
                  - Building UI for the landing page of the website on the
                  client-side and server-side. <br />
                  - Join in realistic projects and daily meetings with team and
                  customer.
                  <br />
                  - Be learned and used such as pug, jquery, git,... <br />
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="education-left text-right mt-7">
                <p className="text-gray-300 font-medium">02/2020 - 03/2021</p>
                <p className="text-gray-400 text-sm">Hoya Lens Viet Nam Ltd.</p>
              </div>
              <div className="vertical-axis-3 border-l border-gray-400 mx-6"></div>
              <div className="education-right mt-6">
                <p className="text-gray-100 font-medium text-lg mt-0.5">
                  Quality Engineering
                </p>
                <p className="text-gray-400 ">
                  - Check and monitor actions to solve non-conforming
                  operations. <br /> - Inform superiors of any issues on lenses
                  and support in additional investigation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-2xl font-semibold mt-10 ml-6 lg:ml-0">
            <span className="border-b-2 text-gray-100 border-yellow-400">
              Education
            </span>
          </div>
          <div className="mt-7 ">
            <div className="flex relative">
              <div className="education-left text-right mt-1">
                <p className="text-gray-300 font-medium">03/2021 - 09/2021</p>
                <p className="text-gray-400 text-sm">Cybersoft Academy</p>
              </div>
              <div className="vertical-axis border-l border-gray-400 mx-6"></div>
              <div className="education-right">
                <p className="text-gray-100 font-medium text-lg mt-0.5">
                  Frontend Development
                </p>
                <p className="text-gray-400 ">
                  - Learning in advanced CSS through frameworks CSS, SASS,
                  HTML5, CSS3. <br />
                  - Learning about Responsive and Bootstrap.
                  <br />
                  - Learning in-depth advanced Javascript.
                  <br />
                  - Understand and practice building websites from Wireframe /
                  tools.
                  <br />
                  - Build real project system with Javascript, Framework
                  Angular, Ajax, JSON, ReactJS. <br />{" "}
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="education-left text-right mt-7">
                <p className="text-gray-300 font-medium">08/2015 - 09/2019</p>
                <p className="text-gray-400 text-sm">
                  Ton Duc Thang University
                </p>
              </div>
              <div className="vertical-axis-2 border-l border-gray-400 mx-6"></div>
              <div className="education-right mt-6">
                <p className="text-gray-100 font-medium text-lg mt-0.5">
                  Chemical Engineering
                </p>
                <p className="text-gray-400 ">
                  - Organic Material <br /> - GPA: 7.5/10
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-right lg:w-2/5">
          <div className="text-2xl font-semibold mt-10 pl-6 lg:pl-0 ">
            Coding
            <span className="text-yellow-400"> Skills</span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              HTML/CSS
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              HTML5
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              CSS3
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              SASS
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Bootstrap
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Tailwindcss
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Pug
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              TinyMCE
            </span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              Javascript
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              ES5/ES6
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              JQuery
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic Lodash
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              AJAX
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Axious
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              RESTfull API
            </span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              ReactJS
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Redux-thunk/saga
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Router
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Hooks
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic React Spring
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Styled Component
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Formik/Yup
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              React DnD
            </span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              AngularJS
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic AngularJS
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic Typescript
            </span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              Others
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic Git
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Ant Design
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Material UI
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Storybook
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              History
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              AnimateCSS
            </span>
          </div>
          <div className="text-2xl font-semibold mt-10 pl-6 lg:pl-0">
            Others
            <span className="text-yellow-400"> Skills</span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              Design
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Adobe Illustrator
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Basic Adobe Photoshop
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Adobe XD
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Figma
            </span>
          </div>
          <div className="mt-4 flex flex-wrap mx-5 lg:mx-0">
            <span className="bg-gray-600 text-gray-100 px-2 py-1 rounded m-1">
              Soft Skill
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Presentation
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Teamwork
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Learning Skills
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Self-motivation
            </span>
            <span className="bg-yellow-500 text-gray-100 px-2 py-1 rounded m-1">
              Creativity
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl font-semibold mt-10 pl-6 lg:pl-0">
          <span className="border-b-2 text-gray-100 border-yellow-400">
            Certificates
          </span>
        </div>
        <div className="flex mt-8 ">
          <div className="flex border-gray-500 border-2 lg:w-1/3 rounded-xl lg:mx-0 mx-auto">
            <div className="flex justify-center items-center border-gray-500 border-r-2 py-6 px-10 bg-gray-700 rounded-l-xl">
              <Badge width={40} height={40} fill="#D1D5DB"></Badge>
            </div>
            <div className='p-6 '>
              <p className="text-gray-100 text-md font-medium">TOEIC</p>
              <p className="text-gray-400 text-md">670 Scores</p>
              <p className="text-gray-600 text-md  mb-0">2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

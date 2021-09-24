import React from "react";
import "../assets/styles/Resume.css";
import { ReactComponent as Resumes } from "../assets/svg/resume.svg";

export default function Resume(props) {
  return (
    <div className="w-full text-gray-100 lg:p-14">
      <div className="flex">
        <div className="text-3xl font-semibold mr-3 mt-2">Resumes</div>
        <Resumes fill="#FBBF24" width={40} height={40}></Resumes>
      </div>
      <div className="flex">
        <div className="resume-left w-1/2">
          <div className="text-2xl font-semibold mt-10">
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
              <div className="vertical-axis border-l border-gray-400 mx-6"></div>
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
                  operations. <br /> - Inform superiors of any issues
                  on lenses and support in additional investigation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-2xl font-semibold mt-10">
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
        <div className="resume-right w-1/2"></div>
      </div>
    </div>
  );
}

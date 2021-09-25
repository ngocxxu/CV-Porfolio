/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { ReactComponent as Call } from "../assets/svg/call.svg";
import { ReactComponent as Destination } from "../assets/svg/destination.svg";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as Envelope } from "../assets/svg/envelope.svg";
import { ReactComponent as Comment } from "../assets/svg/comment.svg";
import { notificationFunction } from "../template/Notification";
import "antd/dist/antd.css";

export default function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aq7j1ud",
        "template_i9jmqsu",
        e.target,
        "user_M6isEnD29CNuHp9due1g5"
      )
      .then(
        (result) => {
          console.log(result.text);
          notificationFunction("success", "Your message has been sent to me");
        },
        (error) => {
          console.log(error.text);
          notificationFunction("error", "your message has not been sent to me");
        }
      );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <div className="w-full text-gray-100 lg:p-14 bg-gray-800 animate__animated animate__slideInRight">
      <div className="flex ">
        <div className="text-3xl font-semibold mr-3 lg:mt-2 mt-10 ml-6 lg:ml-0">Contact</div>
        <Call className='mt-8 lg:mt-0' fill="#FBBF24" width={40} height={40}></Call>
      </div>
      <div className="lg:grid grid-cols-3 mt-8 ">
        <div className="space-y-6">
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600 m-6 lg:m-0">
            <Destination fill="#FBBF24" width={40} height={40}></Destination>
            <p className="text-gray-100 font-medium mt-4 mb-0">Ho Chi Minh City</p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600 m-6 lg:m-0">
            <Phone fill="#FBBF24" width={40} height={40}></Phone>
            <p className="text-gray-100 font-medium mt-4 mb-0">+84 902 4323 97</p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600 m-6 lg:m-0">
            <Envelope fill="#FBBF24" width={40} height={40}></Envelope>
            <p className="text-gray-100 font-medium mt-4 mb-0">
              ngocquach43@gmail.com
            </p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600 m-6 lg:m-0">
            <Comment fill="#FBBF24" width={40} height={40}></Comment>
            <p className="text-gray-100 font-medium mt-4 mb-0">Available</p>
          </div>
        </div>
        <div className="col-span-2 mx-8">
          <div>
            <div className='my-8 lg:my-0'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5409713841273!2d106.69511981532072!3d10.76981646225939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fae9eef67%3A0xff0a755fc796f308!2zMTUgxJAuIFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1632559194424!5m2!1svi!2s"
                // width={600}
                height={200}
                style={{ border: 0, width:'100%' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold mt-6 mb-4">
              How Can I<span className="text-yellow-400"> Help You?</span>
            </div>
            <form onSubmit={sendEmail} className="lg:grid grid-cols-2 lg:pb-0 pb-6">
              <div className="space-y-2">
                <div>
                  <label
                    class="block text-yellow-500 text-sm font-bold mb-2"
                    for="username"
                  >
                    Full Name
                  </label>
                  <input
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                    type="text"
                    placeholder="Full Name"
                  />{" "}
                </div>
                <div>
                  <label
                    class="block text-yellow-500 text-sm font-bold mt-6 mb-2"
                    for="username"
                  >
                    Email Address
                  </label>
                  <input
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                    type="email"
                    placeholder="Email Address"
                  />{" "}
                </div>
                <div>
                  <label
                    class="block text-yellow-500 text-sm font-bold mt-6 mb-2"
                    for="username"
                  >
                    Subject
                  </label>
                  <input
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                    type="text"
                    placeholder="Subject"
                  />{" "}
                </div>
              </div>
              <div className="lg:ml-6 mt-6 lg:mt-0">
                <label
                  class="block text-yellow-500 text-sm font-bold mb-2"
                  for="username"
                >
                  Message
                </label>
                <textarea
                  class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  type="text"
                  placeholder="Message"
                  style={{ height: "89%" }}
                />{" "}
              </div>
              <div>
                <input
                  className="mt-6 w-full tracking-wide hover:bg-yellow-500 bg-transparent  bg-yellow-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

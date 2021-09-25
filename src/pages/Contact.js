import React from "react";
import emailjs from "emailjs-com";
import { ReactComponent as Call } from "../assets/svg/call.svg";
import { ReactComponent as Destination } from "../assets/svg/destination.svg";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as Envelope } from "../assets/svg/envelope.svg";
import { ReactComponent as Comment } from "../assets/svg/comment.svg";
import { notificationFunction } from "../template/Notification";
import "antd/dist/antd.css";


export default function Contact(props) {

  function sendEmail  (e)  {
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


  return (
    <div className="w-full text-gray-100 lg:p-14">
      <div className="flex">
        <div className="text-3xl font-semibold mr-3 mt-2">Portfolio</div>
        <Call fill="#FBBF24" width={40} height={40}></Call>
      </div>
      <div className="lg:grid grid-cols-3 mt-8 ">
        <div className="space-y-4">
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600">
            <Destination fill="#FBBF24" width={40} height={40}></Destination>
            <p className="text-gray-100 font-medium mt-3">Ho Chi Minh City</p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600">
            <Phone fill="#FBBF24" width={40} height={40}></Phone>
            <p className="text-gray-100 font-medium mt-3">+84 902 4323 97</p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600">
            <Envelope fill="#FBBF24" width={40} height={40}></Envelope>
            <p className="text-gray-100 font-medium mt-3">
              ngocquach43@gmail.com
            </p>
          </div>
          <div className="bg-gray-700 flex flex-col items-center p-6 border border-gray-600">
            <Comment fill="#FBBF24" width={40} height={40}></Comment>
            <p className="text-gray-100 font-medium mt-3">Available</p>
          </div>
        </div>
        <div className="col-span-2 mx-8">
          <div></div>
          <div>
            <div className="text-2xl font-semibold mt-10 mb-6">
              How Can I<span className="text-yellow-400"> Help You?</span>
            </div>
            <form onSubmit={sendEmail} className="lg:grid grid-cols-2 ">
              <div className="space-y-2">
                <div>
                  <label
                    class="block text-yellow-500 text-sm font-bold mb-2"
                    for="username"
                  >
                    Full Name
                  </label>
                  <input
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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
                    class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="text"
                    placeholder="Subject"
                  />{" "}
                </div>
              </div>
              <div className="ml-6">
                <label
                  class="block text-yellow-500 text-sm font-bold mb-2"
                  for="username"
                >
                  Message
                </label>
                <textarea
                  class="shadow appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  type="text"
                  placeholder="Message"
                  style={{height: '89%'}}
                />{" "}
              </div>
              <div>
              <input className="mt-6 w-full tracking-wide hover:bg-yellow-500 bg-transparent  bg-yellow-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

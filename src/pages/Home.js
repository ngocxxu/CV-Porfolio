import React from "react";
import Typewriter from "typewriter-effect";

export default function Home(props) {
  return (
    <div className="w-full h-screen bg-gray-800 text-gray-100 flex justify-center flex-col items-center lg:p-14 animate__animated animate__slideInDown">
      <div className="lg:mt-0 mt-6 lg:text-6xl text-4xl font-semibold">
        Ngoc Quach
      </div>
      <div className="text-2xl mt-6 text-gray-400">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Frontend Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hope you have a nice day!")
              .pauseFor(1000)
              .start();
          }}
        ></Typewriter>
      </div>
    </div>
  );
}

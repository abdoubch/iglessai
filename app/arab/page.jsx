"use client";

import Image from "next/image";
import React, { useState } from "react";
import article from "../../public/article.svg";
const Arab = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex bg-[#F9F9F9] text-black">
      <div className="w-full">
        <Image src={article} className="" />
      </div>
      <div className="flex w-full  justify-center items-center">
        <div className="flex flex-col items-center w-full px-6">
          <div className="pb-32">
            <h2 className="text-[40px] font-semibold">
              Welcome to <span className="text-[#800020]"> paperhub</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-16">
            <input
              type="text"
              className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"
              placeholder="Gmail"
            />
            <div className="w-full flex">
              <input
                type={`${active ? "text" : "password"}`}
                className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"
                placeholder="password"
              />
              <div
                onClick={() => setActive(!active)}
                className="p-1 bg-transparent cursor-pointer border-b-2 border-[#004D40]"
              >
                visible
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full py-24 gap-7">
            <button className="w-full bg-[#004D40] hover:bg-[#004D40]/[0.8] transition-colors duration-[0.5s] py-5 rounded-3xl text-white text-[20px]">
              SignUp
            </button>

            <p className="text-[#800020]">
              Already have an account ?
              <a href="" className="hover:underline">
                Signin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arab;

"use client";
import React from "react";
import logo from "../../public/logoTp.svg";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center bg-[#113E21]">
      <div className="flex">
        <div className="flex flex-col items-center bg-[#F0F0F0] my-20 py-3 px-10 shadow-2xl -mr-14 rounded-3xl z-10">
          <Image src={logo} />
          <p className="text-black max-w-[500px]">
            Lorem ipsum dolor sit amet consecteturpsum dolor sit amet Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            dolore, maxime nobis veritatis laudantium ipsa adipisci, magnam
            explicabo dolorem maiores accusantium modi. Laborum, illum autem
            inventore ipsam esse eos eligendi? consectetur{" "}
          </p>
        </div>
        <div className="relative bg-[#B38B59] px-44 py-16 rounded-3xl">
          <div className="absolute bg-[#B38B59] top-[10%] px-14 py-5 -right-20 rounded-full"></div>
          <div className="absolute bg-[#113E21] top-[119px] px-5 py-5 -right-5 rounded-full"></div>
          <div className="absolute bg-[#B38B59] top-[159px] px-10 py-5 -right-12 rounded-full"></div>
          <div className="absolute bg-[#B38B59] top-[159px] px-5 py-5 -right-[106px] rounded-full"></div>
          <div className="absolute bg-[#B38B59] bottom-[10%] px-14 py-5 -right-20 rounded-full"></div>
          <div className="absolute bg-[#113E21] bottom-[119px] px-5 py-5 -right-5 rounded-full"></div>
          <div className="absolute bg-[#B38B59] bottom-[159px] px-14 py-5 -right-14 rounded-full"></div>

          <div className="flex flex-col justify-between items-start mb-24 ">
            <h2 className="text-[#113E21] font-semibold text-[35px]">
              Connectez-Vous
            </h2>
            <p className="text-[#252620] font-medium text-[17px]">
              acceder a votre compte
            </p>
          </div>
          <form action="">
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  email :
                </p>
                <input
                  type="email"
                  className="w-full py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  mot de passe :
                </p>
                <input
                  type="password"
                  className="w-full py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center items-center bg-[#113E21]  w-full cursor-pointer py-4 rounded-md my-14 hover:bg-[#113E21]/[0.8] transition-colors duration-[0.2s]">
              {" "}
              <button className="w-full bg-transparent uppercase" type="submit">
                Se connecter{" "}
              </button>
            </div>
          </form>
          <div className="text-[#252620] font-medium mb-20">
            Vous n'avez pas de compte ?{" "}
            <a href="/signup" className="text-[#113E21]  hover:underline">
              Inscriver-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

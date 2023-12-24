"use client";
import Image from "next/image";
import logo from "../public/logoWhite.svg";
import searchIcon from "../public/searchIcon.svg";
import heartIcon from "../public/path.svg";
import download from "../public/download.svg";

export default function Home() {
  const articles = [
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
    {
      titre: "Article-title article title article title article title",
      authors: ["Author name", "Author name"],
      resume:
        "Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
      date: "07-12-2023",
    },
  ];
  return (
    <>
      <div className="w-full px-32 py-10 bg-[#F0F0F0] text-black">
        <div>
          <h2 className="text-[42px]  max-w-[290px] font-bold text-[#113E21]">
            Bienvenu Sur Article Atlas
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      {/* <div className="w-full bg-[#113E21] flex justify-center items-center py-14">
        <div className="relative w-[73%] bg-[#FEFEFE] flex flex-col items-center gap-12 pb-28 pt-3 rounded-3xl">
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-0 -right-24 rounded-full"></div>
          <div className="bg-[#113E21] px-20 py-6 absolute top-[48px]  -right-16 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-[96px] -right-12 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-6 py-6 absolute top-[96px] -right-28 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-0 -left-12 rounded-full"></div>
          <div className="bg-[#113E21] px-10 py-6 absolute top-[48px] -left-8 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-[96px] -left-24 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute bottom-0 -left-12 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-6 py-6 absolute bottom-0 -left-28 rounded-full"></div>
          <div className="bg-[#113E21] px-10 py-6 absolute bottom-[48px] -left-8 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute bottom-[96px] -left-16 rounded-full"></div>

          <Image src={logo} width={400} />
          <div className="bg-[#F0F0F0] py-3 px-2 flex w-[83%] rounded-md">
            <input
              placeholder="Recherche ..."
              type="text"
              className="py-2 text-[25px] w-full text-black bg-[#F0F0F0] placeholder:text-[25px] placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
            />
            <div className="bg-[#113E21] px-8 font-semibold text-[20px] rounded-md flex items-center justify-around gap-3 hover:bg-[#113E21]/[0.8] transition-colors duration-[0.2s] cursor-pointer">
              <Image src={searchIcon} width={30} />
              <button className="">Recherche</button>
            </div>
          </div>
          <p className="text-[#B38B59] text-[20px] font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa atque
            vit
          </p>
          <p className="text-[20px] bg-transparent border-2 border-[#113E21] text-[#113E21] font-semibold  px-9 py-3 rounded-xl hover:text-white hover:bg-[#113E21] transition-colors duration-[0.8s] cursor-pointer ">
            Articles non verfier
          </p>
        </div>
      </div> */}
      <div className="w-full bg-[#113E21] flex justify-center items-center py-4">
        <div className="bg-[#F0F0F0] py-3 px-2 flex w-[63%] rounded-md">
          <input
            placeholder="Recherche ..."
            type="text"
            className="py-2 text-[25px] w-full text-black bg-[#F0F0F0] placeholder:text-[25px] placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
          />
          <div className="bg-[#113E21] px-8 font-semibold text-[20px] rounded-md flex items-center justify-around gap-3 hover:bg-[#113E21]/[0.8] transition-colors duration-[0.2s] cursor-pointer">
            <Image src={searchIcon} width={30} />
            <button className="">Recherche</button>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FEFEFE] px-3 gap-5 py-2">
        <div className="  text-black flex flex-col gap-3">
          {articles.map((article) => (
            <div className="min-w-[60%] bg-[#F0F0F0] px-7 py-4">
              <div className="flex flex-col py-3">
                <div className="flex justify-between items-center ">
                  <h2 className="font-semibold text-[20px]">{article.titre}</h2>
                  <p className="font-medium">{article.date}</p>
                </div>
                <div className="flex">
                  {article.authors.map((author, index) => (
                    <p>{author} ,</p>
                  ))}
                </div>
              </div>
              <div className="py-4">{article.resume}</div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-3 cursor-pointer">
                  <Image src={heartIcon} />
                  <p>Annuler</p>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Image src={download} />
                  <p>Télécharger PDF</p>
                </div>

                <div className="uppercase bg-[#B38B59] font-semibold text-white px-8 py-2 cursor-pointer hover:bg-[#B38B59]/[0.8] transition-colors duration-[0.2s]">
                  Consulter
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center bg-[#B38B59] h-fit w-[50%] py-7 shadow-2xl">
          <h2 className="px-3 font-semibold mb-12 text-[18px]">
            Affinez les resultats de votre recherche
          </h2>
          <div className="flex flex-col gap-2 py-5 px-7 w-full">
            <h2>Mots cles :</h2>
            <input className="text-black focus:outline-none w-full py-2 px-3" type="text" />
          </div>
          <div className="flex flex-col gap-2 py-5 px-7 w-full">
            <h2>Auteur(s) :</h2>  
            <input className="text-black focus:outline-none w-full py-2 px-3" type="text" />
          </div>
          <div className="flex flex-col gap-2 py-5 px-7 w-full">
            <h2>Institution(s) :</h2>
            <input className="text-black focus:outline-none w-full py-2 px-3" type="text" />
          </div>
          <div className="flex flex-col py-5 px-7 w-full gap-2 mb-20">
            <h2>Periodes :</h2>
            <div className="flex justify-between text-black">
              <input type="date" className="px-3 py-2" />
              <input type="date" className="px-3 py-2" />
            </div>
          </div>
          <div className="bg-[#113E21] px-8 font-semibold text-[20px] py-2 flex items-center justify-around gap-3 hover:bg-[#113E21]/[0.8] transition-colors duration-[0.2s] cursor-pointer">
            <button className="uppercase">Appliquer</button>
          </div>
        </div>
      </div>
    </>
  );
}

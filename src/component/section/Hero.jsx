// import { MdSwipeDown } from "react-icons/md";

// import { MdSwipeDown } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
// import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 mt-[150px] md:mt-[200px] lg:mt-[200px]">
        <div className="animate-fade-right animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-in-out border border-green-600 shadow-lg shadow-green-600 lg:w-[400px] md:w-[500px] w-[320px] w-full p-4 flex flex-col justify-start items-center relative rounded-3xl">
          {/* profil */}
          <div className="w-[200px] h-[200px]  md:w-[280px] md:h-[280px] lg:w-[230px] lg:h-[230px] shadow-md shadow-green-600 border border-green-600 absolute top-[-100px] md:top-[-140px] lg:top-[-130px] rounded-full">
            <img className=" w-full h-full rounded-full object-cover" src="../assets/profil.jpg" alt="" />
          </div>
          {/* title */}
          <h1 className="mt-24 md:mt-36 lg:mt-[100px] text-3xl md:text-4xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Mugni Hidayat</h1>
          <p className="mt-2 text-lg md:text-2xl lg:text-xl bg-gradient-to-b from-blue-400 to-green-400 bg-clip-text text-transparent">Junior Web Developer</p>
          <div className="flex items-end justify-start mt-2">
            <CiLocationOn className="text-xl mr-2 text-emerald-500" />
            <p className="text-md md:text-lg lg:text-lg bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">Jakarta, Indonesia</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-xl md:text-3xl lg:text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent md:mb-2 lg:mb-3">Stack</h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              <div className="flex text-gray-800  items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <FaHtml5 className="text-lg md:text-lg lg:text-2l " />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">HTML</p>
              </div>
              <div className="flex text-gray-800  items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <FaCss3 className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">CSS</p>
              </div>
              <div className="flex text-gray-800  items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <IoLogoJavascript className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">Javascript</p>
              </div>
              <div className="flex text-gray-800  items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <FaReact className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">React JS</p>
              </div>
              <div className="flex text-gray-800  items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <RiTailwindCssFill className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">Tailwind CSS</p>
              </div>
              <div className="flex text-gray-800 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <FaBootstrap className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">Bootstrap</p>
              </div>
              <div className="flex text-gray-800 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <SiExpress className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">Express JS</p>
              </div>
              <div className="flex text-gray-800 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <FaNodeJs className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">NodeJS</p>
              </div>
              {/* <div className="flex text-gray-800 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <RiNextjsLine className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">NextJS</p>
              </div> */}
              <div className="flex text-gray-800 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
                <SiMongodb className="text-lg md:text-lg lg:text-xl" />
                <p className="text-sm md:text-lg lg:text-sm font-semibold">MongoDB</p>
              </div>
            </div>
          </div>
          <div className="mt-10 animate-bounce border border-emerald-500 shadow-lg shadow-zinc-500 hover:bg-emerald-700 rounded-full  py-2 px-4 md:py-3 md:px-4 lg:py-3 lg:px-4">
            <a className="text-emerald-300 hover:text-white text-sm md:text-sm lg:text-md" href="https://wa.me/6282283272280" target="_blank" rel="noopener noreferrer">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

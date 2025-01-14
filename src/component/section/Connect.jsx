import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Connect() {
  return (
    <section id="Connect" className="animate-fade-left animate-duration-[2000ms] animate-delay-[1500ms] animate-ease-in-out p-4 flex flex-col justify-start items-center rounded-3xl mt-10 lg:mt-0  md:mt-100">
      <div className="flex flex-col items-center justify-center md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent lg:mb-6 mb-2">
        <h1>Connect with me</h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-6 md:gap-4 gap-2 p-4">
        <a href="mailto:mugnihidayat023@gmail.com" target="_blank" rel="noopener noreferrer" className="flex border-b p-2 md:w-[300px] w-[250px] lg:w-[500px] justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50">
          <div className="flex gap-2 text-sm lg:text-xl items-center">
            <FaEnvelope className="text-green-500" />
            <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Email</p>
          </div>
          <GoArrowUpRight className="text-xl text-green-500" />
        </a>
        <a href="https://github.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b md:w-[300px] w-[250px] lg:w-[500px] justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
          <div className="flex gap-2 text-sm lg:text-xl items-center">
            <FaGithub className="text-green-500" />
            <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Github</p>
          </div>
          <GoArrowUpRight className="text-xl text-green-500" />
        </a>
        <a href="https://twitter.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b md:w-[300px] w-[250px] lg:w-[500px] justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
          <div className="flex gap-2 text-sm lg:text-xl items-center">
            <FaTwitter className="text-green-500" />
            <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Twitter</p>
          </div>
          <GoArrowUpRight className="text-xl text-green-500" />
        </a>
        <a href="https://instagram.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b md:w-[300px] w-[250px] lg:w-[500px] justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
          <div className="flex gap-2 text-sm lg:text-xl items-center">
            <FaInstagram className="text-green-500" />
            <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Instagram</p>
          </div>
          <GoArrowUpRight className="text-xl text-green-500" />
        </a>
        <a href="https://linkedin.com/in/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b md:w-[300px] w-[250px] lg:w-[500px] justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
          <div className="flex gap-2 text-sm lg:text-xl items-center">
            <FaLinkedinIn className="text-green-500" />
            <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Linkedin</p>
          </div>
          <GoArrowUpRight className="text-xl text-green-500" />
        </a>
      </div>
    </section>
  );
}

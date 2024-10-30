import { FaBootstrap, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <>
      <div id="About" className="mt-20">
        <h1 className="pb-4 text-3xl lg:text-4xl w-24 lg:w-32 mx-auto font-extrabold border-b-4  border-green-500 text-center">About</h1>

        <div className="flex flex-col lg:flex-row border justify-between items-center border-4 border-green-500 p-4 m-4 lg:p-8 lg:m-8 relative">
          <div className="mb-10 lg:w-[30%] w-40">
            <img src="/src/assets/profil.png" alt="" className="rounded-full" />
          </div>
          <div className="flex flex-wrap items-center justify-center p-4 gap-4 lg:gap-2 lg:mb-0 mb-6 lg:absolute bottom-0 left-0">
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <FaHtml5 />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <IoLogoCss3 />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <RiJavascriptFill />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <FaReact />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <RiTailwindCssFill />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <FaBootstrap />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <SiExpress />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <FaNodeJs />
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500 ">
              <RiNextjsLine />
            </p>
          </div>

          <div className="lg:w-[50%] w-full">
            <h3 className="text-md lg:text-xl text-start mb-4">
              Halo! Saya <i>Mugni Hidayat</i>, seorang Junior Web Developer yang saat ini sedang menjalani bootcamp Full-Stack Web Developer di Harisenin.com. Dengan fokus pada pengembangan front-end, saya telah menguasai teknologi seperti
              HTML, CSS, JavaScript, React, dan Tailwind CSS. Saya bersemangat untuk mengembangkan solusi web yang intuitif dan responsif. Meskipun saya lebih mahir di front-end, saya juga memiliki pemahaman dasar tentang back-end yang
              membantu saya berkolaborasi dengan tim full-stack. Saya selalu terbuka untuk peluang baru dan siap berkontribusi dalam proyek menarik. Silakan lihat karya saya di bagian portfolio!
            </h3>
            <a href="../assets/cv-frontend.pdf" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

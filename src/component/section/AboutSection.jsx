// import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Certificate from "./Certificate";

export const AboutSection = () => {
  return (
    <div className="flex flex-col  justify-center bg-black animate-fade-in animate-duration-[2000ms] animate-ease-in-out p-4 lg:p-10 md:p-10 mt-4 lg:mt-2">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold  bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-center mb-4 lg:mb-6">About Me</h1>
      <div className="w-full border border-green-500 rounded-2xl shadow-lg shadow-green-500 animate-fade-left animate-duration-[2000ms] animate-ease-in-out px-2 lg:px-10 py-6 md:py-8 lg:py-10 flex flex-col lg:flex-row md:flex-col justify-evenly gap-4 lg:items-end md:items-center items-center">
        <div className="overflow-hidden h-40 w-40 md:h-64 md:w-64 lg:h-80 lg:w-80">
          <img className="w-full h-full lg:w-full lg:h-full object-cover rounded-2xl" src="../assets/profil.jpg" alt="" />
        </div>
        <div className="px-4 lg:flex-1 max-w-[600px]">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full mt-2 md:mt-0">
              <p className="text-sm mb-3 lg:text-xl md:text-2xl text-justify text-gray-400">
                Hi, I&apos;m Mugni Hidayat, a Junior Web Developer and a fresh graduate passionate about creating functional and visually appealing web applications. I started my career journey with a strong foundation in frontend
                development, mastering HTML, CSS, JavaScript, and modern frameworks like React.
              </p>
              <p className="text-sm lg:text-xl md:text-xl text-justify text-gray-400">
                Currently, I focus on building dynamic user interfaces, while having a basic understanding of backend development using Node.js and MongoDB. I&apos;ve worked on several projects, including a full-stack news portal and a
                movie app, and I&apos;m eager to bring my detail-oriented mindset to real-world challenges. Let&apos;s create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-20 flex flex-col lg:flex-row md:flex-col justify-center items-start gap-8 md:gap-8 lg:gap-8">
        {/* education */}
        <div className="w-full animate-fade-right animate-duration-[2000ms] animate-ease-in-out ">
          <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent ">Education</h1>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 mt-2 md:mt-10 lg:mt-10">
            <div className="mt-2 md:mt-0">
              <h2 className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent border-b pb-2 font-semibold text-md md:text-lg lg:text-2xl  ">Formal</h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-400  text-sm md:text-lg lg:text-xl font-semibold">SMKN 1 Lembah Melintang</p>
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-light">2015 - 2018</p>
              </div>
              <div>
                <p className="text-gray-400 text-justify text-sm md:text-lg lg:text-xl font-light">
                  Completed a vocational high school program specializing in Mechanical Engineering, building a strong foundation in technical skills and attention to detail.
                </p>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <h2 className="bg-gradient-to-r font-semibold from-green-500 to-emerald-500 bg-clip-text text-transparent border-b pb-2 text-md md:text-lg lg:text-2xl "> Non-formal</h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-semibold">Bootcamp Harisenin.com</p>
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl font-light">2024</p>
              </div>
              <div>
                <p className="text-gray-400 text-justify text-sm md:text-lg lg:text-xl font-light">
                  Graduated from an intensive bootcamp focusing on fullstack web development. Gained expertise in frontend technologies (React, Tailwind CSS) and backend development (Node.js, MySQL), with hands-on experience in real-world
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* certificate */}
        <div className="w-full flex flex-col gap-4 animate-fade-left animate-duration-[2000ms] animate-ease-in-out">
          <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-4 md:mb-8 lg:mb-10 ">Certificate</h1>
          <Certificate url="../assets/fullstack-certificate.pdf" name="Certificate Full-stack Developer" />
          <Certificate url="../assets/java-script.pdf" name="Certificate Learning Javascript" />
          <Certificate url="../assets/python.pdf" name="Certificate Learning Python" />
          <Certificate url="../assets/react-statemanagement.pdf" name="Certificate Learning React State Management" />
          <Certificate url="../assets/mongo-db.pdf" name="Certificate Learning Mongo DB" />
          <Certificate url="../assets/konsep-oop-javascript.pdf" name="Certificate Learning Concept OOP with JavaScript" />
          <Certificate url="../assets/app-split-bill.pdf" name="Certificate React Split Bill App" />
        </div>
      </div>
    </div>
  );
};

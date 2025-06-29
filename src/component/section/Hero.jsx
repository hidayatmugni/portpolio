import { CiLocationOn } from "react-icons/ci";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiOdoo, SiPostgresql, SiMongodb } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3 />, label: "CSS" },
  { icon: <IoLogoJavascript />, label: "JavaScript" },
  { icon: <IoLogoPython />, label: "Python" },
  { icon: <FaReact />, label: "React JS" },
  { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
  { icon: <SiOdoo />, label: "Odoo" },
  { icon: <SiExpress />, label: "Express JS" },
  { icon: <FaNodeJs />, label: "NodeJS" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
];

// eslint-disable-next-line react/prop-types
const MarqueeRow = ({ reverse = false }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max animate-marquee ${reverse ? "animate-reverse" : ""}`}>
        {[...techStack, ...techStack].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-800 bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full">
            <span className="text-lg">{tech.icon}</span>
            <p className="text-sm font-semibold">{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mt-[60px] md:mt-[80px] overflow-hidden relative">
      <div className="animate-fade-right animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-in-out border border-green-600 shadow-lg shadow-green-600  lg:w-[500px] w-[320px] md:w-[450px]  flex flex-col items-center relative rounded-3xl mx-auto py-8">
        {/* Profile */}
        <div className="w-[160px] h-[160px] md:w-[280px] md:h-[280px] lg:w-[200px] lg:h-[200px] shadow-md shadow-green-600 border border-green-600 rounded-full">
          <img className="w-full h-full rounded-full object-cover" src="../assets/profil.jpg" alt="Profile" />
        </div>

        {/* Title */}
        <h1 className="mt-5 md:mt-6 lg:mt-[20px] text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Mugni Hidayat</h1>
        <p className="mt-2 text-lg md:text-2xl bg-gradient-to-b from-blue-400 to-green-400 bg-clip-text text-transparent">Odoo Developer</p>

        {/* Location */}
        <div className="flex items-center mt-2">
          <CiLocationOn className="text-xl mr-2 text-emerald-500" />
          <p className="text-md md:text-lg bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">Jakarta, Indonesia</p>
        </div>

        {/* Stack */}
        <div className="flex flex-col items-center mt-6 w-full space-y-3">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Stack</h2>
          <MarqueeRow />
          <MarqueeRow reverse />
          <MarqueeRow />
        </div>

        {/* Button */}
        <div className="mt-10 animate-bounce border border-emerald-500 shadow-lg shadow-zinc-500 hover:bg-emerald-700 rounded-full py-2 px-4">
          <a className="text-emerald-300 hover:text-white text-sm" href="https://wa.me/6282283272280" target="_blank" rel="noopener noreferrer">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

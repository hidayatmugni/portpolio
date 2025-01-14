import Navbar from "../component/navbar/Navbar";
import { AboutSection } from "../component/section/AboutSection";

const About = () => {
  return (
    <>
      <div className="bg-black animate-fade-in animate-duration-[2000ms] animate-ease-in-out">
        <Navbar />
        <div className="flex flex-col lg:flex-row md:flex-col justify-center items-center px-2 md:px-8 lg:px-24">
          <AboutSection />
        </div>
      </div>
    </>
  );
};

export default About;

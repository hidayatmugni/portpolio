import { MdSwipeDown } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div id="Home" className="lg:mt-20 mt-32 bg-base-200 flex justify-center items-center flex-col gap-4 lg:h-[80vh]">
        <h2 className="text-3xl lg:text-4xl font-medium">Hai There !</h2>
        <div className="bg-green-500 rounded-full p-2">
          <img className="h-[120px] lg:h-[150px] rounded-full" src="/src/assets/profil.png" alt="" />
        </div>
        <h1 className="text-3xl lg:text-5xl  font-bold">
          I&apos;m<span className="font-extrabold text-green-500"> Mugni Hidayat</span>
        </h1>
        <p className="text-xl lg:text-3xl font-bold">Junior Frontend Developer</p>
        <div className="text-3xl lg:text-6xl font-bold mt-24 lg:flex lg:flex-col lg:flex-row items-center gap-2 hidden">
          <MdSwipeDown />
          <p className="text-xl lg:text-3xl font-medium">Scroll Down</p>
        </div>
      </div>
    </>
  );
};

export default Hero;

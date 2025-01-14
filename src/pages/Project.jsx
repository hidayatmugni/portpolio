import Navbar from "../component/navbar/Navbar";

const Project = () => {
  return (
    <>
      <div className="bg-black min-h-screen ">
        <Navbar />
        <section className="py-10 text-white flex flex-col justify-center items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">My Latest Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in animate-duration-[2000ms] animate-ease-in-out animate-delay-[1000ms] ">
            {/* card */}
            <div className="flex flex-col items-center  gap-4 border border-green-500 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-green-700 hover:transform hover:scale-105 pb-4">
              <div className="border-b border-green-500 w-full h-[300px]">
                <img className="w-full h-full object-cover rounded-t-2xl" src="../assets/porto-1.png" alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-green-500">
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">React JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Tailwind CSS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">EmailJs</p>
              </div>
            </div>
            {/* video belajar */}
            <div className="flex flex-col items-center  gap-4 border border-green-500 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-green-700 hover:transform hover:scale-105 pb-4">
              <div className="border-b border-green-500 w-full h-[300px]">
                <img className="w-full h-full object-cover rounded-t-2xl" src="../assets/porto-2.png" alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-green-500">
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">React JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Tailwind CSS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Mock API</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Zustand</p>
              </div>
            </div>
            {/* Portal Depok */}
            <div className="flex flex-col items-center gap-4 border border-green-500 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-green-700 hover:transform hover:scale-105 pb-4">
              <div className="border-b border-green-500 w-full h-[300px]">
                <img className="w-full h-full object-cover rounded-t-2xl" src="../assets/porto-3.png" alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-green-500">
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">React JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Tailwind CSS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Zustand</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Node JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Express JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Mongo DB</p>
              </div>
            </div>
            {/* chill movie */}
            <div className="flex flex-col items-center gap-4 border border-green-500 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-green-700 hover:transform hover:scale-105 pb-4">
              <div className="border-b border-green-500 w-full h-[300px]">
                <img className="w-full h-full object-cover rounded-t-2xl" src="../assets/porto-4.png" alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-green-500">
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">React JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Tailwind CSS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Zustand</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Node Js</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Express Js</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">My SQL</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Sequlize</p>
              </div>
            </div>
            {/* Split Bill */}
            <div className="flex flex-col items-center gap-4 border border-green-500 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-green-700 hover:transform hover:scale-105 pb-4">
              <div className="border-b border-green-500 w-full h-[300px]">
                <img className="w-full h-full object-cover rounded-t-2xl" src="../assets/porto-5.png" alt="" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-green-500">
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">React JS</p>
                <p className="text-sm border border-green-500 px-2 py-1 rounded-2xl">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;

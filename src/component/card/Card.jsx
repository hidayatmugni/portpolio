// import { Link } from "react-router-dom";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, title, img, url } = props;
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row lg:flex-col md:flex-col items-center w-full h-[150px] lg:max-w-[300px] lg:h-[300px] md:max-w-[300px] md:h-[250px] border border-green-500 shadow-md shadow-green-500 rounded-lg  hover:scale-105 duration-300 ease-in-out opacity-60 hover:opacity-100 relative"
      >
        <div className="h-full w-1/2 lg:h-1/2 md:h-1/2  lg:w-full  md:w-full">
          <img className="w-full h-full object-cover rounded" src={img} alt="" />
        </div>
        <div className="p-4">
          <h5 className="text-sm md:text-lg lg:text-xl font-bold tracking-tight text-gray-800 dark:text-white">{name}</h5>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{title}</p>
        </div>
        {/* <a href={url} target="_blank" rel="noopener noreferrer" className="absolute bottom-[-20px] bg-green-500 hover:bg-green-700 text-white py-1 px-8 rounded-full">
        view
      </a> */}
      </a>
    </>
  );
};

export default Card;

import { GoArrowUpRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const Certificate = ({ name, url }) => {
  return (
    <>
      <a className="border-b pb-2 flex justify-between items-center cursor-pointer opacity-60 hover:opacity-100" href={url} target="_blank">
        <h2 className="text-gray-400 text-sm md:text-lg lg:text-xl ">{name}</h2>
        <GoArrowUpRight className="text-xl md:text-2xl text-green-500" />
      </a>
    </>
  );
};

export default Certificate;

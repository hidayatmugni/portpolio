import { Link } from "react-router-dom";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, title, img, url } = props;
  return (
    <Link to={url} className="flex flex-col gap-4 lg:w-1/4 lg:h-[500px] md:w-1/2 p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
      <img className="w-full h-92 hover:scale-105 hover:transition-all duration-500 rounded" src={img} alt="" />
      <div className="">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
      </div>
    </Link>
  );
};

export default Card;

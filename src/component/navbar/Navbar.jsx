const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-2 mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <h1 className="lg:text-5xl text-3xl font-bold text-green-500">
              <i>MH</i>
            </h1>
          </a>
          <div>
            <ul className="flex flex-row lg:gap-8 items-center lg:text-xl text-sm gap-4">
              <li className="text-gray-900 hover:bg-green-500 p-1 rounded hover:text-white">
                <a href="#Home">Home</a>
              </li>
              <li className="text-gray-900 hover:bg-green-500 p-1 rounded hover:text-white">
                <a href="#About">About</a>
              </li>
              <li className="text-gray-900 hover:bg-green-500 p-1 rounded hover:text-white">
                <a href="#Projects">Projects</a>
              </li>
              <li className="text-gray-900 hover:bg-green-500 p-1 rounded hover:text-white">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

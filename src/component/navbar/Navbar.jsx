import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full sticky top-0 z-50">
        <div className="flex items-center justify-center items-center p-2 ">
          <div>
            <ul className="flex bg-black lg:gap-8 md:gap-4 gap-2 items-center py-2 px-4 text-md md:text-lg lg:text-xl border border-green-500 shadow-lg shadow-green-500/50 rounded-full mt-10">
              <li>
                <NavLink
                  className="animate-ping animate-ease-in-out animate-duration-[4000ms]
"
                >
                  🟢
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500 border-b border-green-500" : " text-green-500")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-500 border-b border-green-500" : " text-green-500")}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className={({ isActive }) => (isActive ? "text-green-500 border-b border-green-500" : " text-green-500")}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-500 border-b border-green-500" : " text-green-500")}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

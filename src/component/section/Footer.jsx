import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="Contact" className="bg-white">
        <div className="mx-auto max-w-screen-xl pt-16 lg:pt-24">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 lg:text-3xl">Crafting Solutions that Drive Success</h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">Let&apos;s connect and turn your vision into a reality.</p>

            <Link
              to="https://wa.me/6282283272280"
              className="mt-8 inline-block rounded-full border border-green-600 px-12 py-3 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-green-500"
            >
              Hire me
            </Link>
          </div>

          <div className="mt-16 bg-gray-200 border-t border-gray-300 p-8 flex justify-between items-center lg:mt-24">
            <p className="text-sm lg:text-lg">©hidayatmugni 2024 - All rights reserved</p>
            <div className="flex gap-3 lg:gap-8 ">
              <Link to="mailto:mugnihidayat023@gmail.com.com" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <BiLogoGmail />
              </Link>
              <Link to="https://github.com/hidayatmugni" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <FaGithub />
              </Link>

              <Link to="https://instagram.com/hidayatmugni" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/hidayatmugni/" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <FaLinkedinIn />
              </Link>
              <Link to="https://wa.me/6282283272280" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <FaWhatsapp />
              </Link>
              <Link to="https://x.com/mugnihidayat5" className="text-2xl lg:text-3xl font-bold text-center cursor-pointer hover:transition-all hover:text-green-500">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

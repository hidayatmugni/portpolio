import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "../component/navbar/Navbar";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID dari EmailJS
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID dari EmailJS
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key (User ID) dari EmailJS
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
          alert("Thank you for reaching out. I’ve received your message and will get back to you as soon as possible. Have a great day! 😊");
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  return (
    <div className=" bg-black min-h-screen p-4">
      <Navbar />
      <div className="animate-fade-in animate-duration-[2000ms] animate-ease-in-out flex flex-col justify-center items-center mt-10">
        <section id="Contact" className="w-full animate-fade-left animate-duration-[2000ms] animate-delay-[1500ms] animate-ease-in-out flex flex-col justify-center items-center rounded-3xl">
          <div className="flex flex-col items-center justify-center md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent lg:mb-6 mb-2">
            <h1>Contact me</h1>
          </div>
          <div className="flex flex-col w-[350px] md:w-[500px] lg:w-[500px] justify-center items-center  gap-2 p-4">
            <a href="mailto:mugnihidayat023@gmailcom" target="_blank" rel="noopener noreferrer" className="w-full flex border-b p-2 justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaEnvelope className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Email</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
            <a href="https://github.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className=" w-full flex border-b p-2 justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaGithub className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Github</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
            <a href="https://twitter.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b w-full justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaTwitter className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Twitter</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
            <a href="https://instagram.com/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b w-full justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaInstagram className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Instagram</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
            <a href="https://linkedin.com/in/hidayatmugni" target="_blank" rel="noopener noreferrer" className="flex border-b w-full justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaLinkedinIn className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Linkedin</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
            <a href="https://wa.me/6282283272280" target="_blank" rel="noopener noreferrer" className="flex border-b w-full justify-between cursor-pointer hover:transition-all hover:bg-gray-700/50 p-2">
              <div className="flex gap-2 text-sm lg:text-xl items-center">
                <FaWhatsapp className="text-green-500" />
                <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">WhatsApp</p>
              </div>
              <GoArrowUpRight className="text-xl text-green-500" />
            </a>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="w-full md:w-[500px] lg:w-[500px] animate-fade-right animate-ease-in animate-duration-[4000ms] flex flex-col items-center  gap-2 p-4">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6 mt-10">Send me a message</h1>
          <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded-md border border-green-500 focus:outline-none focus:border-green-600 bg-transparent text-white" type="text" placeholder="Name" />
          <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded-md border border-green-500 focus:outline-none focus:border-green-600 bg-transparent text-white" type="email" placeholder="Email" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-green-500 focus:outline-none focus:border-green-600 bg-transparent text-white"
            placeholder="Message"
          ></textarea>
          <button
            disabled={isSubmitting}
            className={`w-full p-2 rounded-md border border-green-500 focus:outline-none focus:border-green-600 bg-transparent text-white ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
            type="submit"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          {status && <p className="text-green-500 mt-2">{status}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

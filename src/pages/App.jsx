import Hero from "../component/section/Hero";
import Navbar from "../component/navbar/Navbar";
import About from "../component/section/about";
import Portfolio from "../component/section/Portfolio";
import Footer from "../component/section/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />
      <Portfolio />

      <Footer />
    </>
  );
}

export default App;

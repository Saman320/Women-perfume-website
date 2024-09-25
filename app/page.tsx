import Navbar from "./component/navbar";
import Hero from "./component/hero";
import About from "./component/about";
import Latest from "./component/latest";
import Contact from "./component/contact";
import Footer from "./component/footer";
// import Mid from "./component/mid";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Latest/>
      <Contact/>
      <Footer/>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Skills from "@/sections/Skills";
import Hobbies from "@/sections/Hobbies";
import Education from "@/sections/Education";
import ScrollToTop from "@/components/ScrollToTop";


export default function Home() {
  return (
  <>
    <Navbar />
      <main className="flex flex-col row-start-2 items-center sm:items-start pt-20 max-w-auto mx-auto ">
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
  </>  
  );    
}

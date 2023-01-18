import Navbar from "@/components/navbar/Navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./components/home/Home";
import Benefits from "./components/benefits/Benefits";
import OurClasses from "./components/ourClass/OurClasses";
import Contact from "./components/contactUs/Contact";
import Footer from "./components/footer/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
      
    </div>
  )
}

export default App

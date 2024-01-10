import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import HallofFame from "./components/Experience";
import Announcement from "./components/Feedbacks";
import Footer from "./components/footer";
import Contact2 from "./components/contact2";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col">
          <Navbar />
          <Hero />
        </div>
        <div className="flex flex-col mt-56">
          <Announcement />
          <HallofFame />
          <About />
        </div>

        <div className="relative z-0 ">
          <div className="flex flex-col  md:flex-row">
            <Contact />
            <Contact2 />
          </div>
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

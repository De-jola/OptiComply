import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Mission from "./components/Mission";
import Results from "./components/Results";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import DemoForm from "./components/DemoForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <main className="relative container max-w-[1728px] m-auto">
      <Navbar handleClick={handleButtonClick} />
      <Hero handleModal={handleButtonClick} />
      <Partner />
      <Mission />
      <Results />
      <Solutions />
      <Features />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />

      {showModal && <DemoForm onclose={handleCloseModal} />}
    </main>
  );
}

export default App;

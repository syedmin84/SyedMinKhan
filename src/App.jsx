import "./App.css";
import Header from "./Components/Header";
import HeaderLine from "./Components/HeaderLine";
import SkillsSection from "./Components/SkillsSection"
import MainLine from "./Components/MainLine"
import ProjectContainer from "./Components/ProjectContainer"
import MainVerticleLine from "./Components/MainVerticleLine"
import Testimonial from "./Components/Testimonial"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Header />
      <HeaderLine className="" />
      <main className=" flex flex-col relative mt-12 lg:mt-0 mb-0">
      <SkillsSection />
      <MainLine />
      <ProjectContainer />
      <MainVerticleLine />
      <Testimonial />
      <ContactUs  />
      <Footer /> 
      </main>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header";
import HeaderLine from "./Components/HeaderLine";
import SkillsSection from "./Components/SkillsSection"

function App() {
  return (
    <>
      <Header />
      <HeaderLine className="" />
      <main className=" flex flex-col relative mt-12 lg:mt-0 mb-0">
      <SkillsSection />
      </main>
    </>
  );
}

export default App;

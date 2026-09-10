import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Profile />
        <Skill />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
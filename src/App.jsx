import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">© 2025 Pearl | All rights reserved.</footer>
    </div>
  );
}

export default App;


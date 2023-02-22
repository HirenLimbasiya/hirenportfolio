
import './App.css';
import Header from './components/header/Header';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Tool from "./components/tool/Tool"
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tool />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

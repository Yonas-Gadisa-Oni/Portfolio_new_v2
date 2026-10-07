import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;

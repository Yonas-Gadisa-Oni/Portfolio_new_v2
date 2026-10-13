import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

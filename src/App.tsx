import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { LightEffects } from './components/LightEffects';
import './App.css';

function App() {
  return (
    <main className="relative bg-[#0a0a12] min-h-screen">
      {/* Cosmic dust particles overlay */}
      <LightEffects />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

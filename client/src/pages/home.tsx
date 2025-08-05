import { ParticleBackground } from '../components/particles';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';
import { Experience } from '../components/experience';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

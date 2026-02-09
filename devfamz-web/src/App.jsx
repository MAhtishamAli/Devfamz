import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text-main selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Editorial Noise Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Moving Mesh Gradient Background (Void/Cyan/Violet) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-[radial-gradient(circle_farthest-side,rgba(138,0,255,0.15),rgba(255,255,255,0))] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[-50%] right-[-50%] bottom-[-50%] left-[-50%] bg-[radial-gradient(circle_farthest-side,rgba(0,232,255,0.15),rgba(255,255,255,0))] animate-blob animation-delay-2000 mix-blend-screen" style={{ transformOrigin: 'top right' }}></div>
        <div className="absolute bottom-[-50%] right-[-50%] top-[-50%] left-[-50%] bg-[radial-gradient(circle_farthest-side,rgba(138,0,255,0.10),rgba(255,255,255,0))] animate-blob animation-delay-4000 mix-blend-screen" style={{ transformOrigin: 'bottom right' }}></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Benefits />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;

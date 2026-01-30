
import React from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <header className="absolute top-0 w-full py-8 px-10 flex justify-between items-center z-10">
        <div className="text-xl font-bold tracking-tighter text-white">
          TAIFA <span className="text-cyan-500">HUB</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/50">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Transparency</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </header>

      <main className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-4xl md:text-7xl font-extralight tracking-tight mb-6 text-white max-w-4xl mx-auto leading-tight">
          Empowering Kenya’s <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Digital Future
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/40 font-light mb-12 max-w-xl mx-auto">
          The central infrastructure for innovation, governance, and community connectivity in the digital age.
        </p>
        
        <button
          onClick={onEnter}
          className="glow-button px-10 py-4 bg-white text-black font-semibold rounded-full text-lg tracking-wide glass hover:bg-cyan-500 hover:text-white border-none"
        >
          Enter Platform
        </button>
      </main>

      <footer className="absolute bottom-8 w-full text-center text-xs text-white/20 tracking-widest uppercase font-medium">
        © 2025 Taifa Hub Digital • Built for the Republic
      </footer>
    </div>
  );
};

export default LandingPage;

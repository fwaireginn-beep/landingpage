
import React from 'react';
import { SUBDOMAINS } from '../constants';
import * as LucideIcons from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 animate-in fade-in duration-700">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-16">
        <button 
          onClick={onBack}
          className="group flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors"
        >
          <LucideIcons.ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Return Home
        </button>
        <div className="text-lg font-bold tracking-tighter">
          TAIFA <span className="text-cyan-500">HUB</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <LucideIcons.User className="w-4 h-4 text-white/60" />
          </div>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-extralight text-white mb-4">Digital Services Portal</h2>
        <p className="text-white/40 text-lg font-light">
          Welcome to the heart of the platform. Select a service below to continue.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {SUBDOMAINS.map((sub) => {
          // Dynamic Icon selection
          const IconComponent = (LucideIcons as any)[sub.icon] || LucideIcons.Globe;

          return (
            <a
              key={sub.id}
              href={sub.url}
              className="glass p-10 rounded-3xl group transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/5 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                <IconComponent className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
                {sub.name}
                <LucideIcons.ArrowUpRight className="w-5 h-5 ml-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-cyan-500" />
              </h3>
              <p className="text-white/50 text-base leading-relaxed mb-8 font-light">
                {sub.description}
              </p>
              <div className="mt-auto inline-flex items-center px-6 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-mono text-cyan-500/80 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                Launch Application
              </div>
            </a>
          );
        })}
      </div>

      <footer className="max-w-7xl mx-auto mt-24 text-center">
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center px-8 py-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium tracking-wide uppercase"
          >
            <LucideIcons.ArrowLeft className="w-4 h-4 mr-2" />
            Back to Welcome Screen
          </button>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/10 mx-auto mb-8"></div>
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © 2025 Taifa Hub Digital • All services secured
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;

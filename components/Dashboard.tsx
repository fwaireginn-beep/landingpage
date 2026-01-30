
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

      <header className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-light text-white mb-2">Digital Ecosystem</h2>
        <p className="text-white/40 max-w-2xl">
          Select a specialized portal below to access government services, business tools, or educational resources.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBDOMAINS.map((sub) => {
          // Dynamic Icon selection
          const IconComponent = (LucideIcons as any)[sub.icon] || LucideIcons.Globe;

          return (
            <a
              key={sub.id}
              href="#"
              className="glass p-8 rounded-2xl group transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <IconComponent className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                {sub.name}
                <LucideIcons.ChevronRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500" />
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {sub.description}
              </p>
              <div className="text-xs font-mono text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                {sub.url}
              </div>
            </a>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto mt-20 p-12 glass rounded-[2rem] flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        <div className="z-10">
          <h3 className="text-2xl font-light text-white mb-4">Central Integration Hub</h3>
          <p className="text-white/40 max-w-md text-sm mb-6">
            We are continuously expanding the Taifa Digital Network. Securely link your biometric ID to access all sub-platforms instantly.
          </p>
          <button className="px-6 py-2 border border-white/10 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all">
            Link Identity
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      </div>
    </div>
  );
};

export default Dashboard;

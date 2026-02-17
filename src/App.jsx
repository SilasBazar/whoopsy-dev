import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Target, Skull, Terminal, Crosshair, Cpu } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Ensuring the background is set correctly on load
    document.body.style.backgroundColor = '#080808';
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-mono selection:bg-[#ccff00] selection:text-black overflow-x-hidden relative">
      {/* Global Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Decorative Corners */}
      <div className="fixed top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#ccff00] z-50"></div>
      <div className="fixed top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#ccff00] z-50"></div>
      <div className="fixed bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#ccff00] z-50"></div>
      <div className="fixed bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#ccff00] z-50"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 border-b border-[#333] bg-[#080808]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center text-black font-black text-2xl transform group-hover:rotate-12 transition-transform">
                W
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">Whoopsy<span className="text-[#ccff00]">.</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Manifesto', 'Games', 'Careers', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-[#ccff00] transition-colors relative group">
                    <span className="text-[#ccff00] opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity">/</span>
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-[#ccff00]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#333] bg-[#080808]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Manifesto', 'Games', 'Careers', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-4 text-base font-bold uppercase hover:bg-[#1a1a1a] hover:text-[#ccff00] border-l-2 border-transparent hover:border-[#ccff00]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-[#333]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none">
          <div className="text-[20rem] font-black leading-none text-transparent" style={{ WebkitTextStroke: '2px #333' }}>
            W
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="inline-block px-2 py-1 mb-6 border border-[#ccff00] text-[#ccff00] text-xs font-bold uppercase tracking-widest">
                System Status: Rebellious
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                Games That <span className="text-transparent" style={{ WebkitTextStroke: '2px #ccff00' }}>Rock</span><br/>
                With No <span className="bg-[#ccff00] text-black px-2">BS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light border-l-4 border-[#333] pl-6">
                Born from the pain of corporate politics. We build the games developers 
                actually want to make. Tight loops. Real intent. No filler.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#ccff00] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                  Play Our Sh*t <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-wider hover:border-[#ccff00] hover:text-[#ccff00] transition-colors">
                  Join The Rebellion
                </button>
              </div>
            </div>

            {/* Technical Sidebar Stats */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
              <div className="border border-[#333] p-6 relative">
                <div className="absolute -top-3 left-4 bg-[#080808] px-2 text-xs text-gray-500 uppercase">Current Coordinate</div>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-bold text-[#ccff00]">35°</span>
                  <span className="text-xs text-right text-gray-500">LAT LONG<br/>UNDEFINED</span>
                </div>
              </div>
              
              <div className="border border-[#333] p-6 relative group hover:border-red-500 transition-colors">
                <div className="absolute -top-3 left-4 bg-[#080808] px-2 text-xs text-gray-500 uppercase group-hover:text-red-500">Warning</div>
                <p className="text-sm uppercase leading-relaxed text-gray-400">
                  Caution: Exposure to unadulterated gameplay may cause feelings of joy, contentment, and spontaneous high-fiving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-[#ccff00] py-3 overflow-hidden border-y border-black">
        <div className="whitespace-nowrap animate-marquee inline-block">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-black uppercase text-xl mx-8 tracking-wider">
              Fun + Real + Blunt /// No Corporate Overlords /// Dev Driven /// 
            </span>
          ))}
        </div>
      </div>

      {/* Mission / Origin Section */}
      <section id="manifesto" className="py-24 border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
               {/* Abstract Graphic Construction */}
               <div className="aspect-square border-2 border-[#333] relative p-8">
                  <div className="absolute top-0 right-0 p-2 border-l border-b border-[#333] text-xs font-mono text-gray-600">FIG 1.0</div>
                  <div className="w-full h-full border border-dashed border-gray-700 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[#ccff00] opacity-5 mix-blend-overlay"></div>
                     <Terminal size={120} className="text-[#333]" />
                     <div className="absolute bottom-4 left-4 text-6xl font-black text-white mix-blend-difference">ORIGIN</div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-t-2 border-l-2 border-[#ccff00]"></div>
               </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 text-[#ccff00]">
                <Target size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">The Mission</span>
              </div>
              <h2 className="text-4xl font-bold uppercase mb-6 leading-tight">
                We aren't solving a customer problem. <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>We're solving an employee one.</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">The Origin Story:</strong> This studio was born out of pain. The pain of watching developers get crushed by corporate politics, unable to build the games they love.
                </p>
                <p>
                  <strong className="text-white">The Fix:</strong> We created Whoopsy to let intent and style bleed into the product. When devs are happy, the games are tight. It's that simple.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#333] pb-8">
            <h2 className="text-6xl font-black uppercase tracking-tighter text-white">
              Core <span className="text-[#ccff00]">Protocols</span>
            </h2>
            <div className="text-right mt-4 md:mt-0">
               <div className="text-xs text-gray-500 uppercase">Data Packet: Values</div>
               <div className="text-xs text-gray-500 uppercase">Encryption: None</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#333]">
            {[
              { title: "FUN", icon: <Zap size={32} />, desc: "If we aren't having it, you won't feel it. We prioritize the joy of creation." },
              { title: "REAL", icon: <Cpu size={32} />, desc: "No marketing fluff. No fake roadmaps. Just honest game development." },
              { title: "BLUNT", icon: <Skull size={32} />, desc: "We say what we mean. Radical candor makes better games." }
            ].map((value, idx) => (
              <div key={idx} className="group border-r border-b border-[#333] p-10 hover:bg-[#111] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#ccff00]">
                  <Crosshair size={20} />
                </div>
                <div className="mb-8 text-gray-600 group-hover:text-[#ccff00] transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-black uppercase mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
                <div className="mt-8 h-1 w-12 bg-[#333] group-hover:bg-[#ccff00] transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor / Attitude Section */}
      <section className="py-24 relative overflow-hidden">
         {/* Background glitched text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
            <div className="text-9xl font-black uppercase text-white">REBEL</div>
            <div className="text-9xl font-black uppercase text-white ml-24">REBEL</div>
            <div className="text-9xl font-black uppercase text-white -ml-24">REBEL</div>
         </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-red-600 text-black font-bold px-3 py-1 text-xs uppercase mb-6 transform -rotate-2">
            Warning: High Attitude Levels
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-none">
            "Whatever we damn well feel like. <br/>
            <span className="text-[#ccff00]">You're not my boss.</span>"
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            We respect the titans—Valve's dynamic teams, Ghost Ship's community trust—but we bring our own secret sauce: A goofy attitude wrapped in a tight gameplay loop.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
             <div className="border border-[#333] p-4">
                <div className="text-xs text-gray-500 uppercase mb-1">Archetype</div>
                <div className="font-bold text-[#ccff00]">WISE JESTER</div>
             </div>
             <div className="border border-[#333] p-4">
                <div className="text-xs text-gray-500 uppercase mb-1">Tone</div>
                <div className="font-bold text-[#ccff00]">WITTY</div>
             </div>
             <div className="border border-[#333] p-4">
                <div className="text-xs text-gray-500 uppercase mb-1">Style</div>
                <div className="font-bold text-[#ccff00]">BOLD</div>
             </div>
             <div className="border border-[#333] p-4">
                <div className="text-xs text-gray-500 uppercase mb-1">Status</div>
                <div className="font-bold text-[#ccff00]">UNMANAGED</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#333] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 bg-[#ccff00] flex items-center justify-center text-black font-black">W</div>
                 <span className="font-bold text-xl uppercase tracking-tighter">Whoopsy</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-6">
                Creating games that rock with no BS. 
                Based in the digital ether, grounded in reality.
              </p>
              <div className="flex space-x-4">
                 {['Twitter', 'Discord', 'Steam'].map(social => (
                    <a key={social} href="#" className="text-gray-500 hover:text-[#ccff00] uppercase text-xs font-bold tracking-widest border border-[#333] px-3 py-2 hover:border-[#ccff00] transition-colors">
                       {social}
                    </a>
                 ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase mb-6 tracking-wider border-b border-[#333] pb-2 inline-block">Sitemap</h4>
              <ul className="space-y-3">
                {['Manifesto', 'Games', 'Press Kit', 'Contact'].map(link => (
                   <li key={link}><a href="#" className="text-gray-500 hover:text-[#ccff00] transition-colors text-sm uppercase">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase mb-6 tracking-wider border-b border-[#333] pb-2 inline-block">Contact</h4>
              <ul className="space-y-3">
                 <li className="text-gray-500 text-sm">Main Stakeholder:<br/><span className="text-white">Silas Bazar</span></li>
                 <li className="text-gray-500 text-sm">Email:<br/><span className="text-white">hello@whoopsy.games</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <p>&copy; 2024 WHOOPSY GAMES INC. ALL RIGHTS RESERVED.</p>
            <p className="mt-2 md:mt-0 uppercase">Designed with <span className="text-red-500">♥</span> & Anger</p>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
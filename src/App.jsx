import React, { useState, useEffect } from 'react';

// --- INLINE SVG ASSETS & EFFECTS ---

// Generates a film-grain/print noise overlay
const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.35] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-40">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// Custom Starburst SVG matching the poster style
const Starburst = ({ className, color = "#efead6" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M50 0L56 38L95 15L67 48L100 70L60 62L65 100L43 65L5 85L35 55L0 30L40 40Z"
    />
  </svg>
);

// Dotted line connecting elements
const ConnectionLine = ({ className }) => (
  <div className={`absolute border-t-2 border-dotted border-[#efead6] opacity-50 ${className}`}></div>
);

// Mesh gradient background
const MeshGradient = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-[#ff126a] rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-[#340e36] rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-[#efead6] rounded-full filter blur-[150px]"></div>
    </div>
  </div>
);

// Diagonal stripe pattern
const DiagonalPattern = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #efead6 25%, transparent 25%, transparent 75%, #efead6 75%, #efead6), linear-gradient(45deg, #efead6 25%, transparent 25%, transparent 75%, #efead6 75%, #efead6)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>
);

// Hexagon grid pattern
const HexagonPattern = () => (
  <svg viewBox="0 0 100 100" className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ position: 'absolute' }}>
    <defs>
      <pattern id="hexagons" x="0" y="0" width="40" height="69.28" patternUnits="userSpaceOnUse">
        <path d="M20 0 L40 11.55 L40 34.64 L20 46.19 L0 34.64 L0 11.55 Z" fill="#efead6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
);

// Film scratches overlay
const FilmScratches = () => {
  const [lines] = useState(() =>
    [...Array(50)].map(() => ({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      strokeWidth: Math.random() * 0.5
    }))
  );

  return (
    <svg viewBox="0 0 100 100" className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ position: 'absolute' }}>
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#efead6"
          strokeWidth={line.strokeWidth}
        />
      ))}
    </svg>
  );
};

// Circles and dots pattern
const CirclePattern = () => (
  <svg viewBox="0 0 200 200" className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]" style={{ position: 'absolute' }}>
    <circle cx="10" cy="10" r="3" fill="#efead6" />
    <circle cx="30" cy="5" r="2" fill="#efead6" />
    <circle cx="50" cy="12" r="4" fill="#efead6" />
    <circle cx="80" cy="8" r="2" fill="#efead6" />
    <circle cx="100" cy="15" r="3" fill="#efead6" />
    <circle cx="120" cy="6" r="2" fill="#efead6" />
    <circle cx="140" cy="10" r="3" fill="#efead6" />
    <circle cx="160" cy="12" r="2" fill="#efead6" />
    <circle cx="180" cy="8" r="4" fill="#efead6" />
    <circle cx="190" cy="10" r="2" fill="#efead6" />
    <circle cx="20" cy="40" r="3" fill="#efead6" />
    <circle cx="40" cy="35" r="2" fill="#efead6" />
    <circle cx="60" cy="42" r="4" fill="#efead6" />
    <circle cx="90" cy="38" r="2" fill="#efead6" />
    <circle cx="110" cy="45" r="3" fill="#efead6" />
    <circle cx="130" cy="37" r="2" fill="#efead6" />
    <circle cx="150" cy="42" r="3" fill="#efead6" />
    <circle cx="170" cy="40" r="4" fill="#efead6" />
    <circle cx="185" cy="38" r="2" fill="#efead6" />
    <circle cx="25" cy="70" r="2" fill="#efead6" />
    <circle cx="45" cy="65" r="3" fill="#efead6" />
    <circle cx="65" cy="72" r="2" fill="#efead6" />
    <circle cx="85" cy="68" r="4" fill="#efead6" />
    <circle cx="105" cy="75" r="2" fill="#efead6" />
    <circle cx="125" cy="67" r="3" fill="#efead6" />
    <circle cx="145" cy="72" r="2" fill="#efead6" />
    <circle cx="165" cy="70" r="4" fill="#efead6" />
    <circle cx="182" cy="68" r="2" fill="#efead6" />
    <circle cx="12" cy="95" r="3" fill="#efead6" />
    <circle cx="32" cy="90" r="2" fill="#efead6" />
    <circle cx="52" cy="97" r="4" fill="#efead6" />
    <circle cx="72" cy="93" r="2" fill="#efead6" />
    <circle cx="92" cy="100" r="3" fill="#efead6" />
    <circle cx="112" cy="92" r="2" fill="#efead6" />
    <circle cx="132" cy="98" r="3" fill="#efead6" />
    <circle cx="152" cy="95" r="4" fill="#efead6" />
    <circle cx="172" cy="93" r="2" fill="#efead6" />
    <circle cx="188" cy="95" r="3" fill="#efead6" />
    <circle cx="8" cy="120" r="2" fill="#efead6" />
    <circle cx="28" cy="115" r="3" fill="#efead6" />
    <circle cx="48" cy="122" r="2" fill="#efead6" />
    <circle cx="68" cy="118" r="4" fill="#efead6" />
    <circle cx="88" cy="125" r="2" fill="#efead6" />
    <circle cx="108" cy="117" r="3" fill="#efead6" />
    <circle cx="128" cy="123" r="2" fill="#efead6" />
    <circle cx="148" cy="120" r="4" fill="#efead6" />
    <circle cx="168" cy="118" r="2" fill="#efead6" />
    <circle cx="184" cy="120" r="3" fill="#efead6" />
    <circle cx="15" cy="145" r="3" fill="#efead6" />
    <circle cx="35" cy="140" r="2" fill="#efead6" />
    <circle cx="55" cy="147" r="4" fill="#efead6" />
    <circle cx="75" cy="143" r="2" fill="#efead6" />
    <circle cx="95" cy="150" r="3" fill="#efead6" />
    <circle cx="115" cy="142" r="2" fill="#efead6" />
    <circle cx="135" cy="148" r="3" fill="#efead6" />
    <circle cx="155" cy="145" r="4" fill="#efead6" />
    <circle cx="175" cy="143" r="2" fill="#efead6" />
    <circle cx="191" cy="145" r="3" fill="#efead6" />
    <circle cx="18" cy="170" r="2" fill="#efead6" />
    <circle cx="38" cy="165" r="3" fill="#efead6" />
    <circle cx="58" cy="172" r="4" fill="#efead6" />
    <circle cx="78" cy="168" r="2" fill="#efead6" />
    <circle cx="98" cy="175" r="3" fill="#efead6" />
    <circle cx="118" cy="167" r="2" fill="#efead6" />
    <circle cx="138" cy="173" r="3" fill="#efead6" />
    <circle cx="158" cy="170" r="4" fill="#efead6" />
    <circle cx="178" cy="168" r="2" fill="#efead6" />
    <circle cx="194" cy="170" r="3" fill="#efead6" />
    <circle cx="20" cy="195" r="2" fill="#efead6" />
    <circle cx="40" cy="190" r="3" fill="#efead6" />
    <circle cx="60" cy="197" r="4" fill="#efead6" />
    <circle cx="80" cy="193" r="2" fill="#efead6" />
    <circle cx="100" cy="200" r="3" fill="#efead6" />
    <circle cx="120" cy="192" r="2" fill="#efead6" />
    <circle cx="140" cy="198" r="3" fill="#efead6" />
    <circle cx="160" cy="195" r="4" fill="#efead6" />
    <circle cx="180" cy="193" r="2" fill="#efead6" />
  </svg>
);

// Subtle grain overlay
const GrainOverlay = () => (
  <div
    className="fixed inset-0 z-40 pointer-events-none opacity-[0.02]"
    style={{
      backgroundImage: `radial-gradient(#efead6 1px, transparent 1px)`,
      backgroundSize: '3px 3px'
    }}
  />
);

// Geometric waves
const GeometricWaves = () => (
  <svg viewBox="0 0 1000 100" className="fixed z-0 pointer-events-none opacity-[0.05]" style={{ position: 'absolute', width: '100%', height: '100%' }}>
    {[...Array(5)].map((_, i) => (
      <path
        key={i}
        d={`M0 ${100 - i * 20} Q250 ${50 - i * 10} 500 ${100 - i * 20} T1000 ${100 - i * 20}`}
        fill="none"
        stroke="#efead6"
        strokeWidth={1}
        opacity={0.5}
      />
    ))}
  </svg>
);

// Speckles and grunge texture for selective elements
const SpecklesGrunge = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ position: 'absolute' }}>
    <filter id="specklesGrunge">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="1" intercept="-0.8" />
      </feComponentTransfer>
      <feComposite operator="in" in2="SourceGraphic" />
    </filter>
    <rect width="100%" height="100%" filter="url(#specklesGrunge)" />
  </svg>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Simple parallax effect for the background text to make it feel "alive"
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#ff126a] text-[#efead6] overflow-x-hidden font-sans selection:bg-[#340e36] selection:text-[#ff126a]">
      <SpecklesGrunge />

      {/* Navigation - Scroll Triggered */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100
            ? 'bg-[#340e36]/95 backdrop-blur-md border-b border-[#efead6]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="font-poster text-3xl tracking-tighter uppercase text-[#efead6]">
                Whoopsy<span className="text-[#340e36]">.</span>
              </span>
            </div>

            <div className="hidden md:flex items-baseline space-x-8">
              {['Manifesto', 'Games', 'Careers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-body font-bold text-sm uppercase tracking-wider text-[#efead6] hover:text-[#ff126a] transition-colors relative group"
                >
                  <span className="text-[#ff126a] opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity">/</span>
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#efead6] hover:text-[#ff126a] transition-colors"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-[#340e36] border-t border-[#efead6]/20">
          <div className="px-4 py-4 space-y-3">
            {['Manifesto', 'Games', 'Careers', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-body font-bold text-lg uppercase text-[#efead6] hover:text-[#ff126a] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <NoiseOverlay />
      <MeshGradient />
      <DiagonalPattern />
      <HexagonPattern />
      <FilmScratches />
      <CirclePattern />
      <GrainOverlay />
      <GeometricWaves />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Massive Background Typography (Baby Driver Style) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center font-poster text-[35vw] md:text-[28vw] leading-[0.75] select-none z-0 tracking-tight"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          {/* Overlapping, varied colors matching the poster */}
          <div className="relative z-10 text-[#efead6] flex items-center">
            <span className="rotate-[-2deg]">WH</span>
            <span className="text-[#340e36] -ml-[2vw] rotate-[1deg]">OO</span>
          </div>
          <div className="relative z-20 text-[#340e36] -mt-[4vw] flex items-center">
            <span className="text-outline">P</span>
            <span className="text-[#efead6] -ml-[2vw]">S</span>
            <span className="text-[#ff126a] text-outline-dark -ml-[1vw] rotate-[-3deg]">Y</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <Starburst className="absolute top-[10%] left-[10%] w-24 h-24 rotate-12 opacity-80" color="#340e36" />
        <Starburst className="absolute bottom-[20%] right-[15%] w-32 h-32 rotate-[-15deg]" color="#efead6" />
        <Starburst className="absolute top-[40%] right-[5%] w-16 h-16 rotate-45" color="#340e36" />

        <ConnectionLine className="top-[20%] left-0 w-[40%] rotate-[15deg]" />
        <ConnectionLine className="bottom-[30%] right-0 w-[35%] rotate-[-10deg]" />

        {/* Foreground Content */}
        <div className="relative z-30 text-center max-w-5xl px-4 mt-12">
          <p className="font-body font-bold text-lg md:text-2xl tracking-widest uppercase mb-4 text-[#340e36] bg-[#efead6] inline-block px-4 py-1 rotate-[-2deg]">
            A Dev-Driven Studio
          </p>
          <h1 className="font-poster text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none drop-shadow-[0_5px_0_#340e36] rotate-[1deg] speckles-grunge">
            Games That Rock.<br/>
            <span className="text-[#340e36] text-outline">No Corporate BS.</span>
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="font-poster text-2xl md:text-3xl bg-[#340e36] text-[#ff126a] px-8 py-4 uppercase tracking-wider hover:bg-[#efead6] hover:text-[#340e36] hover:rotate-[-2deg] transition-all duration-300 border-4 border-[#340e36] speckles-grunge">
              Play The Games
            </button>
            <button className="font-poster text-2xl md:text-3xl bg-transparent text-[#340e36] border-4 border-[#340e36] px-8 py-4 uppercase tracking-wider hover:bg-[#340e36] hover:text-[#efead6] hover:rotate-[2deg] transition-all duration-300 speckles-grunge">
              Join The Rebellion
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 z-30 animate-bounce">
          <svg className="w-8 h-8 text-[#340e36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* --- MANIFESTO SECTION --- */}
      {/* Clip path creates the dynamic angled cut like the poster lines */}
      <section id="manifesto" className="relative bg-[#340e36] py-32 px-4" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <h2 className="font-poster text-6xl md:text-8xl text-[#ff126a] mb-6 leading-none">
                THE<br/>ORIGIN
              </h2>
              <Starburst className="absolute -top-10 -left-10 w-20 h-20 opacity-50 z-[-1]" color="#ff126a" />
              <div className="w-24 h-2 bg-[#efead6] mb-8"></div>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-[#efead6]">
                This studio was born out of the pain that devs don't get to build the games they want to make. Instead of getting lost in corporate politics, <strong className="text-[#ff126a]">Whoopsy develops dev-driven games.</strong>
              </p>
              <p className="font-body text-lg md:text-xl leading-relaxed mt-6 text-[#efead6] opacity-80">
                We give our devs the space to make great games built from passion. Their intent bleeds into the product, creating something real, honest, and tight.
              </p>
            </div>

            <div className="space-y-8 relative">
              <div className="absolute left-[-2rem] top-0 bottom-0 w-1 bg-dotted border-l-4 border-dotted border-[#ff126a] opacity-30 hidden md:block"></div>

              {/* Core Values */}
              {[
                { title: "FUN", desc: "Tight game loops that leave you satisfied every second. Like Ultimate Chicken Horse or Stick Fight." },
                { title: "REAL", desc: "No dirty monetization. No disappointment. Just content that makes you feel alive." },
                { title: "BLUNT", desc: "We are the Wise Jester. We talk to our players and peers directly. Whatever we damn well feel like." }
              ].map((value, idx) => (
                <div key={idx} className="bg-[#ff126a] p-6 transform hover:translate-x-4 transition-transform duration-300">
                  <h3 className="font-poster text-4xl text-[#340e36] mb-2">{value.title}</h3>
                  <p className="font-body text-[#efead6] text-lg">{value.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- MARQUEE / VIBE CHECK SECTION --- */}
      <section className="py-24 bg-[#efead6] overflow-hidden relative rotate-[2deg] scale-110 my-12">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-90">
          <div className="font-poster text-6xl md:text-8xl text-[#ff126a] tracking-widest mx-4 uppercase text-outline-dark">
            NO BS • TIGHT LOOPS • DEV DRIVEN • PLAYER FOCUSED •
          </div>
          <div className="font-poster text-6xl md:text-8xl text-[#ff126a] tracking-widest mx-4 uppercase text-outline-dark">
            NO BS • TIGHT LOOPS • DEV DRIVEN • PLAYER FOCUSED •
          </div>
        </div>
      </section>

      {/* --- GAMES SECTION --- */}
      <section id="games" className="py-32 bg-[#ff126a] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-poster text-6xl md:text-8xl text-[#efead6] tracking-tighter speckles-grunge">
              OUR GAMES
            </h2>
            <p className="font-body text-xl text-[#340e36] mt-4 md:mt-0 max-w-md">
              Games built with passion, not profit motives. Coming soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Upcoming Project", desc: "An upcoming game that combines tight gameplay with absurd humor.", color: "#340e36" },
              { title: "Coming Soon", desc: "We're cooking up something special. Stay tuned.", color: "#efead6" },
              { title: "In Development", desc: "Our latest passion project in the works.", color: "#ff126a" }
            ].map((game, idx) => (
              <div
                key={idx}
                className="bg-[#efead6] p-8 border-4 border-[#340e36] transform hover:scale-105 transition-transform duration-300 hover:rotate-1"
              >
                <div className="w-16 h-16 mb-6" style={{ backgroundColor: game.color }}></div>
                <h3 className="font-poster text-4xl text-[#340e36] mb-4">{game.title}</h3>
                <p className="font-body text-[#340e36] text-lg">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAREERS SECTION --- */}
      <section id="careers" className="py-32 bg-[#340e36] px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-poster text-6xl md:text-8xl text-[#ff126a] mb-8 speckles-grunge">
            JOIN THE<br/>REBELLION
          </h2>
          <p className="font-body text-2xl text-[#efead6] mb-12">
            We're looking for developers who are tired of corporate bs and want to build games they actually care about.
          </p>

          <div className="space-y-4">
            <button className="font-poster text-xl bg-[#ff126a] text-[#efead6] px-8 py-4 uppercase tracking-wider hover:bg-[#efead6] hover:text-[#ff126a] hover:rotate-[-2deg] transition-all duration-300 border-4 border-[#ff126a] speckles-grunge">
              View Open Positions
            </button>
            <button className="font-poster text-xl bg-transparent text-[#efead6] border-4 border-[#efead6] px-8 py-4 uppercase tracking-wider hover:bg-[#efead6] hover:text-[#340e36] hover:rotate-[2deg] transition-all duration-300 speckles-grunge">
              Send Resume
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer id="contact" className="relative bg-[#ff126a] pt-32 pb-16 px-4 overflow-hidden">
        <Starburst className="absolute bottom-0 right-[10%] w-64 h-64 rotate-90 opacity-20" color="#340e36" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-poster text-7xl md:text-9xl text-[#340e36] mb-8 rotate-[-1deg]">
            WHOOPSY.
          </h2>
          <p className="font-body text-2xl text-[#efead6] font-bold bg-[#340e36] inline-block px-6 py-3 mb-12">
            "Whatever we damn well feel like, you're not my boss!"
          </p>

          <div className="flex justify-center gap-8 font-body font-bold text-[#340e36] text-lg uppercase tracking-wider">
            <a href="#" className="hover:text-[#efead6] transition-colors underline decoration-4 underline-offset-4">Steam</a>
            <a href="#" className="hover:text-[#efead6] transition-colors underline decoration-4 underline-offset-4">Twitter/X</a>
            <a href="#" className="hover:text-[#efead6] transition-colors underline decoration-4 underline-offset-4">Careers</a>
          </div>

          <p className="font-body mt-16 text-sm text-[#340e36] opacity-70 font-bold">
            © {new Date().getFullYear()} WHOOPSY STUDIOS. ALL RIGHTS RESERVED (BUT WE'RE COOL ABOUT IT).
          </p>
        </div>
      </footer>
    </div>
  );
}

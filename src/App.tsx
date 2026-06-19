import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock } from "lucide-react";

interface Atmosphere {
  name: string;
  glowColor: string;
}

const getAtmosphere = (hour: number): Atmosphere => {
  if (hour >= 5 && hour < 9) {
    return { name: "Celestial Dawn", glowColor: "#C16170" };
  } else if (hour >= 9 && hour < 17) {
    return { name: "Solar Midday", glowColor: "#E0BB52" };
  } else if (hour >= 17 && hour < 21) {
    return { name: "Amethyst Dusk", glowColor: "#A98AC4" };
  } else {
    return { name: "Cosmic Midnight", glowColor: "#7B9AC4" };
  }
};

export default function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [atmosphere, setAtmosphere] = useState<Atmosphere>({ name: "Solar Midday", glowColor: "#E0BB52" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoveredMotif, setHoveredMotif] = useState<string | null>(null);

  // Track cursor position for the ambient cursor aura and custom cursor element
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Format current Zurich/local time dynamically & calculate dynamic atmospheres
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const zurichTimeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Zurich",
        hour12: false,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
      });

      const userTimeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(userTimeStr);

      const zurichHour = parseInt(zurichTimeStr.split(":")[0], 10);
      setAtmosphere(getAtmosphere(zurichHour));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Frame paths for clean custom morphing cursor (4 matching control points)
  const trianglePath = "M 4 4 L 20 12 L 12 20 L 4 4 Z";
  const squarePath = "M 4 4 L 20 4 L 20 20 L 4 20 Z";

  return (
    <div 
      className="min-h-screen bg-ink text-warm-white font-sans flex flex-col relative overflow-hidden select-none md:cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Dynamic Spectrum Custom Floating Cursor */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: 0,
            top: 0,
            x: mousePos.x - 4, // Aligned to visual tip (4, 4)
            y: mousePos.y - 4,
          }}
          animate={{
            scale: isClicked ? 0.75 : 1.1,
            rotate: isClicked ? 45 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 24,
            mass: 0.6
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cursor-spectrum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C16170" />
                <stop offset="25%" stopColor="#A98AC4" />
                <stop offset="50%" stopColor="#E0BB52" />
                <stop offset="75%" stopColor="#8FB694" />
                <stop offset="100%" stopColor="#7B9AC4" />
              </linearGradient>
              <filter id="cursor-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <motion.path
              d={isClicked ? squarePath : trianglePath}
              fill="url(#cursor-spectrum)"
              stroke="rgba(242,239,233,0.3)"
              strokeWidth="1"
              strokeLinejoin="round"
              filter="url(#cursor-glow)"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
          </svg>
        </motion.div>
      )}

      {/* Background Radial Ambient Accents (Atmospheric color shifts dynamically) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 25%, #1A1815 0%, transparent 65%),
            radial-gradient(circle at 20% 70%, ${atmosphere.glowColor}1c 0%, transparent 35%)
          `
        }}
      />

      {/* Interactive Cursor Light Aura (Smoothly tracks across desktop grids) */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none opacity-35 transition-shadow duration-300 mix-blend-screen hidden md:block"
          style={{
            left: 0,
            top: 0,
            width: "500px",
            height: "500px",
            transform: `translate3d(calc(${mousePos.x}px - 250px), calc(${mousePos.y}px - 250px), 0)`,
            background: `radial-gradient(circle, ${atmosphere.glowColor}25 0%, transparent 70%)`
          }}
        />
      )}
      
      {/* Overlay subtle mesh/grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,239,233,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,233,0.012)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Main Structural Frame */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-8 md:py-12 flex flex-col justify-between items-center relative z-10">
        
        {/* TOP BAR / HEADER */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 border-b border-warm-white/5 pb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <span className="font-semibold text-sm tracking-[0.42em] uppercase whitespace-nowrap">
              HERR DESIGN COLLECTIVE
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-platinum/60 font-medium font-mono"
          >
            <div className="flex items-center gap-2">
              <span>Zurich, Switzerland</span>
              <span className="text-[9px] text-stone-custom italic font-light font-sans lowercase">({atmosphere.name.split(" ")[1]})</span>
            </div>
            <div className="h-3 w-[1px] bg-warm-white/10" />
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <Clock className="w-3.5 h-3.5 text-stone-custom animate-pulse" />
              <span>{currentTime || "12:00:00 PM"}</span>
            </div>
          </motion.div>
        </header>

        {/* HERO / CENTRAL AREA */}
        <main className="w-full py-12 md:py-16 flex flex-col items-center justify-center flex-1 max-w-3xl">
          
          {/* Feature 2: Interactive Micro-Spectrum bar with hover motif tooltips */}
          <div className="flex flex-col items-center mb-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="h-[4px] w-[140px] rounded-full overflow-hidden flex cursor-crosshair border border-white/5 bg-white/10 relative"
            >
              {[
                { name: "Identity Motif", color: "#C16170" },
                { name: "Relationships Motif", color: "#A98AC4" },
                { name: "Work Architecture Motif", color: "#E0BB52" },
                { name: "Spaces Motif", color: "#8FB694" },
                { name: "Leadership Motif", color: "#7B9AC4" }
              ].map((m, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredMotif(m.name)}
                  onMouseLeave={() => setHoveredMotif(null)}
                  className="h-full flex-1 transition-all duration-300 hover:scale-y-125"
                  style={{ backgroundColor: m.color }}
                  title={m.name}
                />
              ))}
            </motion.div>
            
            {/* Soft subtle label showing the signature motifs on scroll/hover */}
            <div className="h-4 mt-2 flex items-center justify-center">
              {hoveredMotif ? (
                <motion.span 
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  className="text-[10px] uppercase tracking-[0.25em] text-platinum font-mono font-medium"
                >
                  {hoveredMotif}
                </motion.span>
              ) : (
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone-custom font-mono">
                  our design spectrum
                </span>
              )}
            </div>
          </div>

          {/* Pulsing Status indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-platinum opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-platinum"></span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-platinum">
              Launching Soon
            </span>
          </motion.div>

          {/* Core Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-center leading-[1.1] mb-6"
          >
            The website is <span className="italic font-normal text-platinum">under construction.</span>
          </motion.h1>

          {/* Clean Literal Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-platinum/75 font-light text-center max-w-xl mb-12 leading-relaxed"
          >
            A new space for life, relationships and business architecture by Design.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://calendar.app.google/yw5MvmwjxNNZKnqT9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center bg-warm-white hover:bg-white text-ink transition-all duration-200 py-3.5 px-6 rounded-md text-sm font-semibold tracking-wide text-center uppercase cursor-pointer"
              >
                <span>Book a Conversation</span>
              </a>

              <a 
                href="mailto:contact@herrdesigncollective.com"
                className="flex-1 inline-flex items-center justify-center border border-warm-white/20 hover:border-warm-white/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200 py-3.5 px-6 rounded-md text-sm font-medium tracking-wide text-center uppercase cursor-pointer"
              >
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

        </main>

        {/* FOOTER */}
        <footer className="w-full flex flex-col items-center justify-center border-t border-warm-white/5 pt-6 gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-custom">
            Get In Touch
          </span>
          <a 
            href="mailto:contact@herrdesigncollective.com"
            className="text-sm tracking-wider hover:text-platinum transition-colors duration-200 border-b border-transparent hover:border-platinum pb-0.5 pointer-events-auto cursor-pointer"
          >
            contact@herrdesigncollective.com
          </a>
        </footer>

      </div>
    </div>
  );
}

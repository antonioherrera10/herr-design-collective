import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  HeartHandshake, 
  Layers, 
  Grid, 
  Sparkles, 
  Check, 
  ArrowRight,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Send
} from "lucide-react";

// Colors matched to the CSS prompt variables
interface Motif {
  id: string;
  name: string;
  color: string;
  colorCode: string;
  icon: any;
  description: string;
  philosophy: string;
}

const MOTIFS: Motif[] = [
  {
    id: "identity",
    name: "Identity",
    color: "bg-identity",
    colorCode: "#C16170",
    icon: Compass,
    description: "The foundation of all design.",
    philosophy: "Uncovering the authentic voice, personal values, and distinctive ethos that govern your individual or brand trajectory."
  },
  {
    id: "relationships",
    name: "Relationships",
    color: "bg-relationships",
    colorCode: "#A98AC4",
    icon: HeartHandshake,
    description: "Designing the bridges.",
    philosophy: "Fostering deep, intentional resonance and structured harmony in how humans connect, collaborate, and co-create."
  },
  {
    id: "work",
    name: "Work Architecture",
    color: "bg-work",
    colorCode: "#E0BB52",
    icon: Layers,
    description: "Systems for vision flow.",
    philosophy: "Creating systemic frameworks, tailored workflows, and scalable systems that convert pure vision into sustainable real-world impact."
  },
  {
    id: "spaces",
    name: "Spaces",
    color: "bg-spaces",
    colorCode: "#8FB694",
    icon: Grid,
    description: "Acoustic and spatial integrity.",
    philosophy: "Curating balanced, physical and digital environments that inspire profound focus, ease, elegance, and intentional living."
  },
  {
    id: "leadership",
    name: "Leadership",
    color: "bg-leadership",
    colorCode: "#7B9AC4",
    icon: Sparkles,
    description: "Conscious stewardship.",
    philosophy: "Forging authentic frameworks of presence and guidance that empower collectives to navigate deep complexity with poise and clarity."
  }
];

export default function App() {
  const [selectedMotif, setSelectedMotif] = useState<Motif>(MOTIFS[0]);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  
  // Format current local time dynamically
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      // Simulate/Save to LocalStorage
      const subscribers = JSON.parse(localStorage.getItem("herr_subscribers") || "[]");
      subscribers.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("herr_subscribers", JSON.stringify(subscribers));
      
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-ink text-warm-white font-sans flex flex-col relative overflow-hidden select-none">
      
      {/* Background Radial Ambient Accents */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 25%, #1A1815 0%, transparent 65%),
            radial-gradient(circle at 20% 70%, ${selectedMotif.colorCode}22 0%, transparent 35%)
          `
        }}
      />
      
      {/* Overlay subtle mesh/grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,239,233,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,233,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Main Structural Frame */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-8 md:py-12 flex flex-col justify-between items-center relative z-10">
        
        {/* TOP BAR */}
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
            <span>Zurich, Switzerland</span>
            <div className="h-3 w-[1px] bg-warm-white/10" />
            <span className="text-xs">{currentTime || "12:20:00 PM"}</span>
          </motion.div>
        </header>

        {/* HERO / CENTRAL AREA */}
        <main className="w-full py-10 md:py-16 flex flex-col items-center justify-center flex-1 max-w-3xl">
          
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

          {/* Subtitle/Lede */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-platinum/75 font-light text-center max-w-xl mb-10 leading-relaxed"
          >
            A new space for life, relationships and business architecture by design.
          </motion.p>

          {/* Dynamic Interactive Prism Spectrum Bar */}
          <div className="w-full max-w-md mx-auto mb-10">
            {/* The multi-colored spectrum bar (interactive triggers) */}
            <div className="flex h-1 w-full bg-white/10 rounded-full overflow-hidden mb-5">
              {MOTIFS.map((motif) => (
                <button
                  key={motif.id}
                  onClick={() => setSelectedMotif(motif)}
                  className={`flex-1 h-full cursor-pointer transition-all duration-300 hover:opacity-80 active:scale-x-95 ${motif.color} ${
                    selectedMotif.id === motif.id ? "ring-2 ring-white scale-y-150" : "opacity-75"
                  }`}
                  title={`View details on: ${motif.name}`}
                />
              ))}
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
              {MOTIFS.map((motif) => {
                const IconComponent = motif.icon;
                const isSelected = selectedMotif.id === motif.id;
                return (
                  <button
                    key={motif.id}
                    onClick={() => setSelectedMotif(motif)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isSelected 
                        ? `bg-white/10 border-white/20 text-warm-white font-medium shadow-sm` 
                        : "bg-transparent border-transparent text-stone-custom hover:text-platinum"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? "text-warm-white" : "text-stone-custom"}`} />
                    <span>{motif.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive motif explanation panel */}
          <div className="w-full max-w-lg mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMotif.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-6 relative overflow-hidden"
              >
                {/* Visual marker */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${selectedMotif.color}`} />
                
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg bg-white/[0.04] text-warm-white border border-white/5`}>
                    <selectedMotif.icon className="w-5 h-5 text-platinum" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold tracking-wider text-warm-white uppercase">
                        {selectedMotif.name}
                      </h3>
                      <span className="text-[10px] text-stone-custom italic font-light">— {selectedMotif.description}</span>
                    </div>
                    <p className="text-sm text-platinum/80 leading-relaxed font-light">
                      {selectedMotif.philosophy}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call to Actions */}
          <div className="w-full max-w-md flex flex-col items-center">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full">
              <a 
                href="https://calendar.app.google/yw5MvmwjxNNZKnqT9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-warm-white hover:bg-white text-ink transition-all duration-200 py-3.5 px-6 rounded-md text-sm font-semibold tracking-wide text-center uppercase"
              >
                <span>Book a Conversation</span>
              </a>

              <a 
                href="mailto:contact@herrdesigncollective.com"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-warm-white/20 hover:border-warm-white/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200 py-3.5 px-6 rounded-md text-sm font-medium tracking-wide text-center uppercase"
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>

        </main>

        {/* FOOTER */}
        <footer className="w-full flex flex-col items-center justify-center border-t border-warm-white/5 pt-6 gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-custom">
            Get In Touch
          </span>
          <a 
            href="mailto:contact@herrdesigncollective.com"
            className="text-sm tracking-wider hover:text-platinum transition-colors duration-200 border-b border-transparent hover:border-platinum pb-0.5"
          >
            contact@herrdesigncollective.com
          </a>
        </footer>

      </div>
    </div>
  );
}

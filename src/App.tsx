/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Search,
  Moon,
  Sun,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---
interface EducationItem {
  period: string;
  institution: string;
  level: string;
  details: string;
   Location: string;
  links?: { label: string; url: string }[];
}

// --- Components ---

const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">
          DP
        </div>
        <span className="font-bold tracking-tighter text-lg uppercase text-white">DebPortfolio</span>
      </div>

      <div className="flex-1 max-w-xs mx-8 hidden md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search components..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 px-4 text-xs focus:outline-none focus:border-sky-500/50 text-white"
          />
          <div className="absolute right-3 top-1.5 opacity-40">
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleDark}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sky-400"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="bg-sky-500 text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-sky-400 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]">
          Resume PDF
        </button>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  const skillsList = [
    { name: 'HTML / CSS', level: 95 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'C++', level: 70 },
    { name: 'Cybersecurity', level: 82 },
    { name: 'Data Structures & Algorithms', level: 68 },
    { name: 'Database Management', level: 75 },
    { name: 'WEB DEVELOPMENT💻', level: 90 },
    { name: 'APP DEVELOPMENT📱', level: 88 },
  ];

  return (
    <aside className="w-72 border-r border-white/10 p-6 flex flex-col gap-8 bg-[#0a0a0a] overflow-y-auto hidden lg:flex">
      <div className="text-center">
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-sky-500/30 p-1 mb-4 shadow-[0_0_20px_rgba(14,165,233,0.1)]"
          >
            <img
              src="https://i.ibb.co/4nRBqp4v/Whats-App-Image-2026-05-03-at-8-16-38-AM.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-black"></div>
        </div>
        <h2 className="text-xl font-bold text-white">Debobroto Barkandaj</h2>
        <p className="text-sky-400 text-[10px] font-mono uppercase tracking-widest mt-1 italic">@cyber_adept</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Technical Stacks</h3>
        <div className="space-y-5">
          {skillsList.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase font-bold text-white/70">
                <span>{skill.name}</span>
                <span className="text-sky-400">{skill.level}%</span>
              </div>
              <div className="h-1 shadow-sm w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex justify-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
          <a href="https://www.linkedin.com/in/debobroto-barkandaj-5b5b043b1/?locale=en-US" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 text-white"><Linkedin className="w-4 h-4" /></a>
          <a href="https://github.com/debobrotobarkandaj-tech" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 text-white"><Github className="w-4 h-4" /></a>
          <a href="https://www.instagram.com/ilysbp_ultimate_7?igsh=MTR5dGs5ZHVzMXI3dA==" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 text-white"><Instagram className="w-4 h-4" /></a>
          <a href="https://youtube.com/@tecno_debu_ff?si=casTVt74t4O59iX3" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 text-white"><Youtube className="w-4 h-4" /></a>
          <a href="https://www.facebook.com/share/1NHpPF8TYH/" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 text-white"><Facebook className="w-4 h-4" /></a>
        </div>
      </div>
    </aside>
  );
};


const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Cybersecurity Enthusiast | Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => { index = 0; }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-48 flex items-center rounded-3xl overflow-hidden border border-white/5 bg-white/5 p-8">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="relative z-10 flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl lg:text-5xl font-black italic mb-2 tracking-tight text-white uppercase"
        >
          WELCOMe  <span className="text-sky-500 underline decoration-sky-500/30">T0 MY PORTFOLIO🩵</span>
        </motion.h1>
        <p className="text-lg md:text-xl font-mono text-white/80">
          _ <span className="text-sky-400">{text}</span>
          <span className="inline-block w-2 h-5 bg-sky-500 animate-pulse ml-1 align-middle"></span>
        </p>
      </div>
      <div className="hidden md:block text-6xl lg:text-8xl font-black text-white/[0.03] select-none pointer-events-none uppercase absolute right-8 top-1/2 -translate-y-1/2">
        FF LOVER
      </div>
    </section>
  );
};

const Education = () => {
  const items: EducationItem[] = [
    {
      period: "2024 - 2028",
      institution: "BCA GRADUATION",
      level: "BCA COURSE",
      details: "Professional BCA Coursework focusing on modern tech.",
      Location: "Sealdah, Kolkata, West Bengal, India",
    },
    {
      period: "2023 - 2024",
      institution: "HARI HAR MAHAVIDHLAY",
      level: "CLASS 11-12 | SCIENCE",
      details: "Science stream with more future tension.",
      Location: "gutiary, Kolkata, West Bengal, India",
    },
    {
      period: "2017 - 2022",
      institution: "CANNING DEVID SESOON HIGH",
      level: "CLASS 5-10",
      details: "Secondary School foundation years.",
      Location: "Canning, Kolkata, West Bengal, India",
    },
     {
      period: "2012 - 2017",
      institution: "BRIGHT FUTURE ACADEMY",
      level: "CLASS 1-4",
      details: "Completed primary education covering classes 1-4.",
      Location: "Piali, Kolkata, West Bengal, India",
    }
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.3em]">Educational Journey</h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`sidebar-item group ${expanded === idx ? 'sidebar-item-active' : ''}`}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[9px] text-slate-500 font-bold uppercase mb-1 tracking-wider">{item.period}</p>
                <h4 className="font-bold text-sm text-white">{item.institution}</h4>
                <p className="text-[10px] text-slate-400 uppercase">{item.level}</p>
              </div>
              <div className={`text-sky-500 transition-opacity ${expanded === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <AnimatePresence>
              {expanded === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 pt-3 border-t border-white/5"
                >
                  <p className="text-[11px] text-white/50 leading-relaxed font-mono">
                    {item.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProjectPreview = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.3em]">Featured Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { id: '01', category: 'Web', title: 'Cyber Vault App' },
          { id: '02', category: 'Tools', title: 'Packet Sniffer v2' }
        ].map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 0.98 }}
            className="aspect-video bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-end group cursor-pointer hover:bg-white/10 transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
            <img
              src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&sig=${p.id}`}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10">
              <p className="text-[9px] font-bold text-sky-400 uppercase tracking-widest mb-1">{p.id} / {p.category}</p>
              <p className="text-sm font-bold text-white">{p.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl p-6 mt-2">
        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-white/60">Drop a line</h4>
        <form className="space-y-4" action="https://formspree.io/f/placeholder" method="POST">
          <div className="grid grid-cols-2 gap-3">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 transition-colors text-white w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 transition-colors text-white w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="The service is currently closed, so there is no need to write anything...."
            rows={3}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-sky-500 transition-colors text-white resize-none"
          />
          <button type="submit" className="w-full bg-sky-500 text-black px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! Ask me about Debobroto's projects or location." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    const lowercaseMsg = userMessage.toLowerCase();
    if (lowercaseMsg.includes('location') || lowercaseMsg.includes('where')) {
      setMessages(prev => [...prev, { role: 'bot', text: "I am located in Canning, West Bengal, India." }]);
      setIsLoading(false);
      return;
    }
    if (lowercaseMsg.includes('photo') || lowercaseMsg.includes('look like')) {
      setMessages(prev => [...prev, { role: 'bot', text: "You can see my photo in the sidebar! It features me in a professional look." }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are a personal assistant for Debobroto Barkandaj. BCA Student, Cybersecurity enthusiast. Location: Canning, West Bengal. Answer briefly and professionally."
        },
        contents: userMessage
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm processing your request." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm offline right now,Send me a message through Instagram!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <motion.div
        layout
        className="bg-sky-500 text-black p-4 rounded-3xl shadow-[0_15px_35px_rgba(14,165,233,0.4)] w-72 lg:w-80"
      >
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/10">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-bold uppercase tracking-tight">Personal Assistant</p>
            <div className="flex items-center gap-1.5 capitalize">
              <span className="w-1.5 h-1.5 bg-green-900 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-bold opacity-60">Curious? I'll give you the same answer every time😁🐧</p>
            </div>
          </div>
        </div>

        <div className="max-h-40 overflow-y-auto mb-4 space-y-2 pr-1 custom-scrollbar">
          {messages.slice(-3).map((m, i) => (
            <div key={i} className={`p-2.5 rounded-xl text-[10px] leading-relaxed font-medium ${m.role === 'bot' ? 'bg-black/5 italic' : 'bg-white/30 text-right font-bold'
              }`}>
              {m.text}
            </div>
          ))}
          {isLoading && <div className="text-[9px] font-bold animate-pulse">Thinking...</div>}
        </div>

        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="w-full bg-white/30 placeholder-black/60 rounded-2xl px-4 py-2.5 text-xs focus:outline-none border border-transparent focus:border-black/10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-10 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0e14]">
          <Hero />

          <div className="grid lg:grid-cols-2 gap-10">
            <Education />
            <ProjectPreview />
          </div>

          <footer className="mt-auto py-8 border-t border-white/5 opacity-40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-widest uppercase">
              <p>© 2026 DEBOBROTO BARKANDAJ</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-sky-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-sky-400 transition-colors">Security</a>
                <a href="#" className="hover:text-sky-400 transition-colors">Stack</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <AIChatbot />
    </div>
  );
}

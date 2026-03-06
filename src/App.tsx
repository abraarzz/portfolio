import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Sticker = ({ children, color, className, rotate, delay = 0 }: any) => {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5], rotate: [rotate - 1, rotate + 1, rotate - 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute px-4 py-2 md:px-6 md:py-3 rounded-xl font-black text-black border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-1 ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#8c8c8c] md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto bg-[#111] shadow-2xl overflow-hidden flex flex-col relative md:border-4 md:border-black">
        
        {/* Header */}
        <header className="flex justify-between items-center p-6 md:p-10 text-[#F4F4F0] relative z-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-[#F4F4F0] rounded-full flex items-center justify-center text-black font-bold border-2 border-black">
              AB
            </div>
            <div className="font-bold leading-tight text-sm md:text-base">
              Abraar
            </div>
          </div>
          <nav className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
            <a href="#work" className="hover:text-[#F4D03F] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#F4D03F] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#F4D03F] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#F4D03F] transition-colors">Contact</a>
          </nav>
        </header>

        {/* Hero Dark Section */}
        <div className="px-6 md:px-10 pt-10 md:pt-16 pb-20 text-[#F4F4F0] relative z-20">
          <h1 className="text-[17vw] md:text-[13.5vw] leading-[0.85] font-display uppercase tracking-tight mb-12 md:mb-16 text-center md:text-left w-full">
            IBRAHIM
          </h1>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium md:col-span-1">
              I'm Abraar Ibrahim, a professional website developer orchestrating digital experiences. I specialize in building scalable, enterprise-grade applications with a focus on performance, accessibility, and cutting-edge neo-brutalist design.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium md:col-span-1">
              With years of hands-on experience in modern web technologies like React, Node.js, and TypeScript, I transform complex business requirements into delightful, user-centric products that drive real impact and growth.
            </p>
            <div className="flex justify-start md:justify-end md:col-span-1 h-full items-end">
              <a href="#contact" className="flex items-center gap-2 text-lg font-bold border-b-4 border-[#F4F4F0] pb-1 hover:text-[#F4D03F] hover:border-[#F4D03F] transition-colors uppercase tracking-widest">
                Get in touch <ArrowRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Light Section with Grid and Stickers */}
        <div className="relative bg-[#F4F4F0] h-[600px] md:h-[800px] border-t-4 border-black overflow-hidden rounded-tr-[4rem] md:rounded-tr-[10rem]">
          <div className="absolute inset-0 bg-grid opacity-30"></div>
          
          {/* Central Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[450px] md:h-[750px] z-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Abraar Ibrahim Portrait" 
              className="w-full h-full object-cover object-top drop-shadow-2xl"
              style={{ filter: "grayscale(100%) contrast(120%)" }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Neo-Brutalist Stickers */}
          <Sticker color="#48C9B0" className="top-12 left-[5%] md:top-24 md:left-[15%]" rotate={-8} delay={0}>
            <span className="text-[10px] md:text-sm uppercase tracking-widest font-black opacity-80">Architecture</span>
            <span className="text-sm md:text-2xl uppercase tracking-wider">System Design</span>
          </Sticker>

          <Sticker color="#F4D03F" className="top-32 right-[5%] md:top-40 md:right-[15%]" rotate={12} delay={1}>
            <span className="text-[10px] md:text-sm uppercase tracking-widest font-black opacity-80">E-Comm.</span>
            <span className="text-sm md:text-2xl uppercase tracking-wider">Experiences</span>
          </Sticker>

          <Sticker color="#EB984E" className="bottom-32 left-[5%] md:bottom-48 md:left-[10%] z-20" rotate={-5} delay={2}>
            <span className="text-[10px] md:text-sm uppercase tracking-widest font-black opacity-80">Motion &</span>
            <span className="text-sm md:text-2xl uppercase tracking-wider">Interaction</span>
          </Sticker>

          <Sticker color="#F06292" className="top-60 left-[10%] md:top-80 md:left-[25%]" rotate={6} delay={0.5}>
            <span className="text-[10px] md:text-sm uppercase tracking-widest font-black opacity-80">Backend</span>
            <span className="text-sm md:text-2xl uppercase tracking-wider">Systems</span>
          </Sticker>

          <Sticker color="#81C784" className="bottom-12 right-[5%] md:bottom-24 md:right-[20%] z-20" rotate={-15} delay={1.5}>
            <span className="text-[10px] md:text-sm uppercase tracking-widest font-black opacity-80">Usability Testing</span>
            <span className="text-sm md:text-2xl uppercase tracking-wider">Performance</span>
          </Sticker>
        </div>

        {/* Marquee Section */}
        <div id="skills" className="bg-[#48C9B0] border-y-4 border-black py-6 overflow-hidden flex whitespace-nowrap relative z-20">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="flex gap-8 text-black font-display text-5xl md:text-7xl uppercase tracking-wider"
          >
            <span>React</span><span>*</span>
            <span>TypeScript</span><span>*</span>
            <span>Node.js</span><span>*</span>
            <span>Next.js</span><span>*</span>
            <span>Tailwind CSS</span><span>*</span>
            <span>GraphQL</span><span>*</span>
            <span>PostgreSQL</span><span>*</span>
            <span>React</span><span>*</span>
            <span>TypeScript</span><span>*</span>
            <span>Node.js</span><span>*</span>
            <span>Next.js</span><span>*</span>
            <span>Tailwind CSS</span><span>*</span>
            <span>GraphQL</span><span>*</span>
            <span>PostgreSQL</span><span>*</span>
          </motion.div>
        </div>

        {/* Selected Work Section */}
        <div id="work" className="bg-[#F4F4F0] p-6 md:p-20 text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tight">Selected<br/>Work</h2>
            <p className="text-lg md:text-xl font-bold max-w-md md:text-right text-gray-800">A collection of recent projects showcasing my expertise in web development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1 */}
            <a href="https://shree-polyclinic.netlify.app/#about" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
              <div className="border-4 border-black rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Shree Polyclinic" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">Shree Polyclinic</h3>
                  <p className="text-gray-800 font-bold">Healthcare • Web Design • Frontend</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center group-hover:bg-[#F4D03F] transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <ArrowRight strokeWidth={3} />
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://shree-polyclinic.netlify.app/#about" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block md:mt-20">
              <div className="border-4 border-black rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Chemical Coating Company" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">Chemical Coating</h3>
                  <p className="text-gray-800 font-bold">Corporate • Industrial • UI/UX</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center group-hover:bg-[#48C9B0] transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  <ArrowRight strokeWidth={3} />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="bg-[#111] text-[#F4F4F0] p-6 md:p-20 border-t-4 border-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div>
              <h2 className="text-5xl md:text-[8vw] leading-[0.85] font-display uppercase tracking-tight mb-8 text-[#F4D03F]">
                Let's Work<br/>Together
              </h2>
              <a href="mailto:abraarssgtoons@gmail.com" className="text-xl md:text-3xl font-bold border-b-4 border-[#F4F4F0] pb-2 hover:text-[#F4D03F] hover:border-[#F4D03F] transition-colors break-all">
                abraarssgtoons@gmail.com
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#F4F4F0] flex items-center justify-center hover:bg-[#F4F4F0] hover:text-black transition-colors shadow-[4px_4px_0px_rgba(244,244,240,0.5)]">
                <Github size={24} strokeWidth={3} />
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#F4F4F0] flex items-center justify-center hover:bg-[#48C9B0] hover:border-[#48C9B0] hover:text-black transition-colors shadow-[4px_4px_0px_rgba(244,244,240,0.5)]">
                <Linkedin size={24} strokeWidth={3} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-gray-400 font-bold text-sm md:text-base gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Abraar Ibrahim. All rights reserved.</p>
            <p>Designed & Built with passion.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

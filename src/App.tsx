import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
);

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
    <div className="min-h-screen bg-[#8c8c8c] md:p-8 font-sans relative">
      <div className="bg-noise"></div>
      <div className="max-w-[1400px] mx-auto bg-[#111] shadow-2xl overflow-hidden flex flex-col relative md:border-4 md:border-black z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center p-6 md:p-10 text-[#F4F4F0] relative z-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-[#F4F4F0] rounded-full flex items-center justify-center text-black font-bold border-2 border-black">
              AB
            </div>
            <div className="font-bold leading-tight text-sm md:text-base">
              Abraar<br/>Ibrahim
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
            WEBSITE DEVELOPER
          </h1>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium md:col-span-1">
              I'm Abraar Ibrahim, a professional website developer orchestrating digital experiences. I specialize in building scalable, enterprise-grade applications with a focus on performance, accessibility, and cutting-edge neo-brutalist design.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium md:col-span-1">
              With years of hands-on experience in modern web technologies like React, Node.js, and TypeScript, I transform complex business requirements into delightful, user-centric products that drive real impact and growth.
            </p>
            <div className="flex justify-start md:justify-end md:col-span-1 h-full items-end mt-8 md:mt-0">
              <a href="#contact" className="inline-flex items-center gap-3 text-xl font-black bg-[#F4D03F] text-black px-8 py-4 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-widest">
                Let's Talk <ArrowRight size={24} strokeWidth={4} />
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

        {/* Services Section */}
        <div id="about" className="bg-[#EB984E] p-6 md:p-20 text-black border-b-4 border-black relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col mb-12"
          >
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tight">What I Do</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Frontend", desc: "Building pixel-perfect, high-performance user interfaces with React, Next.js, and Tailwind CSS.", icon: "💻", color: "#F4F4F0" },
              { title: "Backend", desc: "Architecting robust APIs and database structures using Node.js, Express, and PostgreSQL.", icon: "⚙️", color: "#F4D03F" },
              { title: "UI/UX Design", desc: "Crafting intuitive and brutalist digital experiences that stand out and convert.", icon: "🎨", color: "#F06292" }
            ].map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                key={i}
                className="border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full"
                style={{ backgroundColor: service.color }}
              >
                <div className="text-5xl mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-4">{service.title}</h3>
                <p className="text-lg font-bold text-gray-800 mt-auto">{service.desc}</p>
              </motion.div>
            ))}
          </div>
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
            <a href="https://reliance-products.netlify.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block md:mt-20">
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
              <div className="flex flex-col gap-4 md:gap-6 items-start">
                <a href="mailto:abraarssgtoons@gmail.com" className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-bold border-b-4 border-[#F4F4F0] pb-2 hover:text-[#F4D03F] hover:border-[#F4D03F] transition-colors break-all">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 shrink-0" strokeWidth={3} />
                  abraarssgtoons@gmail.com
                </a>
                <a href="https://wa.me/916901065636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-bold border-b-4 border-[#F4F4F0] pb-2 hover:text-[#48C9B0] hover:border-[#48C9B0] transition-colors break-all">
                  <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
                  +91 6901065636
                </a>
                <a href="https://discord.com/users/abraar.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-bold border-b-4 border-[#F4F4F0] pb-2 hover:text-[#EB984E] hover:border-[#EB984E] transition-colors break-all">
                  <DiscordIcon className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
                  abraar.xyz
                </a>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#F4F4F0] flex items-center justify-center hover:bg-[#F4F4F0] hover:text-black transition-all shadow-[4px_4px_0px_rgba(244,244,240,0.5)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                <Github size={24} strokeWidth={3} />
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#F4F4F0] flex items-center justify-center hover:bg-[#48C9B0] hover:border-[#48C9B0] hover:text-black transition-all shadow-[4px_4px_0px_rgba(244,244,240,0.5)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
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

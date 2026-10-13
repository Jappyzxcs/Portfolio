import { useState } from 'react';

export default function App() {
  const [formStatus, setFormStatus] = useState('idle');

  const miniProjects = [
    { 
      title: "Crave & Cook", 
      desc: "Local-first recipe discovery app with API integration.", 
      tech: "React, Tailwind, TheMealDB API", 
      status: "completed",
      link: "https://craves-cook.vercel.app",
      image: "Crave & Cook Food App Hero.png" 
    },
    { 
      title: "Weather Dashboard", 
      desc: "Bento-grid atmospheric data tracking with auto-updates.", 
      tech: "React, Tailwind, Open-Meteo", 
      status: "completed",
      link: "https://weathery-dash.vercel.app",
      image: "Stormy Weather Over Los Baños.png"
    },
    { 
      title: "Merry Go", 
      desc: "Web & mobile POS system with inventory tracking.", 
      tech: "React, Tailwind, PHP", 
      status: "completed", 
      image: "Merry Go POS_ Simple, Fast, Reliable Retail.png"
    },
    { 
      title: "F1 Fan Hub", 
      desc: "Real-time race standings and circuit data visualization.", 
      tech: "React, Chart.js", 
      status: "wip" ,
      image: "F1 Fan Hub Championship Dashboard.png"
    },
    { 
      title: "Smart DocuParse", 
      desc: "Automated text extraction pipeline for physical documents.", 
      tech: "Tesseract OCR, React", 
      status: "wip" 
    },
  ];

  function handleContactSubmit(e) {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1200);
  }

  return (
    <div className="min-h-screen px-6 py-8 md:px-16 md:py-12 max-w-350 mx-auto selection:bg-maroon selection:text-serenade">
      
      {/* Navigation (Sticky & Fixed on Scroll) */}
      <nav className="sticky top-0 z-50 bg-serenade/80 backdrop-blur-md -mx-6 px-6 md:-mx-16 md:px-16 py-4 flex justify-between items-center mb-20 md:mb-28 border-b border-maroon/20">
        <span className="text-xl font-black tracking-tighter text-maroon">My Portfolio</span>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-maroon">
          <a href="#featured" className="hover:opacity-70 transition-opacity">Featured</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mb-40 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center text-maroon">
        <div className="lg:col-span-7 z-10">
          
          {/* Main Name Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight md:tracking-tighter mb-4">
            John Paul <br className="hidden md:block" /> Malabanan
          </h1>
          
          {/* Details under the name */}
          <div className="text-sm md:text-base font-bold tracking-widest uppercase text-maroon/60 mb-6">
            WMAD Developer • 21 Years Old
          </div>

          {/* Shortened Intro Message */}
          <p className="text-lg md:text-2xl font-medium text-maroon-muted max-w-2xl leading-relaxed mb-8">
            4th-year BSIT (Web and Mobile App Development) student at LSPU-LBC. Full-stack developer who builds web and Android apps, and who uses AI tools to build faster.
          </p>

          {/* Tech Stack Pills under the message */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-transparent">React</span>
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-transparent">JavaScript</span>
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-transparent">Firebase</span>
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-transparent">HTML/CSS</span>
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-transparent">XAMPP</span>
            <span className="px-4 py-1.5 border border-maroon/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon bg-maroon/10">VS Code</span>
          </div>

        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square md:aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-maroon/20 border border-maroon/10 group">
            <img 
              src="/SnapInsta.to_731239502_17920343043392035_8469662345576121417_n.jpg" 
              alt="John Paul Malabanan - WMAD 4th Year Student"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-maroon/10 mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>
        </div>
      </header>

      {/* Featured Case Study: CampusDrive */}
      <section id="featured" className="mb-40 pt-8">
        <div className="flex items-center gap-4 mb-10 text-maroon">
          <span className="h-px bg-maroon/30 flex-1"></span>
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Featured Work</h2>
          <span className="h-px bg-maroon/30 flex-1"></span>
        </div>

        <div className="group block relative rounded-[2.5rem] overflow-hidden bg-maroon text-serenade p-8 md:p-16 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-maroon/30">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 border border-serenade/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 text-serenade/90">
                Capstone Project
              </span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6 animate-fade-in">CampusDrive</h3>
              <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-md">
                An automated vehicle information management and anti-fraud sticker verification system. Engineered with real-time computer vision (YOLOv8) and text extraction pipelines.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs font-bold tracking-wide mb-10">
                <span className="bg-serenade text-maroon px-4 py-2 rounded-lg">React</span>
                <span className="bg-serenade text-maroon px-4 py-2 rounded-lg">YOLOv8</span>
                <span className="bg-serenade text-maroon px-4 py-2 rounded-lg">Firebase</span>
              </div>

              <a 
                href="https://campus-drive.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-serenade text-maroon px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all active:scale-95"
              >
                View Live Project
                <span className="text-lg leading-none">↗</span>
              </a>
            </div>

            <div className="relative w-full aspect-16/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/40 border border-serenade/20 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-black/50 bg-[#1A0A0A]">
              
              <div className="h-8 md:h-10 bg-black/40 backdrop-blur-md border-b border-serenade/10 flex items-center px-4 gap-2 w-full z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>

              <div className="relative flex-1 w-full overflow-hidden bg-serenade/5">
                <img 
                  src=".png" 
                  alt="CampusDrive Portal Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mini Projects Grid */}
      <section id="projects" className="mb-40 text-maroon pt-8">
        <h2 className="text-3xl font-black tracking-tight mb-10">Small Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {miniProjects.map((project, idx) => {
            const isClickable = project.status === "completed" && project.link;
            const CardWrapper = isClickable ? 'a' : 'article';
            const linkProps = isClickable ? { href: project.link, target: "_blank", rel: "noreferrer" } : {};

            return (
              <CardWrapper 
                key={idx} 
                {...linkProps}
                className={`relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 h-95 ${
                  project.status === "completed"
                  ? "border border-maroon bg-transparent hover:bg-maroon hover:text-serenade hover:-translate-y-1 hover:shadow-xl hover:shadow-maroon/10 cursor-pointer group"
                  : "border border-maroon/40 opacity-70 bg-transparent cursor-default"
                }`}
              >
                {project.status === "completed" && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,227,209,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                )}
                
                {project.image ? (
                  <div className="h-40 w-full overflow-hidden border-b border-maroon/10 group-hover:border-serenade/10 transition-colors">
                    <img 
                      src={`/${project.image}`} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-6 w-full"></div>
                )}

                <div className="relative z-10 flex flex-col flex-1 p-8 pt-6">
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{project.title}</h3>
                  <p className={`mb-6 text-sm leading-relaxed ${
                    project.status === "completed" ? "text-maroon-muted group-hover:text-serenade/90 transition-colors" : "text-maroon/60"
                  }`}>
                    {project.desc}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      project.status === "completed" ? "opacity-60 group-hover:opacity-100 group-hover:text-serenade/90" : "opacity-50"
                    }`}>
                      {project.tech}
                    </span>
                    {project.status === "wip" && (
                      <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-maroon border border-maroon/30 rounded-full px-3 py-1 bg-maroon/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-maroon animate-pulse"></span>
                        Building
                      </span>
                    )}
                    {project.status === "completed" && (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0 font-bold text-lg leading-none">
                        {project.link ? "↗" : "→"}
                      </span>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Footer & Contact Section */}
      <footer id="contact" className="border-t border-maroon/20 pt-16 pb-12 text-maroon">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4">Let's build something.</h2>
            <p className="text-lg text-maroon-muted mb-8 max-w-sm leading-relaxed">
              Currently open for full-time roles, freelance opportunities, or just a conversation about web development.
            </p>
            <a href="mailto:malabananjp9@gmail.com" className="group flex items-center gap-3 text-xl font-bold hover:opacity-70 transition-opacity mb-8">
              malabananjp9@gmail.com
              <span className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>

            {/* Social Media Icons */}
            <div className="flex gap-5 items-center text-maroon">
              <a href="https://github.com/Jappyzxcs" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-70 hover:scale-110 transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://facebook.com/japjap.malabanan" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-70 hover:scale-110 transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com/jappy.mlbnn" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-70 hover:scale-110 transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://tiktok.com/@japzxcs12" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:opacity-70 hover:scale-110 transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0012.67-1.36V7.78c1.37.93 3 1.48 4.7 1.48v-3.46a8.21 8.21 0 01-2.78-1.11z"/>
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 w-full max-w-md md:ml-auto">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Name</label>
              <input 
                id="name" 
                required
                placeholder="John Doe"
                className="w-full bg-maroon/5 rounded-t-lg border-b-2 border-maroon/20 px-4 py-3 text-maroon placeholder-maroon/30 focus:border-maroon focus:bg-maroon/10 focus:outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                placeholder="john@example.com"
                className="w-full bg-maroon/5 rounded-t-lg border-b-2 border-maroon/20 px-4 py-3 text-maroon placeholder-maroon/30 focus:border-maroon focus:bg-maroon/10 focus:outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-1.5 mb-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Message</label>
              <textarea 
                id="message" 
                required
                rows="3"
                placeholder="Tell me about your project..."
                className="w-full bg-maroon/5 rounded-t-lg border-b-2 border-maroon/20 px-4 py-3 text-maroon placeholder-maroon/30 focus:border-maroon focus:bg-maroon/10 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className="group relative overflow-hidden rounded-full bg-maroon text-serenade px-8 py-4 text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 active:scale-95 disabled:opacity-80 disabled:transform-none disabled:cursor-wait"
            >
              <span className={`block transition-transform duration-300 ${formStatus !== 'idle' ? '-translate-y-12' : 'translate-y-0'}`}>
                Send Message
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${formStatus === 'submitting' ? 'translate-y-0' : 'translate-y-12'}`}>
                <span className="h-4 w-4 rounded-full border-2 border-serenade border-t-transparent animate-spin"></span>
              </span>
              <span className={`absolute inset-0 flex items-center justify-center bg-green-700 transition-transform duration-300 ${formStatus === 'success' ? 'translate-y-0' : 'translate-y-12'}`}>
                Message Sent ✓
              </span>
            </button>
          </form>
        </div>

        <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase opacity-60">
          <p>© 2026 John Paul Malabanan</p>
          <p>"TO GOD BE THE GLORY"</p>
        </div>
      </footer>
    </div>
  );
}
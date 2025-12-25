import React, { useState } from 'react';
import Background from './components/Background';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import PublicationItem from './components/PublicationItem';
import { PROFILE, NEWS, PUBLICATIONS, EXPERIENCE, HONORS } from './constants';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'highlight'>('all');

  const filteredPublications = activeTab === 'all' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.highlight);

  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-primary-200 selection:text-primary-900">
      <Background />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Sidebar (Sticky on desktop) */}
          <Sidebar />

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12">
            
            {/* About Section */}
            <Section title="About Me" delay={0.2}>
              <div className="prose prose-stone prose-lg leading-relaxed text-stone-600 font-light text-justify">
                <p>{PROFILE.bio}</p>
              </div>
              
              <div className="mt-8">
                 <h3 className="text-sm uppercase tracking-widest text-stone-400 font-bold mb-4 flex items-center gap-2">
                   <Sparkles size={14} className="text-champagne-400" />
                   Research Interests
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {PROFILE.researchInterests.map((interest, idx) => (
                     <span 
                        key={idx}
                        className="px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-stone-600 text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300 cursor-default"
                     >
                       {interest}
                     </span>
                   ))}
                 </div>
              </div>
            </Section>

            {/* News Section */}
            <Section title="News" delay={0.3}>
              <div className="space-y-6 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                {NEWS.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex gap-4 items-baseline border-l-2 border-stone-200 pl-4 py-1 hover:border-primary-300 transition-colors"
                  >
                    <span className="text-sm font-bold text-stone-400 shrink-0 font-display text-lg">{item.date}</span>
                    <div>
                      <span className="text-stone-700 font-medium">{item.title}</span>
                      {item.description && <span className="text-stone-500 text-sm ml-2 font-light">- {item.description}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Publications Section */}
            <Section title="Publications" delay={0.4}>
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                    activeTab === 'all' 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200' 
                    : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  All Publications
                </button>
                <button 
                  onClick={() => setActiveTab('highlight')}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                    activeTab === 'highlight' 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200' 
                    : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  Selected
                </button>
              </div>

              <div className="space-y-4">
                {filteredPublications.map((pub) => (
                  <PublicationItem key={pub.id} pub={pub} />
                ))}
              </div>
            </Section>

            {/* Experience & Education or Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Section title="Experience" className="md:mb-0" delay={0.5}>
                    <div className="space-y-6">
                        {EXPERIENCE.map((exp, idx) => (
                            <div key={idx} className="group">
                                <h4 className="font-bold text-stone-800 group-hover:text-primary-600 transition-colors">{exp.role}</h4>
                                <div className="flex justify-between items-center text-sm text-stone-500 mt-1">
                                    <span>{exp.company}</span>
                                    <span className="font-display italic text-base">{exp.period}</span>
                                </div>
                                {exp.description && <p className="text-sm text-stone-500 mt-1 font-light">{exp.description}</p>}
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Honors & Awards" className="md:mb-0" delay={0.6}>
                    <ul className="space-y-4">
                        {HONORS.map((honor, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm leading-relaxed group">
                                <Award size={16} className="text-champagne-400 shrink-0 mt-0.5 group-hover:text-champagne-400 transition-colors" />
                                <span>{honor}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>

            {/* Footer */}
            <footer className="pt-12 pb-8 text-center border-t border-primary-100/50">
              <p className="text-stone-400 text-sm font-light">
                © {new Date().getFullYear()} {PROFILE.name}. Designed with <span className="text-primary-300">❤</span>.
              </p>
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
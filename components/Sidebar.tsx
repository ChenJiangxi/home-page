import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, GraduationCap, Twitter, User } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-4 xl:col-span-3 space-y-6"
    >
      <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 sticky top-8 overflow-hidden relative group">
        
        {/* Decorative ring behind image - changed to primary/champagne */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-100/50 to-transparent opacity-50 pointer-events-none" />

        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary-200 rounded-full blur-md opacity-40 transform translate-y-2 group-hover:translate-y-3 transition-transform duration-500"></div>
            
            {imgError ? (
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-md relative z-10 bg-gradient-to-br from-primary-100 to-champagne-100 flex items-center justify-center text-primary-400">
                <span className="text-4xl font-serif font-bold tracking-widest">
                  {PROFILE.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            ) : (
              <img 
                src={PROFILE.avatarUrl} 
                alt={PROFILE.name} 
                onError={() => setImgError(true)}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105 bg-stone-100"
              />
            )}
          </div>

          <h1 className="text-3xl font-serif font-semibold text-stone-800 tracking-wide">
            {PROFILE.name}
          </h1>
          {PROFILE.chineseName && (
            <p className="text-xl font-display text-primary-500 mt-1">{PROFILE.chineseName}</p>
          )}
          
          <div className="mt-4 space-y-2 text-stone-600 font-light">
            <p className="font-medium text-stone-700">{PROFILE.title}</p>
            <p className="text-sm px-4 leading-relaxed">{PROFILE.affiliation}</p>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
             {PROFILE.socials.map((link) => {
               let Icon = GraduationCap;
               if (link.label.toLowerCase().includes('github')) Icon = Github;
               if (link.label.toLowerCase().includes('twitter')) Icon = Twitter;
               if (link.label.toLowerCase().includes('linkedin')) Icon = Linkedin;
               if (link.label.toLowerCase().includes('scholar')) Icon = GraduationCap;

               return (
                 <a 
                   key={link.label}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-2.5 bg-white rounded-full text-stone-500 hover:text-primary-600 hover:bg-primary-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-stone-100"
                   title={link.label}
                 >
                   <Icon size={20} strokeWidth={1.5} />
                 </a>
               );
             })}
             <a 
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 bg-white rounded-full text-stone-500 hover:text-primary-600 hover:bg-primary-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-stone-100"
                title="Email"
             >
               <Mail size={20} strokeWidth={1.5} />
             </a>
          </div>
          
          <div className="mt-8 w-full pt-8 border-t border-primary-100/50 flex flex-col items-start space-y-3 pl-2">
            <div className="flex items-center text-sm text-stone-600 group/item">
               <Mail size={16} className="mr-3 text-primary-300 group-hover/item:text-primary-400 transition-colors" />
               <span className="truncate">{PROFILE.email}</span>
            </div>
            <div className="flex items-center text-sm text-stone-600 group/item">
               <MapPin size={16} className="mr-3 text-primary-300 group-hover/item:text-primary-400 transition-colors" />
               <span>Shanghai, China</span>
            </div>
          </div>

        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
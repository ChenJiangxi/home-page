import React from 'react';
import { Publication } from '../types';
import { ExternalLink, FileText, Play } from 'lucide-react';

interface PublicationItemProps {
  pub: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ pub }) => {
  return (
    <div className="group relative flex flex-col gap-3 p-6 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/70 hover:shadow-sm transition-all duration-300">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-grow">
           <h3 className="text-lg font-bold text-stone-800 leading-tight group-hover:text-primary-600 transition-colors font-serif">
            {pub.title}
          </h3>
          <p className="text-stone-600 text-sm mt-1.5 font-light">
            {pub.authors.map((author, i) => (
              <span key={i} className={author.includes("Jiangxi Chen") || author.includes("陈姜希") ? "font-bold text-stone-800" : ""}>
                {author}{i < pub.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="text-stone-500 text-sm mt-1 italic font-display text-lg">
            {pub.venue} {pub.year}
          </p>
           {pub.abstract && (
            <p className="text-stone-500 text-sm mt-3 leading-relaxed opacity-80">
              {pub.abstract}
            </p>
           )}
        </div>
        
        {/* Highlight Badge */}
        {pub.highlight && (
           <div className="shrink-0 px-2 py-1 bg-champagne-400/20 text-champagne-400 text-[10px] uppercase tracking-wider font-bold rounded-full border border-champagne-400/30">
             Highlight
           </div>
        )}
      </div>

      {/* Buttons */}
      {pub.links && pub.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-2">
          {pub.links.map((link) => (
            <a 
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-stone-600 bg-white border border-stone-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
            >
              {link.label === "PDF" || link.label === "Paper" ? <FileText size={12} /> : 
               link.label === "Video" ? <Play size={12} /> : <ExternalLink size={12} />}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicationItem;
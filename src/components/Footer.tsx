import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Car, ArrowUp, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, GMAIL_COMPOSE_URL } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Lesson Rates', href: '#pricing' },
    { label: 'Areas Covered', href: '#areas' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B7A3E] to-[#D32F2F] p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
                  <Car className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white leading-tight">
                  PRESS ON <span className="text-[#D32F2F]">DRIVING</span> <span className="text-[#1B7A3E]">ACADEMY</span>
                </span>
                <span className="text-[11px] font-bold tracking-wide text-slate-400">
                  Keep Calm and Drive Safe with Us
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional driving tuition in Southern Suburbs & Southern Peninsula. Committed to patient, structured, and calm driver education with free door-to-door collection.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Press On Driving Academy on Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-[#1B7A3E] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Press On Driving Academy on Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-[#D32F2F] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#1B7A3E] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Lesson Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Lesson Packages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#pricing" className="hover:text-[#1B7A3E] transition-colors">
                  Code 8 Driving Lessons
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1B7A3E] transition-colors">
                  5, 10 & 20 Lesson Packages
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1B7A3E] transition-colors">
                  Advance Driving Course
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1B7A3E] transition-colors">
                  Traffic Dept Test Car Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1B7A3E] shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors truncate group"
                title={`Open in Gmail (${BRAND_INFO.email})`}
              >
                <Mail className="w-4 h-4 text-[#1B7A3E] shrink-0 group-hover:text-emerald-400 transition-colors" />
                <span className="truncate">{BRAND_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1B7A3E] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hoursWeekdays}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B7A3E] shrink-0 mt-0.5" />
                <span>Southern Suburbs & Southern Peninsula, Cape Town</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PO Driving Academy. All Rights Reserved. Keep Calm and Drive Safe with Us.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-900 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Menu, X, Car, Calendar } from 'lucide-react';
import { BRAND_INFO, GMAIL_COMPOSE_URL } from '../data/content';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    BRAND_INFO.whatsappDefaultMsg
  )}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Lesson Rates', href: '#pricing' },
    { label: 'Areas Covered', href: '#areas' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
      
      {/* 1. Top Info Contact Bar (DMS style) */}
      <div className="bg-[#1A2E20] text-gray-200 text-xs py-2 px-4 sm:px-6 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Phone, Email & Hours */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{BRAND_INFO.phone}</span>
            </a>

            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              title={`Open in Gmail (${BRAND_INFO.email})`}
            >
              <Mail className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{BRAND_INFO.email}</span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BRAND_INFO.hoursWeekdays}</span>
            </div>
          </div>

          {/* Right: Quick Action & Slogan */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">
              {BRAND_INFO.tagline}
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo - clean single-line title */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1B7A3E] to-[#D32F2F] p-0.5 shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
                <Car className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                PRESS ON <span className="text-[#D32F2F]">DRIVING</span> <span className="text-[#1B7A3E]">ACADEMY</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-500 whitespace-nowrap">
                Keep Calm and Drive Safe with Us
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - hidden on mobile & tablet, visible on lg (1024px+) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1B7A3E] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D32F2F] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean Book Lesson Button + Menu toggle for mobile/tablet */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBookClick}
              id="header-book-btn"
              className="bg-[#D32F2F] hover:bg-[#b82525] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-xs hover:shadow transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Lesson</span>
            </button>

            {/* Mobile & Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-md">
          {/* Navigation Links (2 columns on tablet for a balanced look) */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#1B7A3E] hover:bg-emerald-50/70 rounded-lg transition-colors flex items-center justify-between border border-transparent hover:border-emerald-100"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Quick Action Buttons (side-by-side on tablet) */}
          <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex-1 bg-[#D32F2F] hover:bg-[#b82525] text-white text-center text-xs sm:text-sm font-bold uppercase tracking-wider py-3 rounded-lg shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Driving Lesson</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-center text-xs sm:text-sm font-bold py-3 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-center text-xs sm:text-sm font-bold py-3 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
};

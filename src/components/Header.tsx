import React, { useState, useRef } from 'react';
import { Phone, Mail, Clock, MessageCircle, Menu, X, Car, Calendar, ChevronDown, Star, ExternalLink, Award, MessageSquare } from 'lucide-react';
import { BRAND_INFO, GMAIL_COMPOSE_URL, GOOGLE_REVIEWS_URL } from '../data/content';

interface HeaderProps {
  onBookClick: () => void;
}

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialsDropdownOpen, setTestimonialsDropdownOpen] = useState(false);
  const [mobileTestimonialsOpen, setMobileTestimonialsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setTestimonialsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setTestimonialsDropdownOpen(false);
    }, 150);
  };

  const handleSelectTab = (tab: 'photos' | 'reviews') => {
    setTestimonialsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('switch-testimonials-tab', { detail: tab }));
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    BRAND_INFO.whatsappDefaultMsg
  )}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Lesson Rates', href: '#pricing' },
    { label: 'Areas Covered', href: '#areas' },
    { label: 'Testimonials', href: '#testimonials', isDropdown: true },
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
          
          {/* Brand Logo */}
          <a href="#home" id="brand-logo-link" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Press On Driving Academy Logo"
              className="h-10 sm:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
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
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setTestimonialsDropdownOpen((prev) => !prev)}
                      className="text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1B7A3E] transition-colors py-1 flex items-center gap-1 cursor-pointer whitespace-nowrap group"
                      aria-haspopup="true"
                      aria-expanded={testimonialsDropdownOpen}
                      id="testimonials-nav-dropdown-btn"
                    >
                      <span className="group-hover:text-[#1B7A3E]">{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          testimonialsDropdownOpen ? 'rotate-180 text-[#1B7A3E]' : 'text-slate-400 group-hover:text-[#1B7A3E]'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {testimonialsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 overflow-hidden">
                          {/* Google Verified Review Badge Header */}
                          <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setTestimonialsDropdownOpen(false)}
                            className="block px-3 py-2 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 rounded-xl mb-2 transition-colors group"
                            id="header-google-reviews-banner"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <GoogleIcon className="w-4 h-4 shrink-0" />
                                <span className="text-xs font-extrabold text-slate-900">Google Reviews</span>
                              </div>
                              <div className="flex items-center gap-1 bg-amber-100/90 text-amber-900 px-2 py-0.5 rounded-md text-[11px] font-bold">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span>5.0 Rating</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                              <span>Verified Cape Town Student Feedback</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </a>

                          {/* Sub-item 1: Student Pass Photos */}
                          <a
                            href="#testimonials"
                            onClick={() => handleSelectTab('photos')}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors group"
                            id="header-dropdown-photos"
                          >
                            <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-[#1B7A3E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              <Award className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1B7A3E] transition-colors">
                                Student Pass Gallery
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                Browse 20+ photos of students celebrating test passes
                              </p>
                            </div>
                          </a>

                          {/* Sub-item 2: Read Written Google Reviews On-Site */}
                          <a
                            href="#testimonials"
                            onClick={() => handleSelectTab('reviews')}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-50/60 transition-colors group"
                            id="header-dropdown-written-reviews"
                          >
                            <div className="w-9 h-9 rounded-lg bg-red-100/80 text-[#D32F2F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                                Written Student Reviews
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                Read in-depth feedback from first-time license achievers
                              </p>
                            </div>
                          </a>

                          {/* Sub-item 3: Direct Link to Google Search Reviews */}
                          <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setTestimonialsDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group border-t border-slate-100 mt-1 pt-2.5"
                            id="header-dropdown-view-google"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              <ExternalLink className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  View on Google
                                </span>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                                  Search
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                Open official Google business listing & reviews
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1B7A3E] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D32F2F] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap"
                >
                  {link.label}
                </a>
              );
            })}
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
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="sm:col-span-2 rounded-xl border border-slate-200/90 overflow-hidden bg-slate-50/40"
                  >
                    <button
                      onClick={() => setMobileTestimonialsOpen((prev) => !prev)}
                      className="w-full px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#1B7A3E] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.label}</span>
                        <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> 5.0 Google
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                          mobileTestimonialsOpen ? 'rotate-180 text-[#1B7A3E]' : ''
                        }`}
                      />
                    </button>

                    {mobileTestimonialsOpen && (
                      <div className="bg-white px-3 py-2.5 space-y-1.5 border-t border-slate-200/70">
                        <a
                          href="#testimonials"
                          onClick={() => handleSelectTab('photos')}
                          className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#1B7A3E] hover:bg-emerald-50 transition-colors"
                        >
                          <Award className="w-4 h-4 text-[#1B7A3E] shrink-0" />
                          <span>Student Pass Gallery (20 Photos)</span>
                        </a>

                        <a
                          href="#testimonials"
                          onClick={() => handleSelectTab('reviews')}
                          className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#D32F2F] hover:bg-red-50 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4 text-[#D32F2F] shrink-0" />
                          <span>Read Written Student Reviews</span>
                        </a>

                        <a
                          href={GOOGLE_REVIEWS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border-t border-slate-100 mt-1 pt-2"
                        >
                          <div className="flex items-center gap-2.5">
                            <GoogleIcon className="w-4 h-4 shrink-0" />
                            <span>View All Reviews on Google</span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#1B7A3E] hover:bg-emerald-50/70 rounded-lg transition-colors flex items-center justify-between border border-transparent hover:border-emerald-100"
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
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

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, UserCheck, Car, MapPin, ShieldCheck, Award, Calendar, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
  onPricingClick: () => void;
}

interface SlideItem {
  id: string;
  badge?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  fallback?: string;
  imageAlt: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    badge: 'KEEP CALM & DRIVE SAFE WITH US!',
    titleLine1: 'Helping You To Make',
    titleLine2: 'Yourself An Expert Driver',
    description:
      'Professional driving tuition in Cape Town with certified, patient instructors. Code 8 light vehicle lessons, K53 yard & road test preparation, and advanced skill development.',
    image: '/polo.png',
    fallback: '/POLO.png',
    imageAlt: 'Press On Driving Academy VW Polo official training car',
  },
  {
    id: 'slide-2',
    badge: 'BEGINNER & ADVANCED DRIVER TUITION',
    titleLine1: 'Learn Safe. Drive Confident.',
    titleLine2: 'Quality Lessons In Cape Town',
    description:
      'Overcome driving anxiety with stress-free, step-by-step guidance. Tailored for complete beginners, nervous learners, and licensed drivers seeking advance skills.',
    image: '/cape.png',
    fallback: '/cape_driving_academy.jpg',
    imageAlt: 'Press On Driving Academy branded training car at Cape Town Table Mountain',
  },
  {
    id: 'slide-3',
    badge: 'K53 YARD & ROAD TEST SUCCESS',
    titleLine1: 'Master Every K53 Manoeuvre',
    titleLine2: 'Pass Your Test With Total Confidence',
    description:
      'Master parallel parking, alley docking, 3-point turns, and incline starts with simple reference points, mock test assessments, and test day car hire.',
    image: '/polo2.png',
    fallback: '/polo.png',
    imageAlt: 'Press On Driving Academy dual-control Polo training vehicle',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPricingClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative bg-white">
      
      {/* 1. Main Hero Image Banner (Drivega Style) */}
      <div
        className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides with smooth cross-fade */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              onError={(e) => {
                if (slide.fallback && e.currentTarget.src !== window.location.origin + slide.fallback) {
                  e.currentTarget.src = slide.fallback;
                }
              }}
              className="w-full h-full object-cover object-center filter brightness-[0.88]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Dark Vignette & Gradient Overlay for maximum legibility */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-slate-950/65 to-black/75" />

        {/* Left Floating Arrow (Drivega Boxed Style) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#1B7A3E] text-slate-900 hover:text-white rounded-md shadow-2xl flex items-center justify-center transition-all cursor-pointer group hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Right Floating Arrow (Drivega Boxed Style) */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-[#1B7A3E] text-slate-900 hover:text-white rounded-md shadow-2xl flex items-center justify-center transition-all cursor-pointer group hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Centered Slide Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center py-16 sm:py-20 flex flex-col items-center">
          
          {/* Slogan Pill / Badge */}
          {activeSlide.badge && (
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5 shadow-sm border border-red-400/40">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>{activeSlide.badge}</span>
            </div>
          )}

          {/* Centered Bold Display Title (Drivega exact typography) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-2 drop-shadow-sm">
            <span>{activeSlide.titleLine1}</span>
            <br />
            <span className="text-white">{activeSlide.titleLine2}</span>
          </h1>

          {/* Centered Horizontal Accent Divider with Balanced Red & Green Lines */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <div className="w-8 h-[2px] bg-white/40" />
            <div className="w-8 h-[3px] bg-[#D32F2F] rounded-full" />
            <div className="w-8 h-[3px] bg-[#1B7A3E] rounded-full" />
            <div className="w-8 h-[2px] bg-white/40" />
          </div>

          {/* Centered Subtitle / Descriptive Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mb-8 drop-shadow-xs">
            {activeSlide.description}
          </p>

          {/* Centered CTA Buttons (Solid Red 'Get Enrolled' + Green-accented 'Learn More') */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onBookClick}
              id="hero-get-enrolled-btn"
              className="bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-md shadow-xl hover:shadow-red-900/50 transition-all active:scale-95 flex items-center gap-2 cursor-pointer group"
            >
              <span>Get Enrolled</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onPricingClick}
              id="hero-learn-more-btn"
              className="bg-transparent hover:bg-white/15 text-white border-2 border-white/80 hover:border-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-md backdrop-blur-xs transition-all active:scale-95 flex items-center gap-2 cursor-pointer group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slide Indicator Dots (Centered) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-7 bg-[#D32F2F]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* 2. Bottom 3 Feature Banners (Drivega bottom multi-color cards strip with balanced green & red) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
          
          {/* Card 1: Solid Emerald Green (#1B7A3E) */}
          <div className="bg-[#1B7A3E] text-white p-6 sm:p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block mb-0.5">
                Qualified Instruction
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Patient & Certified Instructors
              </h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
                Friendly, qualified coaches offering calm, stress-free guidance tailored to your pace.
              </p>
            </div>
          </div>

          {/* Card 2: Deep Crimson Red (#C62828) */}
          <div className="bg-[#C62828] text-white p-6 sm:p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-200 block mb-0.5">
                We Have Both!
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Manual & Automatic Lessons
              </h4>
              <p className="text-xs text-red-100/90 leading-relaxed font-normal">
                Learn in manual or automatic transmission. Code 8 light vehicles & advance skill development.
              </p>
            </div>
          </div>

          {/* Card 3: Pure White */}
          <div className="bg-white text-slate-900 p-6 sm:p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B7A3E] border border-emerald-100 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B7A3E] block mb-0.5">
                Free Collection
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Door-to-Door Pick-Up & Drop-Off
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Complimentary collection from home, school, campus or work across Southern Suburbs & Peninsula.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { SUBURB_AREAS, BRAND_INFO } from '../data/content';

interface AreasSectionProps {
  onBookClick: (suburb?: string) => void;
}

export const AreasSection: React.FC<AreasSectionProps> = ({ onBookClick }) => {
  const southernSuburbs = SUBURB_AREAS.find((s) => s.region === 'Southern Suburbs')?.suburbs || [];
  const southernPeninsula = SUBURB_AREAS.find((s) => s.region === 'Southern Peninsula')?.suburbs || [];

  const [selectedSuburbsArea, setSelectedSuburbsArea] = useState('');
  const [selectedPeninsulaArea, setSelectedPeninsulaArea] = useState('');

  return (
    <section id="areas" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Service Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas We Cover (Pick-Up & Drop-Off)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We provide complimentary door-to-door collection from your home, school, campus, or workplace. Choose your area below:
          </p>
        </div>

        {/* 2 Clean Dropdown Menus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          
          {/* 1. Southern Suburbs Dropdown Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1B7A3E] flex items-center justify-center border border-emerald-100 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Southern Suburbs</h3>
                <p className="text-xs text-slate-500">Pick your suburb from the list</p>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="space-y-3">
              <label htmlFor="southern-suburbs-select" className="sr-only">Select Southern Suburbs Area</label>
              <select
                id="southern-suburbs-select"
                value={selectedSuburbsArea}
                onChange={(e) => setSelectedSuburbsArea(e.target.value)}
                className="w-full text-sm font-medium px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] focus:ring-2 focus:ring-emerald-100 bg-slate-50/50 hover:bg-white transition-colors cursor-pointer text-slate-800"
              >
                <option value="">-- Choose a Southern Suburbs Area --</option>
                {southernSuburbs.map((suburb) => (
                  <option key={suburb} value={suburb}>
                    {suburb}
                  </option>
                ))}
              </select>

              {/* Status / Quick Action when selected */}
              {selectedSuburbsArea ? (
                <div className="bg-emerald-50/80 rounded-xl p-3.5 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-[#1B7A3E] shrink-0" />
                    <span>Free pick-up in <strong>{selectedSuburbsArea}</strong></span>
                  </div>
                  <button
                    onClick={() => onBookClick(selectedSuburbsArea)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#1B7A3E] hover:bg-[#145e30] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    <span>Book Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">
                  Available in Claremont, Rondebosch, Wynberg, Newlands, Kenilworth, Constantia & more.
                </p>
              )}
            </div>
          </div>

          {/* 2. Southern Peninsula Dropdown Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center border border-red-100 shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Southern Peninsula</h3>
                <p className="text-xs text-slate-500">Pick your suburb from the list</p>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="space-y-3">
              <label htmlFor="southern-peninsula-select" className="sr-only">Select Southern Peninsula Area</label>
              <select
                id="southern-peninsula-select"
                value={selectedPeninsulaArea}
                onChange={(e) => setSelectedPeninsulaArea(e.target.value)}
                className="w-full text-sm font-medium px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 bg-slate-50/50 hover:bg-white transition-colors cursor-pointer text-slate-800"
              >
                <option value="">-- Choose a Southern Peninsula Area --</option>
                {southernPeninsula.map((suburb) => (
                  <option key={suburb} value={suburb}>
                    {suburb}
                  </option>
                ))}
              </select>

              {/* Status / Quick Action when selected */}
              {selectedPeninsulaArea ? (
                <div className="bg-red-50/80 rounded-xl p-3.5 border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-900">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span>Free pick-up in <strong>{selectedPeninsulaArea}</strong></span>
                  </div>
                  <button
                    onClick={() => onBookClick(selectedPeninsulaArea)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    <span>Book Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">
                  Available in Fish Hoek, Muizenberg, Simon's Town, Kalk Bay, Noordhoek, Kommetjie & more.
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Simple Outside Areas Callout */}
        <div className="text-center text-xs text-slate-500">
          <span>Located nearby but outside these areas? </span>
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="font-bold text-slate-800 hover:text-[#D32F2F] underline transition-colors"
          >
            Call {BRAND_INFO.phone} to check instructor availability
          </a>
        </div>

      </div>
    </section>
  );
};

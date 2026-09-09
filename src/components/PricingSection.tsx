import React from 'react';
import { Check, Star, Car, Compass, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PACKAGES, RatePackage, BRAND_INFO } from '../data/content';

interface PricingSectionProps {
  onSelectPackage: (pkg: RatePackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  // Extract Code 8 packages
  const singleLesson = PRICING_PACKAGES.find((p) => p.id === 'rate-single' || p.id === 'rate-1hr')!;
  const fiveLessons = PRICING_PACKAGES.find((p) => p.id === 'rate-5' || p.id === 'rate-5hr')!;
  const tenLessons = PRICING_PACKAGES.find((p) => p.id === 'rate-10' || p.id === 'rate-10hr')!;
  const twentyLessons = PRICING_PACKAGES.find((p) => p.id === 'rate-20' || p.id === 'rate-20hr')!;
  
  // Advance driving packages (to combine in one block)
  const advOneHour = PRICING_PACKAGES.find((p) => p.id === 'rate-adv-1')!;
  const advTwentyFive = PRICING_PACKAGES.find((p) => p.id === 'rate-adv-25')!;
  
  // Test car hire
  const testCarHire = PRICING_PACKAGES.find((p) => p.id === 'rate-hire')!;

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B7A3E] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
            <span>Official Price List</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Driving Lesson Rates & Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Affordable driving lessons with certified, patient instructors. Door-to-door pick-up and drop-off included with every package.
          </p>
        </div>

        {/* Quick Features Strip (Balanced Red & Green) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1B7A3E]" />
            <span>Manual & Automatic — <em>We Have Both!</em></span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]" />
            <span>Free Door-to-Door Pick-Up & Drop-Off</span>
          </div>
        </div>

        {/* 1. Code 8 Packages Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B7A3E] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Code 8 (Light Vehicle)
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[singleLesson, fiveLessons, tenLessons, twentyLessons].filter(Boolean).map((pkg) => {
              const isPopular = pkg.id === 'rate-10' || pkg.id === 'rate-10hr';
              const isBestValue = pkg.id === 'rate-20' || pkg.id === 'rate-20hr';

              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-2xl p-6 border flex flex-col justify-between transition-all duration-200 ${
                    isPopular
                      ? 'border-[#1B7A3E] shadow-lg ring-2 ring-emerald-500/20 relative'
                      : isBestValue
                      ? 'border-slate-300 shadow-sm relative'
                      : 'border-slate-200 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B7A3E] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  {isBestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      Best Value Course
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mb-4">{pkg.duration}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                      {pkg.savings && (
                        <span className="block text-[11px] font-bold text-[#1B7A3E] mt-0.5">
                          {pkg.savings}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-[#1B7A3E] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wide uppercase transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isPopular
                        ? 'bg-[#1B7A3E] hover:bg-[#145e30] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-[#1B7A3E] hover:text-white text-slate-800'
                    }`}
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. COMBINED ADVANCE DRIVING BLOCK & TEST DAY CAR HIRE (Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* COMBINED ADVANCE DRIVING BLOCK (Spans 2 columns, Distinct Red Accent) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D32F2F] shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 bg-[#D32F2F] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Advance Driving</span>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Advance Driving (Skill Development & Full Course)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    For licensed drivers and advanced learners seeking defensive driving techniques, hazard control, and road safety.
                  </p>
                </div>
                <span className="inline-block bg-red-50 text-[#D32F2F] border border-red-200 text-xs font-bold px-3 py-1 rounded-lg self-start whitespace-nowrap">
                  Manual & Automatic
                </span>
              </div>

              {/* The Two Options inside this one block: Skill Development vs Full Advanced Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6">
                
                {/* Option 1: 1 Hour (Training) */}
                <div className="bg-red-50/50 rounded-xl p-5 border border-red-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#D32F2F] bg-white px-2 py-0.5 rounded border border-red-200">
                        Skill Development
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      1 Hour (Training)
                    </h4>
                    <p className="text-xs text-slate-600 mb-3">
                      Targeted session for defensive driving instincts, hazard awareness & steering control.
                    </p>
                    <div className="text-2xl font-black text-[#D32F2F] mb-4">
                      R350
                    </div>
                  </div>

                  <button
                    onClick={() => advOneHour && onSelectPackage(advOneHour)}
                    className="w-full bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs font-bold uppercase py-2.5 px-3 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Select 1 Hr (R350)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Option 2: 25 Lessons (Full Training) */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-5 border-2 border-red-300 flex flex-col justify-between relative shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-white bg-[#D32F2F] px-2 py-0.5 rounded">
                        Full Course
                      </span>
                      <span className="text-[10px] font-bold text-red-700">Best Advance Value</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      25 Lessons (Full Training)
                    </h4>
                    <p className="text-xs text-slate-600 mb-3">
                      Complete comprehensive advanced driving course for mastery of all road conditions.
                    </p>
                    <div className="text-2xl font-black text-slate-900 mb-4">
                      R6,000
                    </div>
                  </div>

                  <button
                    onClick={() => advTwentyFive && onSelectPackage(advTwentyFive)}
                    className="w-full bg-slate-900 hover:bg-[#D32F2F] text-white text-xs font-bold uppercase py-2.5 px-3 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Select Full Course (R6,000)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Advance features summary */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#D32F2F]" /> Hazard perception & avoidance
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#D32F2F]" /> Highway & night driving skills
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#D32F2F]" /> Free door-to-door collection
                </span>
              </div>
            </div>
          </div>

          {/* TEST CAR HIRE CARD */}
          {testCarHire && (
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md mb-4">
                  <Car className="w-3.5 h-3.5 text-slate-700" />
                  <span>Traffic Department Test Day</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{testCarHire.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{testCarHire.duration}</p>

                <div className="mb-5">
                  <span className="text-3xl font-black text-slate-900">{testCarHire.price}</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">
                    Vehicle hire + 1hr warm-up lesson
                  </span>
                </div>

                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {testCarHire.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#1B7A3E] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPackage(testCarHire)}
                className="w-full bg-slate-100 hover:bg-[#1B7A3E] hover:text-white text-slate-800 text-xs font-bold tracking-wide uppercase py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Hire Test Car</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

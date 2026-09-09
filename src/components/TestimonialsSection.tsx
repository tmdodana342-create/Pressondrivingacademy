import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { STUDENT_PHOTOS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  // Show 4 photos at a time from the 10 student photos
  const [startIndex, setStartIndex] = useState(0);
  const total = STUDENT_PHOTOS.length; // 10
  const visibleCount = 4;
  const maxStart = total - visibleCount; // 10 - 4 = 6

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxStart ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxStart : prev - 1));
  };

  // Get the 4 currently visible photos
  const visiblePhotos = STUDENT_PHOTOS.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Header: No clutter, clear and direct */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3 py-0.5 rounded-full border border-red-100 mb-2">
              <span>Our Students</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Successful Students
            </h2>
          </div>

          {/* Navigation Controls: Button to the right to see more */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <span className="text-xs font-bold text-slate-400 mr-1">
              {startIndex + 1}–{startIndex + visibleCount} of {total}
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous photos"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="View more photos"
              id="testimonials-view-more-btn"
              className="px-4 h-10 rounded-full bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer active:scale-95"
            >
              <span>View More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The 4 Student Shoulder Photos Grid - Pure photos, no names, no text */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {visiblePhotos.map((student, idx) => (
              <div
                key={student.id}
                className="group relative aspect-4/5 sm:aspect-3/4 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={student.url}
                  alt={student.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Floating Right Arrow Button on the right edge */}
          <button
            onClick={handleNext}
            aria-label="View more student photos"
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-slate-900 hover:text-white hover:bg-[#D32F2F] shadow-lg border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Subtle Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {Array.from({ length: maxStart + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === startIndex ? 'w-6 bg-[#D32F2F]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

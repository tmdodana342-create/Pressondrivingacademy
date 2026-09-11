import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Award,
  MessageSquare,
  CheckCircle2,
  Quote,
  Edit3
} from 'lucide-react';
import { STUDENT_PHOTOS, GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from '../data/content';

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
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

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'reviews'>('photos');

  // Show 4 photos at a time from the student photos
  const [startIndex, setStartIndex] = useState(0);
  const total = STUDENT_PHOTOS.length;
  const visibleCount = 4;
  const pageCount = Math.ceil(total / visibleCount);
  const currentPage = Math.floor(startIndex / visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= total ? 0 : prev + visibleCount));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? (pageCount - 1) * visibleCount : prev - visibleCount));
  };

  // Listen to custom switch-testimonials-tab event from Header dropdown
  useEffect(() => {
    const handleTabSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<'photos' | 'reviews'>;
      if (customEvent.detail === 'photos' || customEvent.detail === 'reviews') {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener('switch-testimonials-tab', handleTabSwitch);
    return () => window.removeEventListener('switch-testimonials-tab', handleTabSwitch);
  }, []);

  // Get the 4 currently visible photos
  const visiblePhotos = STUDENT_PHOTOS.slice(startIndex, startIndex + visibleCount);
  const endNum = Math.min(startIndex + visibleCount, total);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Google Reviews Rating Banner */}
        <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-950 rounded-2xl p-4 sm:p-6 mb-10 text-white shadow-md border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-xs shrink-0">
              <GoogleIcon className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl font-extrabold text-white tracking-tight">5.0 Star Rated</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Official Google Reviews for <span className="font-semibold text-white">Press On Driving Academy</span> • Cape Town
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs flex items-center gap-2 group whitespace-nowrap"
              id="google-reviews-view-all-btn"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
            </a>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs flex items-center gap-2 whitespace-nowrap"
              id="google-reviews-write-btn"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </a>
          </div>
        </div>
        
        {/* Section Header with Tabs & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3 py-0.5 rounded-full border border-red-100 mb-2">
              <span>Student Success</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Testimonials & Reviews
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Celebrating our students passing their driver's licenses across Cape Town testing stations.
            </p>
          </div>

          {/* Tab Switcher: Photos vs Written Google Reviews */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'photos'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                id="tab-student-photos"
              >
                <Award className={`w-3.5 h-3.5 ${activeTab === 'photos' ? 'text-[#1B7A3E]' : 'text-slate-400'}`} />
                <span>Pass Photos ({total})</span>
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                id="tab-google-reviews"
              >
                <Star className={`w-3.5 h-3.5 ${activeTab === 'reviews' ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
                <span>Google Reviews ({GOOGLE_REVIEWS.length})</span>
              </button>
            </div>

            {/* Photo Navigation Controls (shown only when in photos tab) */}
            {activeTab === 'photos' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-1 hidden sm:inline">
                  {startIndex + 1}–{endNum} of {total}
                </span>

                <button
                  onClick={handlePrev}
                  aria-label="Previous photos"
                  className="w-9 h-9 rounded-full border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="View more photos"
                  id="testimonials-view-more-btn"
                  className="px-3.5 h-9 rounded-full bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs hover:shadow transition-all cursor-pointer active:scale-95"
                >
                  <span>More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View 1: Student Pass Photos */}
        {activeTab === 'photos' && (
          <div>
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {visiblePhotos.map((student) => (
                  <div
                    key={student.id}
                    className="group relative aspect-4/5 sm:aspect-3/4 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={student.url}
                      alt={student.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Licensed Driver</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Right Arrow Button on the right edge for desktop */}
              <button
                onClick={handleNext}
                aria-label="View more student photos"
                className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-slate-900 hover:text-white hover:bg-[#D32F2F] shadow-lg border border-slate-200 items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: pageCount }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx * visibleCount)}
                  aria-label={`Student page ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentPage ? 'w-7 bg-[#D32F2F]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* View 2: Verified Google Reviews Grid */}
        {activeTab === 'reviews' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {GOOGLE_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
                >
                  <div>
                    {/* Top Row: Avatar, Name, Relative Time */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-xs`}
                        >
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">
                            {review.author}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {review.suburb} • {review.relativeTime}
                          </p>
                        </div>
                      </div>

                      {/* Google G icon */}
                      <GoogleIcon className="w-4 h-4 shrink-0 opacity-90" />
                    </div>

                    {/* Star Rating & Test Passed Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#1B7A3E]" />
                        <span>{review.testPassed}</span>
                      </span>
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Verified Footer */}
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      Verified Google Review
                    </span>
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Read full</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews Bottom Callout Box */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xs border border-slate-200 mx-auto">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Have you passed with Press On Driving Academy?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your review helps other new drivers in Cape Town find a patient, qualified, and trustworthy driving school.
              </p>
              <div className="pt-2">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs hover:shadow transition-all"
                  id="leave-google-review-cta-btn"
                >
                  <span>Leave a Review on Google</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


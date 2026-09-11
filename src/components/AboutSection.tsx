import React from 'react';
import { CheckCircle2, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import aboutImage from '../assets/images/pic30.png';

interface AboutSectionProps {
  onRatesClick?: () => void;
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual with Pass Rate Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src={aboutImage}
                onError={(e) => {
                  e.currentTarget.src = '/pic30.png';
                }}
                alt="Press On Driving Academy Training"
                className="w-full aspect-4/5 sm:aspect-4/5 lg:h-[500px] object-cover object-top"
                style={{ objectPosition: 'center top' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent pointer-events-none" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Qualified Driving Academy
                </span>
                <h4 className="text-lg font-extrabold text-white">
                  Safe, Competent & Responsible Drivers
                </h4>
              </div>
            </div>

            {/* Floating High Pass Rate Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">High Pass Rate</div>
                <div className="text-xs text-slate-500">First-time K53 test success</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3 py-1 rounded-full border border-red-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Press On Driving Academy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dedicated to Building Confident, Skilled and Safe Drivers
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At <strong className="text-slate-900 font-semibold">Press On Driving Academy</strong>, our motto is <em className="text-[#D32F2F] font-bold not-italic">"Keep Calm and Drive Safe with Us."</em> We believe in calm, supportive, and structured driver training that gives you true confidence on Cape Town roads.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are a nervous beginner or preparing for your official K53 driver's practical exam, our certified instructors tailor every lesson to your individual pace.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#1B7A3E] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Patient One-on-One Coaching</h5>
                  <p className="text-[11px] text-slate-500">Zero pressure, encouraging, and supportive instruction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Calm & Stress-Free Learning</h5>
                  <p className="text-[11px] text-slate-500">Step-by-step guidance designed to conquer nerves quickly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#1B7A3E] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">K53 Yard & Road Mastery</h5>
                  <p className="text-[11px] text-slate-500">Alley docking, 3-point turns, parallel parking & incline starts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Free Door-to-Door Pick-Up</h5>
                  <p className="text-[11px] text-slate-500">Collection across Southern Suburbs & Southern Peninsula.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

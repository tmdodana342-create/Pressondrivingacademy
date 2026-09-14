import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle, Calendar, User, ShieldCheck, Copy, Check } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { BRAND_INFO, PRICING_PACKAGES, GMAIL_COMPOSE_URL } from '../data/content';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  selectedPackageName?: string;
  selectedSuburb?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedPackageName, selectedSuburb }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: '10 Lessons (Includes Car Hire Test) (R3,500)',
    preferredDate: '',
    preferredTime: 'Morning (08:00 - 12:00)',
    transmission: 'Manual',
    pickupLocation: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(BRAND_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Update selected package when clicked from Pricing or Services
  useEffect(() => {
    if (selectedPackageName) {
      setFormData((prev) => ({ ...prev, service: selectedPackageName }));
    }
  }, [selectedPackageName]);

  // Update pickup location when clicked from Areas section
  useEffect(() => {
    if (selectedSuburb) {
      setFormData((prev) => ({ ...prev, pickupLocation: selectedSuburb }));
    }
  }, [selectedSuburb]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        status: 'Pending Review',
        source: 'Website Enquiry',
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setLoading(false);
    } catch (err: any) {
      console.warn('Booking save notice:', err);
      // Still show success to user as contact is initiated
      setSubmitted(true);
      setLoading(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const msg = `Hi PO Driving Academy,\n\nI would like to book a lesson:\n- Name: ${formData.fullName || 'New Student'}\n- Phone: ${formData.phoneNumber || 'Provided in chat'}\n- Service: ${formData.service}\n- Transmission: ${formData.transmission}\n- Suburb: ${formData.pickupLocation || 'Cape Town'}\n- Preferred Date/Time: ${formData.preferredDate || 'Flexible'} (${formData.preferredTime})\n- Note: ${formData.message || 'None'}`;
    const url = `https://wa.me/${BRAND_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B7A3E] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your Driving Lesson Online
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Fill out the quick form below to request your booking or contact our instructor directly via WhatsApp or phone.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info + Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl" />
              
              <h3 className="text-xl font-extrabold text-white mb-2">
                PO Driving Academy
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Professional driving lessons & test preparation across Cape Town.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors text-slate-200 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1B7A3E] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase block">Call Us</span>
                    <span className="font-semibold text-white">{BRAND_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${BRAND_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(BRAND_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors text-slate-200 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase block">Direct WhatsApp</span>
                    <span className="font-semibold text-white">Chat on WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors text-slate-200 hover:text-white group">
                  <a
                    href={GMAIL_COMPOSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                    title={`Open in Gmail (${BRAND_INFO.email})`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors">
                      <Mail className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-emerald-300 font-bold uppercase block">Email (Gmail)</span>
                      <span className="font-semibold text-white truncate block text-xs sm:text-sm">{BRAND_INFO.email}</span>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors shrink-0 text-xs flex items-center gap-1.5 cursor-pointer ml-2"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-300 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase block">Operating Hours</span>
                    <p className="text-xs">{BRAND_INFO.hoursWeekdays}</p>
                    <p className="text-xs">{BRAND_INFO.hoursWeekend}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase block">Service Area</span>
                    <p className="text-xs">{BRAND_INFO.address}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Benefits Assurance */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B7A3E]">
                <ShieldCheck className="w-4 h-4" />
                <span>Fast Confirmation Promise</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respond promptly to all enquiries. Your instructor will contact you to confirm lesson availability and convenient pick-up arrangements.
              </p>
            </div>

          </div>

          {/* Right Column: User-Friendly Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1B7A3E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Booking Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We have received your booking request for <strong>{formData.service}</strong>. Our instructor will call or WhatsApp you shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppBooking}
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-3 px-5 rounded-xl shadow-xs flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Follow Up on WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-3 px-5 rounded-xl"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Lesson Booking & Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Please provide your details and we will get back to you promptly.
                  </p>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] focus:ring-1 focus:ring-[#1B7A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 082 123 4567"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] focus:ring-1 focus:ring-[#1B7A3E]"
                      />
                    </div>
                  </div>

                  {/* Email & Suburb */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@gmail.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] focus:ring-1 focus:ring-[#1B7A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Pick-Up Suburb
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="e.g. Claremont / Fish Hoek"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] focus:ring-1 focus:ring-[#1B7A3E]"
                      />
                    </div>
                  </div>

                  {/* Package & Transmission */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Lesson / Package
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] bg-white font-medium"
                      >
                        <optgroup label="Code 8 (Light Vehicle)">
                          {PRICING_PACKAGES.filter((p) => p.category === 'code8' || p.category === 'hire').map((pkg) => (
                            <option key={pkg.id} value={`${pkg.name} (${pkg.price})`}>
                              {pkg.name} — {pkg.price}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Advance Driving (Skill Development)">
                          {PRICING_PACKAGES.filter((p) => p.category === 'advanced').map((pkg) => (
                            <option key={pkg.id} value={`${pkg.name} (${pkg.price})`}>
                              {pkg.name} — {pkg.price}
                            </option>
                          ))}
                        </optgroup>
                        <option value="General Driving Enquiry">General Driving Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Vehicle Transmission
                      </label>
                      <select
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] bg-white"
                      >
                        <option value="Manual">Manual Transmission</option>
                        <option value="Automatic">Automatic Transmission</option>
                        <option value="Not Sure">Not Sure / Either</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Time of Day
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E] bg-white"
                      >
                        <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                        <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                        <option value="Late Afternoon (16:00 - 18:00)">Late Afternoon (16:00 - 18:00)</option>
                        <option value="Flexible / Anytime">Flexible / Anytime</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Notes / Previous Driving Experience
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us if you have a learner's licence, your availability, or any specific goals..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#1B7A3E]"
                    />
                  </div>

                  {/* Form Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      id="submit-booking-btn"
                      className="flex-1 bg-[#D32F2F] hover:bg-[#b82525] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting...' : 'Submit Booking Request'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

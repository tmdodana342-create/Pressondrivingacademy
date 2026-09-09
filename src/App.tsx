import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { AreasSection } from './components/AreasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RatePackage } from './types';

export default function App() {
  const [selectedPackageName, setSelectedPackageName] = useState<string | undefined>(undefined);
  const [selectedSuburb, setSelectedSuburb] = useState<string | undefined>(undefined);

  const scrollToBooking = (packageName?: string, suburb?: string) => {
    if (packageName) {
      setSelectedPackageName(packageName);
    }
    if (suburb) {
      setSelectedSuburb(suburb);
    }
    const bookingSection = document.getElementById('contact');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: RatePackage) => {
    scrollToBooking(`${pkg.name} (${pkg.price})`);
  };

  const handleSelectSuburb = (suburb?: string) => {
    scrollToBooking(undefined, suburb);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1B7A3E] selection:text-white">
      
      {/* 1. Header with Top Contact Bar & Main Navigation */}
      <Header onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Welcoming Hero Banner with 4 Core Features */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onPricingClick={scrollToPricing}
        />

        {/* 3. About PO Driving Academy & Training Philosophy */}
        <AboutSection />

        {/* 4. Transparent Lesson Rates & Packages */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* 5. Service Areas (Southern Suburbs & Southern Peninsula) */}
        <AreasSection onBookClick={handleSelectSuburb} />

        {/* 6. Student Testimonials & First-Time Pass Stories */}
        <TestimonialsSection />

        {/* 7. Get in Touch & Online Booking Form */}
        <BookingSection
          selectedPackageName={selectedPackageName}
          selectedSuburb={selectedSuburb}
        />
      </main>

      {/* 9. Professional Footer */}
      <Footer />

      {/* 10. Quick Floating WhatsApp Action */}
      <FloatingWhatsApp />

    </div>
  );
}

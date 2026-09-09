import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    BRAND_INFO.whatsappDefaultMsg
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly quick chat tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-bounce duration-1000">
          <span>Chat directly on WhatsApp ({BRAND_INFO.phone})</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with PO Driving Academy"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="sr-only">Chat with PO Driving Academy on WhatsApp</span>
      </a>
    </div>
  );
};

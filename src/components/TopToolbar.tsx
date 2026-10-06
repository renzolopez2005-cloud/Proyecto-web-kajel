import React from 'react';
import { WHATSAPP_PHONE, WHATSAPP_DISPLAY } from '../data/products';
import { Sun, MessageCircle } from 'lucide-react';

interface TopToolbarProps {
  onScrollToCatalog?: () => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  onScrollToCatalog,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-xs border-b border-[#e7e2d7]/50">
      {/* Distraction-Free Landing Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center text-[#78350f] shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sun className="w-5 h-5 fill-[#78350f]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline text-lg md:text-xl text-[#b45309] font-bold tracking-tight leading-tight">
                Kajel Flores Amarillas
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fde68a] text-[#451a03]">
                Lima, Perú
              </span>
            </div>
            <p className="font-body text-xs text-[#57534e]">
              Flores eternas artesanales elaboradas a mano
            </p>
          </div>
        </div>

        {/* Single Conversion Action: Direct WhatsApp Order */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onScrollToCatalog && (
            <button
              onClick={onScrollToCatalog}
              className="hidden sm:inline-flex px-3.5 py-2 rounded-full text-xs font-bold text-[#b45309] hover:bg-[#fef3c7] transition-colors cursor-pointer"
            >
              Ver Ramos ↓
            </button>
          )}

          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar y hacer un pedido de flores amarillas para Lima.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            title="Pedir por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pedir por WhatsApp</span>
            <span className="hidden md:inline opacity-90 font-normal text-[11px]">({WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      </div>
    </header>
  );
};

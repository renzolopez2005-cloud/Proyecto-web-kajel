import React, { useState } from 'react';
import { ColorPalette } from '../types';
import { WHATSAPP_PHONE } from '../data/products';
import { 
  Sun, 
  MessageCircle, 
  Menu, 
  X,
  Sparkles,
  Truck,
  HelpCircle,
  BookOpen,
  Home,
  Mail
} from 'lucide-react';

interface TopToolbarProps {
  currentPalette?: ColorPalette;
  onChangePalette?: (palette: ColorPalette) => void;
  onNavigateSection?: (sectionId: string) => void;
  onNavigateAbout?: () => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  onNavigateSection,
  onNavigateAbout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateAbout) {
      onNavigateAbout();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-[#e7e2d7]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('top')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center text-[#78350f] shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sun className="w-5 h-5 fill-[#78350f]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-headline text-lg md:text-xl text-[#b45309] font-bold tracking-tight leading-tight">
                Kajel Flores Amarillas
              </span>
            </div>
            <p className="font-body text-xs text-[#57534e]">
              Flores eternas artesanales elaboradas a mano
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => handleNavClick('top')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('beneficios')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Beneficios
          </button>
          <button
            onClick={() => handleNavClick('catalogo')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Catálogo
          </button>
          <button
            onClick={() => handleNavClick('envios-lima')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Envíos Lima
          </button>
          <button
            onClick={() => handleNavClick('preguntas-frecuentes')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Preguntas
          </button>
          <button
            onClick={() => handleNavClick('contacto')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#57534e] hover:text-[#b45309] hover:bg-[#fffbeb] transition-colors cursor-pointer"
          >
            Contacto
          </button>
          <button
            onClick={handleAboutClick}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#b45309] hover:bg-[#fef3c7] transition-colors cursor-pointer"
          >
            Sobre Nosotros
          </button>
        </nav>

        {/* Right Actions: Direct WhatsApp Conversion CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct WhatsApp Order CTA Button */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar y hacer un pedido de flores amarillas para Lima.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
            title="Pedir por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#57534e] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors cursor-pointer border border-[#e7e2d7]/60"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#b45309]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Slide-Down Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#e7e2d7]/60 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick('top')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <Home className="w-4 h-4 text-[#b45309]" />
            <span>Inicio</span>
          </button>
          <button
            onClick={() => handleNavClick('beneficios')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <Sun className="w-4 h-4 text-[#b45309]" />
            <span>Beneficios del Chenille</span>
          </button>
          <button
            onClick={() => handleNavClick('catalogo')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#b45309]" />
            <span>Catálogo de Ramos</span>
          </button>
          <button
            onClick={() => handleNavClick('envios-lima')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <Truck className="w-4 h-4 text-[#b45309]" />
            <span>Cobertura de Envíos en Lima</span>
          </button>
          <button
            onClick={() => handleNavClick('preguntas-frecuentes')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#b45309]" />
            <span>Preguntas Frecuentes</span>
          </button>
          <button
            onClick={() => handleNavClick('contacto')}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-semibold text-[#1c1917] hover:bg-[#fffbeb] hover:text-[#b45309] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#b45309]" />
            <span>Formulario de Contacto</span>
          </button>
          <button
            onClick={handleAboutClick}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left text-xs font-bold text-[#b45309] bg-[#fef3c7]/60 hover:bg-[#fef3c7] transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#b45309]" />
            <span>Sobre Nosotros & Historia</span>
          </button>
        </div>
      )}
    </header>
  );
};

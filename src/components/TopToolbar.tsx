import React, { useState, useRef, useEffect } from 'react';
import { ColorPalette } from '../types';
import { PALETTES } from '../data/palettes';
import { WHATSAPP_PHONE } from '../data/products';
import { 
  Sun,
  Palette,
  Check,
  ChevronDown,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface TopToolbarProps {
  currentPalette: ColorPalette;
  onChangePalette: (palette: ColorPalette) => void;
  onNavigateCatalog?: () => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  currentPalette,
  onChangePalette,
  onNavigateCatalog,
}) => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target as Node)) {
        setIsPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activePalette = PALETTES.find((p) => p.id === currentPalette) || PALETTES[0];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-xs border-b border-[#e7e2d7]/50">
      {/* Top Brand & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={handleScrollTop}
          title="Ir al inicio"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center text-[#78350f] shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sun className="w-5 h-5 fill-[#78350f]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-headline text-lg md:text-xl text-[#b45309] font-bold tracking-tight">
                Kajel Flores Amarillas
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fde68a] text-[#451a03]">
                Preventa Septiembre
              </span>
            </div>
            <p className="font-body text-xs text-[#57534e] hidden sm:block">
              Ramos y detalles de flores eternas elaborados a mano en Lima
            </p>
          </div>
        </div>

        {/* Quick actions: Palette Selector & Direct WhatsApp CTA */}
        <div className="flex items-center gap-2.5">
          {/* Palette Selector Trigger */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef3c7] hover:bg-[#fde68a] text-[#57534e] text-xs font-semibold transition-all border border-[#e7e2d7] cursor-pointer shadow-2xs"
              title="Cambiar paleta de colores de la página"
            >
              <Palette className="w-3.5 h-3.5 text-[#b45309]" />
              <span className="font-bold text-[#b45309] hidden xs:inline">Paleta:</span>
              <span className="text-[11px] font-medium">{activePalette.badge}</span>
              <ChevronDown className="w-3 h-3 text-[#78716c] ml-0.5" />
            </button>

            {/* Dropdown Menu */}
            {isPaletteOpen && (
              <div className="absolute right-0 mt-2 w-72 max-h-[420px] overflow-y-auto rounded-xl bg-white shadow-xl border border-[#e7e2d7] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 border-b border-[#e7e2d7]/50 mb-1.5 z-10">
                  <span className="text-[11px] font-bold text-[#1c1917] uppercase tracking-wider block">
                    Paletas de Color ({PALETTES.length})
                  </span>
                  <span className="text-[10px] text-[#78716c]">
                    Personaliza la estética floral de la página
                  </span>
                </div>
                <div className="space-y-1">
                  {PALETTES.map((pal) => {
                    const isSelected = pal.id === currentPalette;
                    return (
                      <button
                        key={pal.id}
                        onClick={() => {
                          onChangePalette(pal.id);
                          setIsPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#fef3c7] text-[#1c1917] font-bold ring-1 ring-[#b45309]/30'
                            : 'hover:bg-[#fffbeb] text-[#57534e]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="flex items-center -space-x-1">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
                              style={{ backgroundColor: pal.primaryColor }}
                            />
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
                              style={{ backgroundColor: pal.accentColor }}
                            />
                          </div>
                          <div>
                            <div className="text-[12px] font-semibold flex items-center gap-1">
                              <span>{pal.badge}</span>
                            </div>
                            <div className="text-[10px] text-[#78716c] leading-tight line-clamp-1">
                              {pal.description}
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-[#b45309] shrink-0 ml-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Jump to Collection Button */}
          {onNavigateCatalog && (
            <button
              onClick={onNavigateCatalog}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#fffbeb] text-[#1c1917] text-xs font-bold border border-[#e7e2d7] transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Ver Catálogo</span>
            </button>
          )}

          {/* Direct WhatsApp Action */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar por disponibilidad de flores amarillas.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs transition-all"
            title="Escribir por WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};


import React, { useState, useRef, useEffect } from 'react';
import { ActiveScreen, ColorPalette } from '../types';
import { PALETTES } from '../data/palettes';
import { 
  Sun,
  Eye, 
  ShoppingBag, 
  Layers, 
  Home, 
  Package, 
  Sparkles, 
  HeartHandshake, 
  PhoneCall,
  Palette,
  Check,
  ChevronDown
} from 'lucide-react';

interface TopToolbarProps {
  activeScreen: ActiveScreen;
  onSelectScreen: (screen: ActiveScreen) => void;
  cartCount: number;
  onOpenCart: () => void;
  currentPalette: ColorPalette;
  onChangePalette: (palette: ColorPalette) => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  activeScreen,
  onSelectScreen,
  cartCount,
  onOpenCart,
  currentPalette,
  onChangePalette,
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
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-sm border-b border-[#e7e2d7]/40">
      {/* Top Architecture Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Identity */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onSelectScreen('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center text-[#78350f] shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sun className="w-5 h-5 fill-[#78350f]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline text-lg md:text-xl text-[#b45309] font-bold tracking-tight">
                Kajel Flores Amarillas
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fde68a] text-[#451a03]">
                Preventa Septiembre
              </span>
            </div>
            <p className="font-body text-xs text-[#57534e]">
              Ramos y detalles de flores eternas tejidos a mano en Lima
            </p>
          </div>
        </div>

        {/* Quick actions & cart */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Palette Selector Trigger */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef3c7] hover:bg-[#fde68a] text-[#57534e] text-xs font-semibold transition-all border border-[#e7e2d7] cursor-pointer shadow-2xs"
              title="Cambiar paleta de colores de la tienda"
            >
              <Palette className="w-3.5 h-3.5 text-[#b45309]" />
              <span className="font-bold text-[#b45309]">Paleta:</span>
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
                    Personaliza la estética floral de la tienda
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

          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-semibold shadow-sm transition-all relative"
            title="Ver carrito de compras"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bolsa</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#f59e0b] text-[#451a03] text-[10px] font-bold rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Screen View Switcher Tabs */}
      <div className="bg-[#fffbeb] border-t border-[#e7e2d7]/30 px-4 md:px-8 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            Menú:
          </span>

          <button
            onClick={() => onSelectScreen('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeScreen === 'home'
                ? 'bg-[#b45309] text-white shadow-sm'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]/40'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => onSelectScreen('catalogo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeScreen === 'catalogo'
                ? 'bg-[#b45309] text-white shadow-sm'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]/40'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Catálogo Flores Amarillas</span>
          </button>

          <button
            onClick={() => onSelectScreen('producto')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeScreen === 'producto'
                ? 'bg-[#b45309] text-white shadow-sm'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Detalles</span>
          </button>

          <button
            onClick={() => onSelectScreen('nosotros')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeScreen === 'nosotros'
                ? 'bg-[#b45309] text-white shadow-sm'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]/40'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Sobre Nosotros</span>
          </button>

          <button
            onClick={() => onSelectScreen('contacto')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeScreen === 'contacto'
                ? 'bg-[#b45309] text-white shadow-sm'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]/40'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Pedidos & Envíos Lima</span>
          </button>
        </div>
      </div>
    </header>
  );
};

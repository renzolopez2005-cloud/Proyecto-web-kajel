import React from 'react';
import { ActiveScreen } from '../types';
import { 
  WHATSAPP_PHONE, 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_HANDLE 
} from '../data/products';
import { 
  Sparkles, 
  Sun, 
  Heart, 
  MessageCircle, 
  Camera, 
  PlayCircle, 
  ThumbsUp, 
  Layers, 
  GitFork 
} from 'lucide-react';

interface FooterProps {
  onSelectScreen: (screen: ActiveScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectScreen }) => {
  return (
    <footer className="bg-white border-t border-[#e7e2d7]/40 text-[#57534e] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                <Sun className="w-5 h-5 fill-[#b45309]" />
              </div>
              <span className="font-headline text-lg font-bold text-[#b45309]">
                Kajel Flores Amarillas
              </span>
            </div>
            <p className="font-body text-xs leading-relaxed text-[#57534e]">
              Detalles y ramos de flores eternas tejidos a mano con amor en Lima. Celebra la tradición de septiembre con un recuerdo imborrable.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com/Kajel.pe"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#fffbeb] flex items-center justify-center text-[#b45309] hover:bg-[#fef3c7] transition-colors"
                title="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@Kajel.pe"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#fffbeb] flex items-center justify-center text-[#b45309] hover:bg-[#fef3c7] transition-colors"
                title="TikTok"
              >
                <PlayCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/Kajel.pe"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#fffbeb] flex items-center justify-center text-[#b45309] hover:bg-[#fef3c7] transition-colors"
                title="Facebook"
              >
                <ThumbsUp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1c1917]">
              Navegación de Tienda
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectScreen('home')}
                  className="hover:text-[#b45309] transition-colors text-left"
                >
                  Inicio (Landing)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('catalogo')}
                  className="hover:text-[#b45309] transition-colors text-left"
                >
                  Catálogo Flores Amarillas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('producto')}
                  className="hover:text-[#b45309] transition-colors text-left"
                >
                  Gift Box Exclusiva
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('nosotros')}
                  className="hover:text-[#b45309] transition-colors text-left"
                >
                  Sobre Nosotros & Técnica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('contacto')}
                  className="hover:text-[#b45309] transition-colors text-left"
                >
                  Pedidos & Envíos Lima
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture Views */}
          <div className="space-y-2">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1c1917]">
              Arquitectura de Venta
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectScreen('blueprint')}
                  className="flex items-center gap-1.5 text-[#b45309] font-semibold hover:underline"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Ver Mapa Conceptual Completo</span>
                </button>
              </li>
              <li className="text-[11px] text-[#57534e]">
                • Nivel 1: Home Landing Page
              </li>
              <li className="text-[11px] text-[#57534e]">
                • Nivel 2: Ramas de Catálogo, Historia y Pedidos
              </li>
              <li className="text-[11px] text-[#57534e]">
                • Nivel 3: Experiencia Single Product
              </li>
            </ul>
          </div>

          {/* Contact & Orders */}
          <div className="space-y-2">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-[#1c1917]">
              Atención & Pedidos
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#fef3c7] text-[#b45309] rounded-lg font-bold hover:bg-[#fde68a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#b45309]" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
              <p className="text-[11px] text-[#57534e]">
                Entregas programadas en Lima Metropolitana y puntos de encuentro.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#fffbeb] rounded text-[10px] font-bold text-[#1c1917]">Yape</span>
                <span className="px-2 py-0.5 bg-[#fffbeb] rounded text-[10px] font-bold text-[#1c1917]">Plin</span>
                <span className="px-2 py-0.5 bg-[#fffbeb] rounded text-[10px] font-bold text-[#1c1917]">Transferencia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#e7e2d7]/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534e]">
          <div className="flex items-center gap-1.5">
            <span>© 2025 Kajel Flores Amarillas.</span>
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#b45309] fill-[#b45309]" />
            <span>en Lima, Perú.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{INSTAGRAM_HANDLE}</span>
            <span>•</span>
            <span>Preventa Flores Amarillas Septiembre</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

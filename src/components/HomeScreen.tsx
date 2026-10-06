import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { 
  PRODUCTS, 
  WHATSAPP_PHONE, 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_HANDLE, 
  LIMA_DISTRICTS, 
  FAQ_ITEMS 
} from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Truck, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Calendar, 
  Sparkles,
  Sun,
  Gift,
  Award,
  BookOpen,
  Stars,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  CreditCard,
  PhoneCall,
  Camera,
  PlayCircle,
  ThumbsUp,
  Check
} from 'lucide-react';
import { 
  ChenilleSunflowerIcon, 
  YarnChenilleIcon, 
  FairyLightsIcon, 
  ArtisanGiftBoxIcon 
} from './CraftIcons';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog?: () => void;
  onAddToCart?: (product: Product) => void;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const getCampaignDeadline = (): Date => {
  const now = new Date();
  const currentYear = now.getFullYear();
  // 21 de Septiembre (fecha de la campaña ya concluida)
  return new Date(currentYear, 8, 21, 23, 59, 59);
};

const calculateTimeLeft = (target: Date): CountdownTime => {
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false,
  };
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProduct,
}) => {
  // Real-time functional countdown (at zero since campaign passed)
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => 
    calculateTimeLeft(getCampaignDeadline())
  );

  useEffect(() => {
    const target = getCampaignDeadline();
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Catalog filtering state
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // District calculator state
  const [selectedDistrict, setSelectedDistrict] = useState<string>(LIMA_DISTRICTS[0].name);
  const selectedDistObj = LIMA_DISTRICTS.find((d) => d.name === selectedDistrict) || LIMA_DISTRICTS[0];

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filterCategory === 'plush' && !p.hasPlush) return false;
      if (filterCategory === 'jewelry' && !p.hasJewelry) return false;
      if (filterCategory === 'boxes' && p.category !== 'boxes') return false;
      if (filterCategory === 'ramos' && p.category !== 'ramos') return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchSub = p.subtitle.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        if (!matchName && !matchSub && !matchDesc) return false;
      }
      return true;
    });
  }, [filterCategory, searchQuery]);

  // Safe references for hero mosaic
  const heroProd1 = PRODUCTS[1] || PRODUCTS[0];
  const heroProd2 = PRODUCTS[2] || PRODUCTS[0];

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. TOP ANNOUNCEMENT RIBBON */}
      <aside aria-label="Aviso de la tienda" className="bg-[#b45309] text-white py-2.5 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-xs">
        <ChenilleSunflowerIcon className="w-4 h-4 animate-spin" style={{ animationDuration: '14s' }} />
        <span>
          Ramos y flores eternas elaborados artesanalmente en Lima • Envíos programados a domicilio con dedicatoria personalizada.
        </span>
        <button 
          type="button"
          onClick={scrollToCatalog}
          className="underline font-bold text-[#fef08a] hover:text-white transition-colors ml-1 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        >
          Ver Ramos ↓
        </button>
      </aside>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl rounded-tr-[2.5rem] bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/50 p-6 md:p-12 border border-[#e7e2d7]/60 shadow-sm relative overflow-hidden">
          {/* Subtle warm floral background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#fde68a]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              {/* Romantic eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef08a]/80 border border-amber-300/50 text-[#451a03] text-xs font-bold shadow-2xs">
                <ChenilleSunflowerIcon className="w-4 h-4" />
                <span className="font-handwriting text-base font-bold text-[#451a03]">Flores Amarillas Eternas</span>
                <span className="text-[11px] text-[#57534e]">• Confección Artesanal en Lima</span>
              </div>

              {/* Direct, clear & romantic headline */}
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-bold tracking-tight leading-tight">
                Flores Amarillas que nunca se marchitan:{' '}
                <span className="text-[#b45309] underline decoration-[#f59e0b] decoration-wavy underline-offset-4">
                  el detalle elaborado a mano
                </span>{' '}
                para quien más amas
              </h1>

              {/* Subtitle with unique value proposition */}
              <p className="font-body text-sm md:text-base text-[#57534e] max-w-xl leading-relaxed">
                Sorprende con ramos y gift boxes de girasoles eternos elaborados minuciosamente en suave chenille aterciopelado. Cada arreglo incluye luces de hada cálidas, peluches nupciales exclusivos o joyas giratorias antiestrés, listos para regalar con dedicatoria caligrafiada en Lima.
              </p>

              {/* Action Buttons: Unified to WhatsApp Conversion */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar y hacer un pedido de flores amarillas para Lima.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-headline text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir mi Ramo por WhatsApp ({WHATSAPP_DISPLAY})</span>
                </a>

                <button
                  type="button"
                  onClick={scrollToCatalog}
                  className="px-6 py-3.5 rounded-2xl bg-[#fffbeb] hover:bg-[#fef3c7] active:bg-amber-200 text-[#b45309] font-headline text-sm font-bold border border-amber-300/70 transition-all duration-200 flex items-center gap-2 shadow-2xs active:scale-[0.98] cursor-pointer"
                >
                  <ArtisanGiftBoxIcon className="w-4 h-4 text-[#b45309]" />
                  <span>Ver Ramos Disponibles ↓</span>
                </button>
              </div>

              {/* Handcrafted trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#e7e2d7]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <YarnChenilleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">100% Chenille</span>
                    <span className="text-[11px] text-[#57534e]">Elaborado a mano</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">Todo Lima</span>
                    <span className="text-[11px] text-[#57534e]">Envíos programados</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <FairyLightsIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">Pack Completo</span>
                    <span className="text-[11px] text-[#57534e]">Luces + Tarjeta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO PHOTOS MOSAIC */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div 
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles de ${heroProd1.name}`}
                  onClick={() => onSelectProduct(heroProd1)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(heroProd1);
                    }
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/60 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <img
                    alt={heroProd1.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={heroProd1.image}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl text-center shadow-xs border border-amber-100">
                    <span className="text-[11px] font-bold text-[#b45309] block truncate">{heroProd1.name}</span>
                    <span className="text-xs font-bold text-[#1c1917]">S/ {heroProd1.price.toFixed(2)}</span>
                  </div>
                </div>

                <div 
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles de ${heroProd2.name}`}
                  onClick={() => onSelectProduct(heroProd2)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(heroProd2);
                    }
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/60 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <img
                    alt={heroProd2.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={heroProd2.image}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl text-center shadow-xs border border-amber-100">
                    <span className="text-[11px] font-bold text-[#b45309] block truncate">{heroProd2.name}</span>
                    <span className="text-xs font-bold text-[#1c1917]">S/ {heroProd2.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div 
                  role="button"
                  tabIndex={0}
                  aria-label="Ver catálogo de flores"
                  onClick={scrollToCatalog}
                  className="rounded-2xl p-4 bg-[#fffbeb] border border-amber-200/80 text-center space-y-2 cursor-pointer hover:bg-[#fef3c7] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-[#78350f] flex items-center justify-center mx-auto shadow-2xs">
                    <Sun className="w-5 h-5 fill-[#78350f]" />
                  </div>
                  <span className="font-headline text-xs font-bold text-[#1c1917] block">
                    Flores que duran para siempre
                  </span>
                  <span className="text-[11px] text-[#b45309] font-semibold block">
                    Explorar colección ↓
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#e7e2d7]/60 bg-white p-3 text-center space-y-1">
                  <span className="text-xl font-bold text-[#b45309] block">+1,200</span>
                  <span className="text-[11px] text-[#57534e] block leading-tight font-medium">
                    Ramos entregados con amor en Lima
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPAIGN STATUS BANNER (Maintained as requested) */}
      <section aria-label="Estado de la campaña" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#fffbeb] via-[#fffdfa] to-[#fef3c7]/40 border border-[#e7e2d7]/70 rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#78716c] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Calendar className="w-6 h-6 text-[#f5f5f4]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716c]">
                  Campaña Oficial 21 de Septiembre
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
                  Finalizada • No disponible
                </span>
              </div>
              <h2 className="font-headline text-base md:text-lg font-bold text-[#1c1917]">
                Campaña culminada — Cupos de preventa concluidos
              </h2>
              <p className="text-xs md:text-sm text-[#57534e]">
                La fecha del 21 de septiembre ya culminó y la preventa especial ya no está disponible. Puedes explorar nuestro catálogo regular para pedidos y personalizaciones con entrega en Lima.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            {/* Live Countdown Clock in Zero */}
            <div className="flex items-center gap-1.5 bg-white/90 px-3 py-2 rounded-xl border border-[#e7e2d7]/60 shadow-2xs">
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-[#78716c] block leading-none">
                  00
                </span>
                <span className="text-[9px] text-[#78716c] uppercase font-bold">Días</span>
              </div>
              <span className="text-[#a8a29e] font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-[#78716c] block leading-none">
                  00
                </span>
                <span className="text-[9px] text-[#78716c] uppercase font-bold">Horas</span>
              </div>
              <span className="text-[#a8a29e] font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-[#78716c] block leading-none">
                  00
                </span>
                <span className="text-[9px] text-[#78716c] uppercase font-bold">Min</span>
              </div>
              <span className="text-[#a8a29e] font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-[#78716c] block leading-none">
                  00
                </span>
                <span className="text-[9px] text-[#78716c] uppercase font-bold">Seg</span>
              </div>
            </div>

            {/* Campaign Availability Status Metric */}
            <div className="bg-white/90 px-3 py-2 rounded-xl text-center border border-rose-200 shadow-2xs min-w-[90px]">
              <span className="font-headline text-xs md:text-sm font-bold text-rose-600 block leading-tight">
                No disponible
              </span>
              <span className="block text-[10px] text-[#57534e] font-medium mt-0.5">Preventa cerrada</span>
            </div>

            {/* Booking Action Button */}
            <button
              type="button"
              onClick={scrollToCatalog}
              className="px-5 py-2.5 bg-[#b45309] hover:bg-[#d97706] active:bg-[#78350f] text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Ver Catálogo Disponible
            </button>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG SECTION (Integrated into the single page flow) */}
      <section id="catalogo" aria-label="Catálogo de Ramos y Boxes" className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        {/* Header of the catalog */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Colección de Flores Amarillas Hechas a Mano</span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
            Elige tu Ramo de Flores Eternas
          </h2>
          <p className="text-xs md:text-sm text-[#57534e]">
            Confeccionados en chenille aterciopelado de alta densidad. Cada ramo incluye luces hada, tarjeta de dedicatoria y empaque protector para entrega en Lima.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            Todos los Ramos ({PRODUCTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('boxes')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterCategory === 'boxes'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            🎁 Gift Boxes con Peluche
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('jewelry')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterCategory === 'jewelry'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            ✨ Con Anillo Giratorio
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('ramos')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterCategory === 'ramos'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            🌻 Ramos Florales
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProducts.map((product) => {
            const whatsAppLink = createProductWhatsAppLink(product);
            return (
              <div 
                key={product.id}
                className="rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo Container */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-4/3 overflow-hidden bg-[#fffbeb] cursor-pointer"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#fef08a] text-[#451a03] shadow-xs">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-headline text-lg font-bold text-[#1c1917] group-hover:text-[#b45309] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-[#78716c] line-through block">
                          S/ {product.normalPrice.toFixed(2)}
                        </span>
                        <span className="font-headline text-lg font-bold text-[#b45309]">
                          S/ {product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#57534e] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Inclusions pill list */}
                    <div className="bg-[#fffbeb] p-3 rounded-xl space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b45309] block">
                        Incluye en el paquete:
                      </span>
                      <ul className="space-y-0.5 text-[11px] text-[#57534e]">
                        {product.inclusions.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#f59e0b] shrink-0" />
                            <span className="truncate">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Single Unified High-Converting CTA Button */}
                <div className="p-5 pt-0 space-y-2">
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pedir por WhatsApp (S/ {product.price.toFixed(2)})</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2 bg-[#fffbeb] hover:bg-[#fef3c7] text-[#b45309] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#e7e2d7]/60 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
                    <span>Ver fotos y dedicatoria</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP & BENEFIT COMPARISON SECTION */}
      <section id="beneficios" aria-label="Por qué elegir flores artesanales Kajel" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl bg-white border border-[#e7e2d7]/60 p-6 md:p-10 shadow-xs relative overflow-hidden space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
              Flores Eternas Hechas a Mano
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
              El cariño de un detalle que no muere en el florero
            </h2>
            <p className="text-xs md:text-sm text-[#57534e] leading-relaxed">
              A diferencia de las flores frescas que duran solo unos días, nuestros girasoles en chenille conservan su textura aterciopelada, color vivo y valor sentimental por siempre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] border border-amber-200/60 shadow-2xs">
                <ChenilleSunflowerIcon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Técnica Chenille Aterciopelada</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Moldeamos pétalo por pétalo con limpiapipas chenille de alta densidad, logrando flores mullidas, resistentes y con un tacto delicado único.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] border border-amber-200/60 shadow-2xs">
                <Sparkles className="w-5 h-5 text-[#b45309]" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Joyas Giratorias Inoxidables</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Nuestros gift boxes incorporan anillos y dijes en acero quirúrgico dorado con mecanismo giratorio antiestrés, diseñados para acompañarla siempre.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] border border-amber-200/60 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#b45309]" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Atención Cálida & Entrega Puntual</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Te enviamos foto previa de tu ramo terminado por WhatsApp, caligrafiamos tu dedicatoria en tarjeta fina y coordinamos la ruta de entrega en Lima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TALLER ARTESANAL & BRAND STORY */}
      <section id="taller-artesanal" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#fffbeb] via-[#fef9c3]/30 to-white border border-[#e7e2d7]/70 p-6 sm:p-8 md:p-12 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-[#b45309] text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Confección Artesanal en Lima</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1917] leading-tight">
              De una mesa de centro en Lima a cientos de recuerdos eternos
            </h2>
            <p className="text-sm text-[#57534e] leading-relaxed">
              Detrás de cada ramo no hay una fábrica industrial ni plástico importado. Cada pieza es moldeada a mano con horas de dedicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">¿Qué significa «Kajel»?</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Fusión entre <strong>«K’aj»</strong> (palabra que evoca el resplandor dorado del sol) y <strong>«El»</strong> (por <em>Eternos Lazos</em>). Un pequeño sol en las manos que jamás se apaga.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Stars className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">La Carnerita & Peluches</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Confeccionamos peluches exclusivos con velo de novia y mini girasoles de chenille, ideales para aniversarios y propuestas románticas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">El Manifiesto de Taller</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                <strong>Ninguna flor sale de una máquina</strong>. Cada pétalo se moldea a mano, se revisa y se empaca con cinta de satén y luces de hada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LIMA DELIVERY COVERAGE & SECURE PAYMENT METHODS */}
      <section id="envios-lima" className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
            <Truck className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Envíos Seguros & Medios de Pago</span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
            Entregas Programadas en Todo Lima Metropolitana
          </h2>
          <p className="text-xs md:text-sm text-[#57534e]">
            Revisa tu distrito, programa la fecha y paga de forma segura mediante Yape, Plin o transferencia bancaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* District calculator */}
          <div className="bg-white p-6 rounded-2xl border border-[#e7e2d7]/60 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#b45309]">
              <MapPin className="w-4 h-4" />
              <span>CONSULTA TU DISTRITO EN LIMA:</span>
            </div>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#e7e2d7] bg-[#fffbeb]/40 text-xs font-semibold focus:outline-[#b45309]"
            >
              {LIMA_DISTRICTS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name} — Envío: S/ {d.fee.toFixed(2)} ({d.estimatedHours})
                </option>
              ))}
            </select>

            <div className="p-4 rounded-xl bg-[#fffbeb] border border-amber-200/60 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#57534e]">Distrito:</span>
                <strong className="text-[#1c1917]">{selectedDistObj.name}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#57534e]">Tiempo promedio:</span>
                <strong className="text-[#b45309]">{selectedDistObj.estimatedHours}</strong>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-dashed border-[#e7e2d7]">
                <span className="text-[#57534e]">Costo estimado de delivery:</span>
                <strong className="text-base text-[#b45309]">S/ {selectedDistObj.fee.toFixed(2)}</strong>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`¡Hola Kajel! Deseo coordinar un envío para el distrito de ${selectedDistObj.name}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Coordinar Entrega en {selectedDistObj.name}</span>
            </a>
          </div>

          {/* Payment methods */}
          <div className="bg-white p-6 rounded-2xl border border-[#e7e2d7]/60 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#b45309]">
                <CreditCard className="w-4 h-4" />
                <span>MÉTODOS DE PAGO DISPONIBLES:</span>
              </div>
              <p className="text-xs text-[#57534e]">
                Puedes confirmar tu pedido con el 50% de adelanto y cancelar la diferencia al recibir la foto previa de tu arreglo terminado por WhatsApp.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#fffbeb] border border-amber-200/60 text-center space-y-1">
                  <span className="text-sm font-bold text-[#1c1917] block">Yape / Plin</span>
                  <span className="text-[11px] text-[#57534e] block">{WHATSAPP_DISPLAY}</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">Inmediato sin comisión</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fffbeb] border border-amber-200/60 text-center space-y-1">
                  <span className="text-sm font-bold text-[#1c1917] block">BCP / BBVA</span>
                  <span className="text-[11px] text-[#57534e] block">Transferencia directa</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">Boleta de venta</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f7faf7] border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Te enviamos foto y video del ramo listo antes de que salga en camino.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section id="testimonios" aria-label="Opiniones de clientes" className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            Historias & Experiencias Reales
          </span>
          <h2 className="font-headline text-2xl font-bold text-[#1c1917]">
            Lo que dicen quienes ya regalaron Kajel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#e7e2d7]/60 shadow-2xs space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "¡Mi novia quedó fascinada con la Patita Novia y las luces! El girasol es idéntico a las fotos y la cajita llegó perfecta y puntual a Miraflores."
            </p>
            <div className="pt-2 border-t border-dashed border-[#e7e2d7]/50 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Diego M.</span>
              <span className="text-[#78716c]">Miraflores, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#e7e2d7]/60 shadow-2xs space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "El pack carnerita con el anillo giratorio es hermoso y súper delicado. La atención por WhatsApp fue muy amable y resolvieron mis dudas al instante."
            </p>
            <div className="pt-2 border-t border-dashed border-[#e7e2d7]/50 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Valeria C.</span>
              <span className="text-[#78716c]">Surco, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#e7e2d7]/60 shadow-2xs space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "La calidad del chenille aterciopelado es 10/10. Llegó impecable con la tarjeta de dedicatoria caligrafiada tal cual la pedí. Totalmente recomendado."
            </p>
            <div className="pt-2 border-t border-dashed border-[#e7e2d7]/50 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Carlos L.</span>
              <span className="text-[#78716c]">San Borja, Lima</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section id="preguntas-frecuentes" className="max-w-4xl mx-auto px-4 md:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            Resolvemos tus Dudas
          </span>
          <h2 className="font-headline text-2xl font-bold text-[#1c1917]">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-[#e7e2d7]/70 bg-white overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4.5 text-left flex items-center justify-between gap-4 font-headline text-sm font-bold text-[#1c1917] hover:bg-[#fffbeb] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#b45309] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#78716c] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4.5 pb-4 pt-1 text-xs text-[#57534e] leading-relaxed border-t border-[#e7e2d7]/30 bg-[#fffbeb]/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CLOSING PERSUASIVE WHATSAPP CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl bg-[#b45309] text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-md">
          {/* Decorative craft background elements */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#f59e0b]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="inline-block px-3 py-1 bg-[#fde68a] text-[#451a03] rounded-full text-xs font-bold shadow-2xs">
              Atención Directa & Caligrafía Personalizada
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">
              ¿Tienes una dedicatoria especial o deseas coordinar tu entrega?
            </h2>
            <p className="text-xs md:text-sm text-amber-100 leading-relaxed">
              Escríbenos directamente por WhatsApp. Te asesoramos para personalizar el paquete con tu mensaje en tarjeta fina, fecha exacta y distrito de entrega en Lima.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo coordinar un pedido de flores amarillas con dedicatoria para Lima.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar por WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

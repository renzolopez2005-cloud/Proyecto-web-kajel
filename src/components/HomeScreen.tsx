import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { 
  PRODUCTS, 
  WHATSAPP_PHONE, 
  WHATSAPP_DISPLAY, 
  LIMA_DISTRICTS, 
  FAQ_ITEMS 
} from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Truck, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Sparkles,
  Sun,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  CreditCard
} from 'lucide-react';
import { 
  ChenilleSunflowerIcon, 
  YarnChenilleIcon, 
  FairyLightsIcon, 
  ArtisanGiftBoxIcon 
} from './CraftIcons';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onNavigateAbout?: () => void;
  onNavigateCatalog?: () => void;
  onAddToCart?: (product: Product) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProduct,
  onNavigateAbout,
}) => {
  // Catalog filtering state
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery] = useState<string>('');

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

            {/* HERO PHOTOS SHOWCASE */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
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
                className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/60 transition-transform duration-200 hover:-translate-y-1 h-72 sm:h-80 bg-white flex flex-col justify-end"
              >
                <img
                  alt={heroProd1.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={heroProd1.image}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 m-2.5 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl text-center shadow-xs border border-amber-100">
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
                className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/60 transition-transform duration-200 hover:-translate-y-1 h-72 sm:h-80 bg-white flex flex-col justify-end"
              >
                <img
                  alt={heroProd2.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={heroProd2.image}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 m-2.5 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl text-center shadow-xs border border-amber-100">
                  <span className="text-[11px] font-bold text-[#b45309] block truncate">{heroProd2.name}</span>
                  <span className="text-xs font-bold text-[#1c1917]">S/ {heroProd2.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESUMEN DE BENEFICIOS (Compacto & Directo - Ahorro de espacio) */}
      <section id="beneficios" aria-label="Beneficios de flores artesanales Kajel" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#fffbeb] via-white to-[#fef3c7]/50 border border-[#e7e2d7]/80 p-3.5 sm:p-4 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/90 border border-amber-200/60 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] shrink-0 border border-amber-200/70 shadow-2xs">
                <ChenilleSunflowerIcon className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                  100% Chenille Aterciopelado
                </h3>
                <p className="text-[11px] text-[#57534e] truncate">
                  Flores eternas que nunca se marchitan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/90 border border-amber-200/60 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] shrink-0 border border-amber-200/70 shadow-2xs">
                <Sparkles className="w-4.5 h-4.5 text-[#b45309]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                  Joyas Giratorias Inoxidables
                </h3>
                <p className="text-[11px] text-[#57534e] truncate">
                  Acero quirúrgico dorado con giro antiestrés
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/90 border border-amber-200/60 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#fef3c7] flex items-center justify-center text-[#b45309] shrink-0 border border-amber-200/70 shadow-2xs">
                <ShieldCheck className="w-4.5 h-4.5 text-[#b45309]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                  Atención & Entrega en Lima
                </h3>
                <p className="text-[11px] text-[#57534e] truncate">
                  Foto previa por WhatsApp y dedicatoria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG - COMPACT 4-COLUMN VIEW (Only Image, Title, Price & Direct Action) */}
      <section id="catalogo" aria-label="Catálogo de Ramos y Boxes" className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
        {/* Header of the catalog */}
        <div className="text-center sm:text-left space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Colección Exclusiva de Flores Eternas</span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
            Nuestros 4 Diseños Disponibles
          </h2>
          <p className="text-xs text-[#57534e]">
            Selecciona tu modelo favorito. Fotos ampliadas y dedicatoria detallada disponibles en cada arreglo.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar justify-start sm:justify-start">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            Todos ({PRODUCTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('boxes')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
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
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
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
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filterCategory === 'ramos'
                ? 'bg-[#b45309] text-white shadow-xs'
                : 'bg-white text-[#57534e] hover:bg-[#fef3c7] border border-[#e7e2d7]'
            }`}
          >
            🌻 Ramos Florales
          </button>
        </div>

        {/* Compact Grid: Only Image, Title, Price, and Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredProducts.map((product) => {
            const whatsAppLink = createProductWhatsAppLink(product);
            return (
              <div 
                key={product.id}
                className="rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5 duration-200"
              >
                <div>
                  {/* Photo Container */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-square sm:aspect-4/3 max-h-40 sm:max-h-44 overflow-hidden bg-[#fffbeb] cursor-pointer"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#fef08a] text-[#451a03] shadow-xs">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content: ONLY Title and Price */}
                  <div className="p-3 sm:p-3.5 space-y-1.5">
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] group-hover:text-[#b45309] transition-colors cursor-pointer line-clamp-1"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline text-sm sm:text-base font-bold text-[#b45309]">
                        S/ {product.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#78716c] line-through">
                        S/ {product.normalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="p-3 sm:p-3.5 pt-0 space-y-1.5">
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                    <span className="truncate">Pedir por WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-1.5 bg-[#fffbeb] hover:bg-[#fef3c7] text-[#b45309] rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors border border-[#e7e2d7]/60 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#b45309]" />
                    <span>Ver fotos y detalles</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. LIMA DELIVERY COVERAGE & SECURE PAYMENT METHODS */}
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

      {/* 8. TESTIMONIALS SECTION (Compact: solo asunto y calificación de estrellas) */}
      <section id="testimonios" aria-label="Opiniones de clientes" className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            Opiniones de Clientes
          </span>
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#1c1917]">
            Experiencias con Flores Kajel
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                "¡Fascinada con la Patita Novia!"
              </h3>
              <span className="text-[10px] text-[#78716c] block">
                Diego M. • Miraflores
              </span>
            </div>
            <div className="flex text-[#f59e0b] gap-0.5 shrink-0" title="5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                "Hermoso pack y atención 10/10"
              </h3>
              <span className="text-[10px] text-[#78716c] block">
                Valeria C. • Surco
              </span>
            </div>
            <div className="flex text-[#f59e0b] gap-0.5 shrink-0" title="5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-headline text-xs sm:text-sm font-bold text-[#1c1917] truncate">
                "Calidad y dedicatoria perfecta"
              </h3>
              <span className="text-[10px] text-[#78716c] block">
                Carlos L. • San Borja
              </span>
            </div>
            <div className="flex text-[#f59e0b] gap-0.5 shrink-0" title="5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
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

      {/* 9. DISCREET CRAFT STORY CARD & BUTTON (Goes to dedicated About page) */}
      {onNavigateAbout && (
        <section className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-[#fffbeb] border border-amber-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f59e0b] text-[#78350f] flex items-center justify-center shrink-0 shadow-2xs font-bold">
                <Sun className="w-6 h-6 fill-[#78350f]" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block">
                  Taller de Autor • Lima, Perú
                </span>
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#1c1917]">
                  ¿Quieres conocer la historia detrás de nuestras flores?
                </h3>
                <p className="text-xs text-[#57534e] max-w-lg leading-relaxed">
                  Descubre el significado de Kajel, la leyenda de la Carnerita y nuestro manifiesto de confección 100% hecho a mano en Lima.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateAbout}
              className="px-5 py-3 rounded-xl bg-white hover:bg-amber-100/70 active:bg-amber-200 text-[#b45309] font-bold text-xs border border-amber-300 shadow-2xs hover:shadow-xs transition-all shrink-0 cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Conoce nuestra historia</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </section>
      )}

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

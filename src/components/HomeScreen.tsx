import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS, IMAGES, WHATSAPP_PHONE, WHATSAPP_DISPLAY } from '../data/products';
import { 
  Truck, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Calendar, 
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  ChenilleSunflowerIcon, 
  HandcraftedHeartIcon, 
  YarnChenilleIcon, 
  FairyLightsIcon, 
  ArtisanGiftBoxIcon 
} from './CraftIcons';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog: () => void;
  onAddToCart: (product: Product) => void;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/**
 * Calculates time remaining until the campaign deadline
 * Defaults to September 21 (Día de las Flores Amarillas) at 23:59:59
 */
const getCampaignDeadline = (): Date => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let target = new Date(currentYear, 8, 21, 23, 59, 59); // 21 de Septiembre
  if (now.getTime() > target.getTime()) {
    // If passed this year, roll over to the next campaign cycle
    target = new Date(currentYear + 1, 8, 21, 23, 59, 59);
  }
  return target;
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
  onNavigateCatalog,
  onAddToCart,
}) => {
  // Real-time functional countdown
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

  // Dynamic calculations from real product catalog
  const maxSavings = Math.max(...PRODUCTS.map((p) => Math.max(0, p.normalPrice - p.price)));

  // Safe references for hero mosaic
  const heroProd1 = PRODUCTS[1] || PRODUCTS[0];
  const heroProd2 = PRODUCTS[2] || PRODUCTS[0];
  const heroProd3 = PRODUCTS[0]; // Ramo Girasol artesanal con nueva imagen real

  return (
    <div className="space-y-12 pb-12">
      {/* Top Presale Ribbon */}
      <aside aria-label="Aviso de preventa" className="bg-kajel-amber text-white py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-xs">
        <ChenilleSunflowerIcon className="w-4 h-4 animate-spin" style={{ animationDuration: '14s' }} />
        <span>
          ¡Preventa Flores Amarillas! Asegura tu entrega en Lima con Luces Hada & Bombones Bon o bon gratis.
        </span>
        <button 
          type="button"
          onClick={onNavigateCatalog}
          className="underline font-bold text-kajel-yellow hover:text-white transition-colors ml-1 focus-visible:outline-2 focus-visible:outline-white"
        >
          Ver Promos &rarr;
        </button>
      </aside>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl rounded-tr-[2.5rem] bg-gradient-to-br from-kajel-cream via-white to-kajel-warm/50 p-6 md:p-12 border border-kajel-border/50 shadow-sm relative overflow-hidden">
          {/* Subtle warm floral background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-kajel-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-kajel-yellow/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              {/* Handwritten romantic eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kajel-yellow/80 border border-amber-300/50 text-kajel-brown text-xs font-bold shadow-2xs">
                <ChenilleSunflowerIcon className="w-4 h-4" />
                <span className="font-handwriting text-base font-bold text-kajel-brown">Tradición del 21 de Septiembre</span>
                <span className="text-[11px] text-kajel-muted">• Ramos Eternos</span>
              </div>

              {/* Direct, clear & romantic headline */}
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-kajel-dark font-bold tracking-tight leading-tight">
                Flores Amarillas que nunca se marchitan:{' '}
                <span className="text-kajel-amber underline decoration-kajel-gold decoration-wavy underline-offset-4">
                  el detalle tejido a mano
                </span>{' '}
                para quien más amas
              </h1>

              {/* Human, warm & specific subtitle */}
              <p className="font-body text-sm md:text-base text-kajel-muted max-w-xl leading-relaxed">
                Sorprende este 21 de Septiembre con ramos y gift boxes de girasoles eternos elaborados minuciosamente en suave chenille aterciopelado. Cada arreglo incluye luces de hada, peluches nupciales exclusivos o joyas giratorias antiestrés.{' '}
                <strong className="text-kajel-dark font-semibold">
                  Reserva hoy en Preventa y asegura tu entrega a domicilio en Lima con bombones de cortesía.
                </strong>
              </p>

              {/* Action Buttons with distinct hover feedback */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onNavigateCatalog}
                  className="px-6 py-3.5 rounded-2xl bg-kajel-amber hover:bg-kajel-amber-dark active:bg-kajel-amber-hover text-white font-headline text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-kajel-amber focus-visible:outline-offset-2"
                >
                  <ArtisanGiftBoxIcon className="w-4 h-4 text-kajel-yellow" />
                  <span>Ver Colección Preventa</span>
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo reservar mi pedido de Flores Amarillas para este 21 de Septiembre.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-kajel-warm hover:bg-amber-200 active:bg-amber-300 text-kajel-dark hover:text-kajel-brown font-headline text-sm font-bold border border-amber-300/70 hover:border-kajel-amber transition-all duration-200 flex items-center gap-2.5 shadow-2xs active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-kajel-amber focus-visible:outline-offset-2"
                >
                  <MessageCircle className="w-4 h-4 text-kajel-amber" />
                  <span>Pedir por WhatsApp ({WHATSAPP_DISPLAY})</span>
                </a>
              </div>

              {/* Handcrafted trust badges with custom craft icons */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-kajel-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <YarnChenilleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-kajel-dark block">100% Chenille</span>
                    <span className="text-[11px] text-kajel-muted">Tejido a mano eterno</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-kajel-dark block">Todo Lima</span>
                    <span className="text-[11px] text-kajel-muted">Envíos programados</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber flex-shrink-0 border border-amber-200/60 shadow-2xs">
                    <FairyLightsIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-kajel-dark block">Pack Completo</span>
                    <span className="text-[11px] text-kajel-muted">Luces + Bon o bon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO PHOTOS MOSAIC (Accessible, interactive & styled with craft borders) */}
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
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-kajel-border/60 focus-visible:outline-2 focus-visible:outline-kajel-amber focus-visible:outline-offset-2 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <img
                    alt={heroProd1.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={heroProd1.image}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl text-center shadow-xs border border-amber-100">
                    <span className="text-[11px] font-bold text-kajel-amber block truncate">{heroProd1.name}</span>
                    <span className="text-xs font-bold text-kajel-dark">S/ {heroProd1.price.toFixed(2)}</span>
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
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-kajel-border/60 focus-visible:outline-2 focus-visible:outline-kajel-amber focus-visible:outline-offset-2 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <img
                    alt={heroProd2.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={heroProd2.image}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-kajel-gold text-kajel-brown text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                    Preventa Activa
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl text-center shadow-xs border border-amber-100">
                    <span className="text-[11px] font-bold text-kajel-amber block truncate">{heroProd2.name}</span>
                    <span className="text-xs font-bold text-kajel-dark">S/ {heroProd2.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div 
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles de ${heroProd3.name}`}
                  onClick={() => onSelectProduct(heroProd3)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(heroProd3);
                    }
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-kajel-border/60 focus-visible:outline-2 focus-visible:outline-kajel-amber focus-visible:outline-offset-2 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <img
                    alt={heroProd3.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={heroProd3.image}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl text-center shadow-xs border border-amber-100">
                    <span className="text-[11px] font-bold text-kajel-amber block truncate">{heroProd3.name}</span>
                    <span className="text-xs font-bold text-kajel-amber">S/ {heroProd3.price.toFixed(2)}</span>
                  </div>
                </div>

                {/* Handcrafted ribbon card highlight */}
                <div className="p-3.5 bg-kajel-yellow/70 rounded-2xl text-center space-y-1 shadow-2xs border border-amber-300/40 relative">
                  <FairyLightsIcon className="w-5 h-5 text-kajel-amber mx-auto" />
                  <p className="text-xs font-bold text-kajel-brown">Luces Hada de Regalo</p>
                  <p className="text-[10px] text-kajel-muted leading-tight font-medium">Instaladas en tu pack de preventa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME FUNCTIONAL COUNTDOWN & CAMPAIGN MOTIVATION */}
      <section aria-label="Cuenta regresiva de la campaña" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-kajel-cream via-[#fffdfa] to-kajel-warm/40 border border-kajel-border/70 rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-kajel-amber text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Calendar className="w-6 h-6 text-kajel-yellow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-kajel-amber">
                  Campaña Oficial 21 de Septiembre
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h2 className="font-headline text-base md:text-lg font-bold text-kajel-dark">
                Asegura tu ramo artesanal antes de que se agoten los cupos
              </h2>
              <p className="text-xs md:text-sm text-kajel-muted">
                El tejido en chenille toma horas de confección artesanal. Reserva con anticipación y programa tu envío puntual en Lima.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            {/* Live Countdown Clock */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-kajel-border/60 shadow-2xs">
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-kajel-dark block leading-none">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-kajel-muted uppercase font-bold">Días</span>
              </div>
              <span className="text-kajel-amber font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-kajel-dark block leading-none">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-kajel-muted uppercase font-bold">Horas</span>
              </div>
              <span className="text-kajel-amber font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-kajel-dark block leading-none">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-kajel-muted uppercase font-bold">Min</span>
              </div>
              <span className="text-kajel-amber font-bold text-xs">:</span>
              <div className="text-center min-w-[34px]">
                <span className="font-headline text-base md:text-lg font-bold text-kajel-amber block leading-none">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-kajel-amber uppercase font-bold">Seg</span>
              </div>
            </div>

            {/* Dynamic Calculated Savings Metric */}
            <div className="bg-white px-3 py-2 rounded-xl text-center border border-kajel-border/60 shadow-2xs min-w-[90px]">
              <span className="font-headline text-base md:text-lg font-bold text-kajel-amber block leading-none">
                S/ {maxSavings.toFixed(2)}
              </span>
              <span className="block text-[10px] text-kajel-muted font-medium">Ahorro preventa</span>
            </div>

            {/* Booking Action Button */}
            <button
              type="button"
              onClick={onNavigateCatalog}
              className="px-5 py-2.5 bg-kajel-amber hover:bg-kajel-amber-dark active:bg-kajel-amber-hover text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-kajel-amber"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KAJEL CRAFT SECTION (Specific, human & artisanal copy) */}
      <section aria-label="Por qué elegir flores artesanales Kajel" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl bg-white border border-kajel-border/60 p-6 md:p-10 shadow-xs relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs uppercase font-bold text-kajel-amber tracking-wider block">
              Flores Eternas Hechas a Mano
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-kajel-dark">
              El cariño de un detalle que no muere en el florero
            </h2>
            <p className="text-xs md:text-sm text-kajel-muted leading-relaxed">
              A diferencia de las flores frescas que duran solo unos días, nuestros girasoles en chenille conservan su textura aterciopelada, color vivo y valor sentimental por siempre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl rounded-tr-3xl bg-kajel-cream/60 border border-kajel-border/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber border border-amber-200/60 shadow-2xs">
                <ChenilleSunflowerIcon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-base font-bold text-kajel-dark">Técnica Chenille Aterciopelada</h3>
              <p className="text-xs text-kajel-muted leading-relaxed">
                Moldeamos pétalo por pétalo con limpiapipas chenille de alta densidad, logrando flores mullidas, resistentes y con un tacto delicado único.
              </p>
            </div>

            <div className="p-6 rounded-2xl rounded-tl-3xl bg-kajel-cream/60 border border-kajel-border/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber border border-amber-200/60 shadow-2xs">
                <Sparkles className="w-5 h-5 text-kajel-amber" />
              </div>
              <h3 className="font-headline text-base font-bold text-kajel-dark">Joyas Giratorias Inoxidables</h3>
              <p className="text-xs text-kajel-muted leading-relaxed">
                Nuestros gift boxes incorporan anillos y dijes en acero quirúrgico dorado con mecanismo giratorio antiestrés, diseñados para acompañarla siempre.
              </p>
            </div>

            <div className="p-6 rounded-2xl rounded-tr-3xl bg-kajel-cream/60 border border-kajel-border/60 space-y-3 hover:shadow-xs transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-kajel-warm flex items-center justify-center text-kajel-amber border border-amber-200/60 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-kajel-amber" />
              </div>
              <h3 className="font-headline text-base font-bold text-kajel-dark">Atención Cálida & Entrega Puntual</h3>
              <p className="text-xs text-kajel-muted leading-relaxed">
                Te enviamos foto previa de tu ramo terminado por WhatsApp, caligrafiamos tu dedicatoria en tarjeta fina y coordinamos la ruta de entrega en Lima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-label="Opiniones de clientes" className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-kajel-amber tracking-wider block">
            Historias & Experiencias Reales
          </span>
          <h2 className="font-headline text-2xl font-bold text-kajel-dark">
            Lo que dicen quienes ya regalaron Kajel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-kajel-border/60 shadow-2xs space-y-3">
            <div className="flex text-kajel-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-kajel-gold text-kajel-gold" />
              ))}
            </div>
            <p className="text-xs text-kajel-muted italic leading-relaxed">
              "¡Mi novia quedó fascinada con la Patita Novia y las luces! El girasol es idéntico a las fotos y la cajita llegó perfecta y puntual a Miraflores."
            </p>
            <div className="pt-2 border-t border-dashed border-kajel-border/50 flex items-center justify-between text-xs">
              <span className="font-bold text-kajel-dark">Diego M.</span>
              <span className="text-[#78716c]">Miraflores, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-kajel-border/60 shadow-2xs space-y-3">
            <div className="flex text-kajel-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-kajel-gold text-kajel-gold" />
              ))}
            </div>
            <p className="text-xs text-kajel-muted italic leading-relaxed">
              "El pack carnerita con el anillo giratorio es hermoso y súper delicado. La atención por WhatsApp fue muy amable y resolvieron mis dudas al toque."
            </p>
            <div className="pt-2 border-t border-dashed border-kajel-border/50 flex items-center justify-between text-xs">
              <span className="font-bold text-kajel-dark">Valeria C.</span>
              <span className="text-[#78716c]">Surco, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-kajel-border/60 shadow-2xs space-y-3">
            <div className="flex text-kajel-gold gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-kajel-gold text-kajel-gold" />
              ))}
            </div>
            <p className="text-xs text-kajel-muted italic leading-relaxed">
              "Aproveché la preventa con las luces hada y los bombones de regalo. Llegó puntual el 21 de septiembre como prometieron. La calidad del chenille es 10/10."
            </p>
            <div className="pt-2 border-t border-dashed border-kajel-border/50 flex items-center justify-between text-xs">
              <span className="font-bold text-kajel-dark">Carlos L.</span>
              <span className="text-[#78716c]">San Borja, Lima</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-3xl bg-kajel-amber text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-md">
          {/* Decorative craft background elements */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-kajel-gold/20 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="inline-block px-3 py-1 bg-kajel-yellow text-kajel-brown rounded-full text-xs font-bold shadow-2xs">
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
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel, deseo personalizar un pedido de Flores Amarillas para este 21 de Septiembre.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-kajel-amber hover:bg-kajel-warm active:bg-amber-100 font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-5 h-5 text-kajel-amber" />
                <span>Conversar con un Asesor (+51 970 480 398)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

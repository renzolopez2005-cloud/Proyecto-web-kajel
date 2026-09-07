import React, { useState } from 'react';
import { Product, ProductVariant, ActiveScreen } from '../types';
import { PRODUCTS, IMAGES, WHATSAPP_PHONE, WHATSAPP_DISPLAY, PRESET_DEDICATIONS, INSTAGRAM_HANDLE } from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Sparkles, 
  Lock, 
  RotateCw, 
  Share2, 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  Sun, 
  ShieldCheck, 
  Truck, 
  Gift, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Camera, 
  PlayCircle, 
  ThumbsUp, 
  Layers, 
  Flame, 
  Edit3 
} from 'lucide-react';

interface BlueprintViewProps {
  onNavigateScreen: (screen: ActiveScreen) => void;
  onAddToCart: (product: Product, variant?: ProductVariant, dedication?: string) => void;
  onOpenProductDetail: (product: Product) => void;
  cartCount: number;
}

export const BlueprintView: React.FC<BlueprintViewProps> = ({
  onNavigateScreen,
  onAddToCart,
  onOpenProductDetail,
  cartCount,
}) => {
  // State for Level 3 interactive product in the blueprint
  const [selectedVariantId, setSelectedVariantId] = useState<'patita' | 'pollita' | 'carnerita'>('patita');
  const [currentMainImage, setCurrentMainImage] = useState<string>(IMAGES.galleryV1Full);
  const [dedicationText, setDedicationText] = useState<string>(PRESET_DEDICATIONS[0]);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  // Find Gift Box V1 for reference
  const giftBoxProduct = PRODUCTS.find((p) => p.id === 'gift-box-v1-patita') || PRODUCTS[2];

  const handleVariantChange = (vId: 'patita' | 'pollita' | 'carnerita') => {
    setSelectedVariantId(vId);
    if (vId === 'patita') setCurrentMainImage(IMAGES.galleryV1Full);
    if (vId === 'pollita') setCurrentMainImage(IMAGES.galleryV2Full);
    if (vId === 'carnerita') setCurrentMainImage(IMAGES.galleryCarneritaFull);
  };

  const getActiveVariant = (): ProductVariant | undefined => {
    return giftBoxProduct.variants?.find((v) => v.id === selectedVariantId);
  };

  const handleQuickAdd = (product: Product, variant?: ProductVariant) => {
    onAddToCart(product, variant, dedicationText);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const currentVariant = getActiveVariant();
  const whatsAppLink = createProductWhatsAppLink(giftBoxProduct, currentVariant, dedicationText);

  return (
    <div className="custom-blueprint-bg py-8 space-y-12">
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#b45309] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
          <Gift className="w-5 h-5 text-[#f59e0b]" />
          <div>
            <p className="font-bold text-sm">¡Agregado a tu Bolsa de Regalos!</p>
            <p className="text-xs text-[#fde68a]">Preventa con Luces Hada & Bombones incluidos</p>
          </div>
        </div>
      )}

      {/* INTRODUCTORY BANNER ARCHITECTURE CONTEXT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-xl p-6 bg-white shadow-sm border border-[#e7e2d7]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#b45309] font-semibold text-xs bg-[#fef3c7] px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Estructura de Venta Directa & Campaña Viral</span>
            </div>
            <h2 className="font-headline text-xl md:text-2xl text-[#1c1917] font-bold">
              Flujo Omnicanal para Pedidos de Flores Amarillas
            </h2>
            <p className="font-body text-sm text-[#57534e] leading-relaxed">
              Estructura pensada para transformar tráfico de TikTok/Instagram en compras rápidas mediante WhatsApp asistido y catálogo interactivo de Preventa con precios reducidos y regalos exclusivos (luces hada y mini Bon o bon).
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#fffbeb] p-3 rounded-xl border border-[#e7e2d7]/30 flex-shrink-0">
            <div className="text-center px-3 border-r border-[#e7e2d7]/40">
              <span className="block font-headline text-xl font-bold text-[#b45309]">4</span>
              <span className="text-[11px] font-bold text-[#57534e]">Packs Estrella</span>
            </div>
            <div className="text-center px-3 border-r border-[#e7e2d7]/40">
              <span className="block font-headline text-xl font-bold text-[#b45309]">100%</span>
              <span className="text-[11px] font-bold text-[#57534e]">Artesanal Eterno</span>
            </div>
            <div className="text-center px-3">
              <span className="block font-headline text-xl font-bold text-[#78350f]">S/ 13.90</span>
              <span className="text-[11px] font-bold text-[#57534e]">Desde Preventa</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* NIVEL 1: HOME PAGE (LANDING DE CONVERSIÓN KAJEL)           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#b45309] text-white flex items-center justify-center font-bold text-xs">
              N1
            </span>
            <div>
              <h3 className="font-headline text-lg font-bold text-[#b45309]">
                NIVEL 1: Página de Inicio (Home Landing Page)
              </h3>
              <p className="font-body text-xs text-[#57534e]">
                Ruta principal:{' '}
                <code className="bg-[#fef3c7] px-2 py-0.5 rounded text-[#1c1917] font-mono text-[11px]">
                  / (Home)
                </code>
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateScreen('home')}
            className="text-xs font-semibold px-3 py-1 bg-[#fef3c7] hover:bg-[#fde68a] text-[#b45309] rounded-full transition-colors flex items-center gap-1"
          >
            <span>Ver Pantalla Completa</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* BROWSER FRAME CONTAINER FOR HOME */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-[#e7e2d7]/40 bg-white" id="live-preview">
          {/* Mock Browser Bar */}
          <div className="bg-[#fef3c7] px-4 py-2.5 flex items-center justify-between border-b border-[#e7e2d7]/30">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ba1a1a]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffb77d]"></span>
              <span className="ml-4 font-body text-xs text-[#57534e] flex items-center gap-1.5 bg-white px-4 py-1 rounded-md border border-[#e7e2d7]/20">
                <Lock className="w-3 h-3 text-[#b45309]" />
                <span className="font-mono">https://kajel.pe/flores-amarillas</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#57534e]">
              <RotateCw className="w-3.5 h-3.5 cursor-pointer hover:text-[#b45309]" />
              <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-[#b45309]" />
            </div>
          </div>

          {/* MOCKUP CONTENT: KAJEL STOREFRONT HEADER */}
          <div className="border-b border-[#e7e2d7]/20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
              {/* Brand Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                  <Sparkles className="w-6 h-6 fill-[#b45309]" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigateScreen('home')}
                    className="font-headline text-lg md:text-xl font-bold text-[#b45309] tracking-tight text-left block"
                  >
                    Kajel Flores Amarillas
                  </button>
                  <span className="block text-xs font-normal text-[#57534e] -mt-1">
                    Detalles hechos a mano • {INSTAGRAM_HANDLE}
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => onNavigateScreen('home')}
                  className="text-[#b45309] font-bold text-sm border-b-2 border-[#b45309] pb-1"
                >
                  Inicio
                </button>
                <button
                  onClick={() => onNavigateScreen('catalogo')}
                  className="text-[#57534e] font-semibold text-sm hover:text-[#b45309] transition-colors"
                >
                  Catálogo
                </button>
                <button
                  onClick={() => onNavigateScreen('catalogo')}
                  className="text-[#57534e] font-semibold text-sm hover:text-[#b45309] transition-colors flex items-center gap-1"
                >
                  <span>Preventa</span>
                  <span className="px-1.5 py-0.2 bg-[#f59e0b] text-[#451a03] text-[10px] font-bold rounded-full">
                    Ofertas
                  </span>
                </button>
                <button
                  onClick={() => onNavigateScreen('nosotros')}
                  className="text-[#57534e] font-semibold text-sm hover:text-[#b45309] transition-colors"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => onNavigateScreen('contacto')}
                  className="text-[#57534e] font-semibold text-sm hover:text-[#b45309] transition-colors"
                >
                  Contacto
                </button>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <a
                  className="hidden sm:inline-flex items-center gap-2 bg-[#b45309] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#d97706] transition-all shadow-sm"
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar sobre las Flores Amarillas en preventa.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir por WhatsApp</span>
                </a>
                <div className="flex items-center gap-1 border-l border-[#e7e2d7]/30 pl-3">
                  <button 
                    onClick={() => onNavigateScreen('catalogo')}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#57534e] hover:bg-[#fef3c7] transition-colors" 
                    title="Favoritos"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onNavigateScreen('producto')}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#57534e] hover:bg-[#fef3c7] transition-colors relative" 
                    title="Bolsa de regalos"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#f59e0b] text-[#451a03] text-[10px] font-bold rounded-full flex items-center justify-center">
                      {cartCount || 2}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STORE HERO BANNER */}
          <div className="relative bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/40 p-6 md:p-12 overflow-hidden border-b border-[#e7e2d7]/20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
                  <Sun className="w-3.5 h-3.5 text-[#b45309]" />
                  <span>Tradición Flores Amarillas • Amor Eterno</span>
                </div>
                <h2 className="font-headline text-2xl md:text-4xl text-[#1c1917] font-extrabold tracking-tight leading-tight">
                  “Ella sabía que él sabía que algún día pasaría que vendría a buscarla con sus{' '}
                  <span className="text-[#b45309] underline decoration-[#f59e0b] decoration-wavy">
                    Flores Amarillas
                  </span>”
                </h2>
                <p className="font-body text-sm md:text-base text-[#57534e] max-w-xl leading-relaxed">
                  Sorprende con ramos y gift boxes de girasoles eternos tejidos con amor, luces de hada, peluches nupciales exclusivos y joyas giratorias.{' '}
                  <strong className="text-[#1c1917]">
                    Reserva hoy en Preventa y asegura tu entrega con bombones gratis.
                  </strong>
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById('catalogo');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-xl bg-[#b45309] text-white font-bold text-sm shadow-sm hover:bg-[#d97706] transition-all flex items-center gap-2"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Ver Colección Preventa</span>
                  </button>
                  <a
                    className="px-6 py-3 rounded-xl bg-[#fef3c7] text-[#1c1917] font-bold text-sm border border-[#e7e2d7]/40 hover:bg-[#fef3c7] transition-all flex items-center gap-2"
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel, deseo consultar por los pedidos de Flores Amarillas.')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#b45309]" />
                    <span>Pedir por WhatsApp ({WHATSAPP_DISPLAY})</span>
                  </a>
                </div>

                {/* Trust Points */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#e7e2d7]/30">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#b45309] fill-[#b45309]" />
                    <span className="font-body text-xs text-[#57534e]">100% Hecho a mano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#b45309]" />
                    <span className="font-body text-xs text-[#57534e]">Envíos a todo Lima</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#b45309]" />
                    <span className="font-body text-xs text-[#57534e]">Tarjeta Gratis</span>
                  </div>
                </div>
              </div>

              {/* HERO PHOTO HIGHLIGHT CLUSTER (REAL FLYER PHOTOS) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 relative">
                <div className="space-y-3">
                  <div 
                    onClick={() => onOpenProductDetail(PRODUCTS[1])}
                    className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                  >
                    <img
                      alt="Gift Flores Amarillas con Carnerita y Anillo Giratorio"
                      className="w-full h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      src={IMAGES.carneritaTop}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-center shadow-xs">
                      <span className="text-[11px] font-bold text-[#b45309] block">Pack Carnerita</span>
                      <span className="text-xs font-bold text-[#1c1917]">S/ 39.90</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => onOpenProductDetail(PRODUCTS[3])}
                    className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                  >
                    <img
                      alt="Gift Box Flores Amarillas Versión 2 Pollita Novia"
                      className="w-full h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      src={IMAGES.pollitaHero}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-[#f59e0b] text-[#451a03] text-[10px] px-2 py-0.5 rounded-full font-bold shadow-xs">
                      Preventa
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div 
                    onClick={() => onOpenProductDetail(PRODUCTS[2])}
                    className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                  >
                    <img
                      alt="Gift Box Flores Amarillas Versión 1 Patita Novia"
                      className="w-full h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      src={IMAGES.patitaHero}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-center shadow-xs">
                      <span className="text-[11px] font-bold text-[#b45309] block">Gift Box Joyas + Patita</span>
                      <span className="text-xs font-bold text-[#b45309]">S/ 59.90</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#fef08a] rounded-xl text-center space-y-1 shadow-xs border border-[#e7e2d7]/30">
                    <Gift className="w-5 h-5 text-[#b45309] mx-auto" />
                    <p className="text-xs font-bold text-[#451a03]">Luces Hada de Regalo</p>
                    <p className="text-[10px] text-[#78350f] leading-tight">En todos los pedidos de preventa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE TREE CONNECTOR LINE */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="w-1 h-12 node-connector-line rounded-full"></div>
        <div className="px-5 py-2 bg-[#b45309] text-white rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>RAMAS ESTRATÉGICAS DE NAVEGACIÓN (NIVEL 2)</span>
        </div>
        <div className="w-1 h-12 node-connector-line rounded-full"></div>
      </div>

      {/* ========================================================= */}
      {/* NIVEL 2: LAS 3 RAMAS PRINCIPALES (CATÁLOGO / HISTORIA / PEDIDOS) */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= RAMA A: CATÁLOGO PRODUCTOS REALES ================= */}
        <div className="lg:col-span-2 space-y-4" id="catalogo">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e7e2d7]/30 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold text-xs">
                2A
              </span>
              <div>
                <h3 className="font-headline text-base font-bold text-[#b45309]">
                  Rama A: Catálogo Flores Amarillas
                </h3>
                <p className="font-body text-xs text-[#57534e] font-mono">/catalogo-flores-amarillas</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-[#fef3c7] text-[#57534e] rounded-full">
              4 Productos Disponibles
            </span>
          </div>

          {/* 4 EXACT PRODUCTS FROM FLYERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PRODUCT 1: RAMO GIRASOL */}
            <div className="rounded-xl border border-[#e7e2d7]/30 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-4 space-y-3">
                <div className="relative h-48 rounded-lg overflow-hidden bg-[#fffbeb] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-t from-[#fef3c7] to-[#fffbeb] flex items-center justify-center p-4 text-center">
                    <div className="space-y-2">
                      <Sun className="w-14 h-14 text-[#f59e0b] mx-auto fill-[#f59e0b]" />
                      <p className="text-xs font-semibold text-[#57534e]">
                        Ramo individual artesanal con cinta "Love is Love"
                      </p>
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] bg-[#fef3c7] text-[#1c1917] font-bold">
                    Opción Accesible
                  </span>
                </div>

                <div>
                  <h4 className="font-headline text-base font-bold text-[#1c1917]">Ramo Girasol</h4>
                  <p className="text-xs text-[#57534e]">Detalle floral con follaje y dulces</p>
                </div>

                <div className="bg-[#fffbeb] p-3 rounded-lg space-y-1.5 text-xs">
                  <span className="text-[11px] text-[#b45309] uppercase font-bold block">Contiene:</span>
                  <ul className="space-y-1 text-[#1c1917]">
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Hermoso ramo de un girasol con follaje y margaritas</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Tarjeta dedicatoria</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#78350f] mt-0.5 fill-[#78350f] flex-shrink-0" />
                      <span className="italic text-[#57534e]">Bon o bon mini (Cant. 2) - Válido para preventa</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                  <div>
                    <span className="text-[11px] text-[#78716c] block line-through">PRECIO: S/ 16.00</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#b45309] font-bold">PREVENTA:</span>
                      <span className="font-headline text-lg text-[#b45309] font-bold">S/ 13.90</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#fef08a] text-[#451a03] text-xs font-bold">
                    Ahorra 13%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickAdd(PRODUCTS[0])}
                    className="py-2 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Agregar</span>
                  </button>
                  <a
                    className="py-2 bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel, deseo el Ramo Girasol en preventa (S/ 13.90)')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir Ramo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* PRODUCT 2: GIFT FLORES AMARILLAS */}
            <div className="rounded-xl border border-[#e7e2d7]/30 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-4 space-y-3">
                <div className="relative h-48 rounded-lg overflow-hidden bg-[#fffbeb]">
                  <img
                    alt="Gift Flores Amarillas con Carnerita y Anillo Giratorio"
                    className="w-full h-full object-cover"
                    src={IMAGES.productCarnerita}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] bg-[#b45309] text-white font-bold flex items-center gap-1 shadow-xs">
                    <Flame className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                    Más Vendido
                  </span>
                </div>

                <div>
                  <h4 className="font-headline text-base font-bold text-[#1c1917]">Gift Flores Amarillas</h4>
                  <p className="text-xs text-[#57534e]">Con llavero carnerita y anillo girasol</p>
                </div>

                <div className="bg-[#fffbeb] p-3 rounded-lg space-y-1.5 text-xs">
                  <span className="text-[11px] text-[#b45309] uppercase font-bold block">Contiene:</span>
                  <ul className="space-y-1 text-[#1c1917]">
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Hermoso ramo de un girasol con follaje</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Llavero de carnerita de 12cm</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Anillo girasol giratorio en cajita</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#78350f] mt-0.5 fill-[#78350f] flex-shrink-0" />
                      <span>Bon o bon mini (Cant. 3)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span className="font-bold text-[#b45309]">Luces hada (Preventa) + Tarjeta</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                  <div>
                    <span className="text-[11px] text-[#78716c] block line-through">PRECIO: S/ 47.90</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#b45309] font-bold">PREVENTA:</span>
                      <span className="font-headline text-lg text-[#b45309] font-bold">S/ 39.90</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#fef08a] text-[#451a03] text-xs font-bold">
                    Ahorra S/ 8.00
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickAdd(PRODUCTS[1])}
                    className="py-2 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Agregar</span>
                  </button>
                  <a
                    className="py-2 bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel, deseo el Gift Flores Amarillas con carnerita (S/ 39.90)')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir Pack</span>
                  </a>
                </div>
              </div>
            </div>

            {/* PRODUCT 3: GIFT BOX FLORES AMARILLAS VERSIÓN 1 */}
            <div className="rounded-xl border-2 border-[#f59e0b] bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-4 space-y-3">
                <div className="relative h-52 rounded-lg overflow-hidden bg-[#fffbeb]">
                  <img
                    alt="Gift Box Flores Amarillas Versión 1 Patita Novia"
                    className="w-full h-full object-cover"
                    src={IMAGES.productPatitaV1}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] bg-[#f59e0b] text-[#451a03] font-bold shadow-xs">
                    Versión 1: Patita Novia
                  </span>
                </div>

                <div>
                  <h4 className="font-headline text-base font-bold text-[#1c1917]">
                    Gift Box Flores Amarillas (V1)
                  </h4>
                  <p className="text-xs text-[#57534e]">Caja de lujo con peluche patita y set de joyas</p>
                </div>

                <div className="bg-[#fffbeb] p-3 rounded-lg space-y-1.5 text-xs">
                  <span className="text-[11px] text-[#b45309] uppercase font-bold block">Contiene:</span>
                  <ul className="space-y-1 text-[#1c1917]">
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Ramo de girasol con follaje y margaritas</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span className="font-bold text-[#b45309]">Peluche patita novia (con velo rosa)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Set de anillo giratorio y collar de acero inox.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#78350f] mt-0.5 fill-[#78350f] flex-shrink-0" />
                      <span>Bon o bon mini (Cant. 5)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Luces Hada (Preventa) + Tarjeta dedicatoria</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                  <div>
                    <span className="text-[11px] text-[#78716c] block line-through">PRECIO: S/ 67.90</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#b45309] font-bold">PREVENTA:</span>
                      <span className="font-headline text-lg text-[#b45309] font-bold">S/ 59.90</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#fef08a] text-[#451a03] text-xs font-bold">
                    -12% OFF
                  </span>
                </div>

                <button
                  onClick={() => {
                    handleVariantChange('patita');
                    const el = document.getElementById('product-detail');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-[#b45309] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#d97706] transition-colors shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personalizar & Pedir V1</span>
                </button>
              </div>
            </div>

            {/* PRODUCT 4: GIFT BOX FLORES AMARILLAS VERSIÓN 2 */}
            <div className="rounded-xl border border-[#e7e2d7]/30 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="p-4 space-y-3">
                <div className="relative h-52 rounded-lg overflow-hidden bg-[#fffbeb]">
                  <img
                    alt="Gift Box Flores Amarillas Versión 2 Pollita Novia"
                    className="w-full h-full object-cover"
                    src={IMAGES.productPollitaV2}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] bg-[#fef08a] text-[#78350f] font-bold shadow-xs">
                    Versión 2: Pollita Novia
                  </span>
                </div>

                <div>
                  <h4 className="font-headline text-base font-bold text-[#1c1917]">
                    Gift Box Flores Amarillas (V2)
                  </h4>
                  <p className="text-xs text-[#57534e]">Caja de lujo con peluche pollita y set de joyas</p>
                </div>

                <div className="bg-[#fffbeb] p-3 rounded-lg space-y-1.5 text-xs">
                  <span className="text-[11px] text-[#b45309] uppercase font-bold block">Contiene:</span>
                  <ul className="space-y-1 text-[#1c1917]">
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Hermoso ramo de un girasol con follaje</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span className="font-bold text-[#b45309]">Peluche pollita novia (con velo nupcial)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Set de anillo giratorio y collar giratorio inox.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#78350f] mt-0.5 fill-[#78350f] flex-shrink-0" />
                      <span>Bon o bon mini (Cant. 5)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#b45309] mt-0.5 fill-[#b45309] flex-shrink-0" />
                      <span>Luces Hada (Preventa) + Tarjeta dedicatoria</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                  <div>
                    <span className="text-[11px] text-[#78716c] block line-through">PRECIO: S/ 67.90</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#b45309] font-bold">PREVENTA:</span>
                      <span className="font-headline text-lg text-[#b45309] font-bold">S/ 59.90</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#fef08a] text-[#451a03] text-xs font-bold">
                    -12% OFF
                  </span>
                </div>

                <button
                  onClick={() => {
                    handleVariantChange('pollita');
                    const el = document.getElementById('product-detail');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-[#e7e2d7]/40"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
                  <span>Personalizar & Pedir V2</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SIDEBAR RAMAS B & C ================= */}
        <div className="space-y-6">
          {/* RAMA B: /sobre-nosotros */}
          <div className="space-y-4" id="nosotros">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e7e2d7]/30 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#1c1917] flex items-center justify-center font-bold text-xs">
                  2B
                </span>
                <div>
                  <h3 className="font-headline text-base font-bold text-[#b45309]">Rama B: Nosotros</h3>
                  <p className="font-body text-xs text-[#57534e] font-mono">/sobre-nosotros</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigateScreen('nosotros')}
                className="text-xs text-[#b45309] font-bold hover:underline"
              >
                Ver
              </button>
            </div>

            {/* ARTISANAL VALUE CARD */}
            <div className="rounded-xl border border-[#e7e2d7]/30 bg-white p-5 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                  <Heart className="w-5 h-5 fill-[#b45309]" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-[#1c1917]">Hecho con Amor Eterno</h4>
                  <p className="text-xs text-[#57534e]">Filosofía artesanal Kajel</p>
                </div>
              </div>

              <p className="text-xs text-[#57534e] leading-relaxed">
                A diferencia de las flores naturales que se marchitan en pocos días, cada ramo de{' '}
                <strong className="text-[#1c1917]">Kajel</strong> es confeccionado a mano con técnicas de chenille/limpiapipas de alta densidad y telas texturizadas.
              </p>

              <div className="space-y-2 border-t border-[#e7e2d7]/20 pt-3 text-xs">
                <div className="flex items-center gap-2 text-[#1c1917]">
                  <CheckCircle2 className="w-4 h-4 text-[#b45309]" />
                  <span>Girasoles que duran por siempre</span>
                </div>
                <div className="flex items-center gap-2 text-[#1c1917]">
                  <CheckCircle2 className="w-4 h-4 text-[#b45309]" />
                  <span>Dedicatoria temática "Flores Amarillas"</span>
                </div>
                <div className="flex items-center gap-2 text-[#1c1917]">
                  <CheckCircle2 className="w-4 h-4 text-[#b45309]" />
                  <span>Luces de hada cálidas incluidas en preventa</span>
                </div>
              </div>
            </div>
          </div>

          {/* RAMA C: /pedidos-y-contacto */}
          <div className="space-y-4" id="contacto">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e7e2d7]/30 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#1c1917] flex items-center justify-center font-bold text-xs">
                  2C
                </span>
                <div>
                  <h3 className="font-headline text-base font-bold text-[#b45309]">
                    Rama C: Pedidos & Contacto
                  </h3>
                  <p className="font-body text-xs text-[#57534e] font-mono">/pedidos-y-contacto</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigateScreen('contacto')}
                className="text-xs text-[#b45309] font-bold hover:underline"
              >
                Ver
              </button>
            </div>

            {/* DIRECT PURCHASE & SOCIAL CARD */}
            <div className="rounded-xl border border-[#e7e2d7]/30 bg-white p-5 space-y-4 shadow-sm">
              <div className="bg-[#fffbeb] p-4 rounded-xl border border-[#e7e2d7]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#b45309] text-xs font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>Atención Rápida por WhatsApp</span>
                </div>
                <p className="text-xs text-[#57534e]">
                  Reserva inmediata con tu asesor Kajel para coordinar fecha y dirección de delivery en Lima.
                </p>
                <a
                  className="block text-center py-2.5 bg-[#b45309] text-white rounded-lg text-xs font-bold hover:bg-[#d97706] transition-colors shadow-xs"
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>

              {/* OFFICIAL SOCIAL MEDIA TILES */}
              <div>
                <span className="text-[11px] text-[#57534e] uppercase font-bold block mb-2">
                  Canales Oficiales:
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <a
                    className="p-2.5 rounded-lg bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors"
                    href="https://instagram.com/Kajel.pe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Camera className="w-4 h-4 text-[#b45309] mx-auto block mb-1" />
                    <span className="text-[11px] font-semibold text-[#1c1917] block">Instagram</span>
                  </a>
                  <a
                    className="p-2.5 rounded-lg bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors"
                    href="https://tiktok.com/@Kajel.pe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PlayCircle className="w-4 h-4 text-[#b45309] mx-auto block mb-1" />
                    <span className="text-[11px] font-semibold text-[#1c1917] block">TikTok</span>
                  </a>
                  <a
                    className="p-2.5 rounded-lg bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors"
                    href="https://facebook.com/Kajel.pe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ThumbsUp className="w-4 h-4 text-[#b45309] mx-auto block mb-1" />
                    <span className="text-[11px] font-semibold text-[#1c1917] block">Facebook</span>
                  </a>
                </div>
              </div>

              {/* PAYMENT BADGES */}
              <div className="pt-2 border-t border-[#e7e2d7]/20">
                <span className="text-[11px] text-[#57534e] block mb-2 font-medium">
                  Métodos de Pago Aceptados:
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#fef3c7] text-[#1c1917] rounded text-[11px] font-bold">
                    Yape
                  </span>
                  <span className="px-2.5 py-1 bg-[#fef3c7] text-[#1c1917] rounded text-[11px] font-bold">
                    Plin
                  </span>
                  <span className="px-2.5 py-1 bg-[#fef3c7] text-[#1c1917] rounded text-[11px] font-bold">
                    Transferencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURE TREE CONNECTOR LINE TO PRODUCT DETAIL */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="w-1 h-12 node-connector-line rounded-full"></div>
        <div className="px-5 py-2 bg-[#b45309] text-white rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span>EXPERIENCIA SINGLE PRODUCT / CONVERSIÓN FINAL (NIVEL 3)</span>
        </div>
        <div className="w-1 h-12 node-connector-line rounded-full"></div>
      </div>

      {/* ========================================================= */}
      {/* NIVEL 3: SINGLE PRODUCT DETAIL PAGE (E-COMMERCE FLOW)     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-4" id="product-detail">
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e7e2d7]/30 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#b45309] text-white flex items-center justify-center font-bold text-xs">
              N3
            </span>
            <div>
              <h3 className="font-headline text-base font-bold text-[#b45309]">
                NIVEL 3: Plantilla de Ficha de Producto (Single Product View)
              </h3>
              <p className="font-body text-xs text-[#57534e] font-mono">
                /producto/gift-box-flores-amarillas
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#fef08a] text-[#451a03] text-xs font-bold rounded-full">
            Preventa: S/ 59.90 (Antes S/ 67.90)
          </span>
        </div>

        {/* PRODUCT DETAIL FULL INTERACTIVE MOCKUP */}
        <div className="rounded-xl border border-[#e7e2d7]/40 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN: REAL IMAGE GALLERY WITH TABS */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-[#fffbeb] border border-[#e7e2d7]/20 shadow-sm">
                <img
                  alt="Gift Box Flores Amarillas Versión Seleccionada"
                  className="w-full h-80 md:h-96 object-cover transition-opacity duration-300"
                  src={currentMainImage}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#f59e0b] text-[#451a03] text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                  ¡Preventa Exclusiva! (-12%)
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-[#1c1917] shadow-xs">
                  Incluye Luces Hada & Joyas
                </div>
              </div>

              {/* THUMBNAIL SELECTOR */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedVariantId === 'patita'
                      ? 'border-[#b45309] ring-2 ring-[#b45309]/30'
                      : 'border-transparent hover:border-[#e7e2d7]'
                  }`}
                  onClick={() => handleVariantChange('patita')}
                >
                  <img
                    alt="V1 Patita"
                    className="w-full h-20 object-cover"
                    src={IMAGES.galleryV1Thumb}
                    referrerPolicy="no-referrer"
                  />
                  <span className="block text-[11px] font-bold text-center py-1 bg-[#fef3c7] text-[#1c1917] truncate">
                    V1: Patita Novia
                  </span>
                </button>

                <button
                  className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedVariantId === 'pollita'
                      ? 'border-[#b45309] ring-2 ring-[#b45309]/30'
                      : 'border-transparent hover:border-[#e7e2d7]'
                  }`}
                  onClick={() => handleVariantChange('pollita')}
                >
                  <img
                    alt="V2 Pollita"
                    className="w-full h-20 object-cover"
                    src={IMAGES.galleryV2Thumb}
                    referrerPolicy="no-referrer"
                  />
                  <span className="block text-[11px] font-bold text-center py-1 bg-[#fef3c7] text-[#1c1917] truncate">
                    V2: Pollita Novia
                  </span>
                </button>

                <button
                  className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedVariantId === 'carnerita'
                      ? 'border-[#b45309] ring-2 ring-[#b45309]/30'
                      : 'border-transparent hover:border-[#e7e2d7]'
                  }`}
                  onClick={() => handleVariantChange('carnerita')}
                >
                  <img
                    alt="V3 Carnerita"
                    className="w-full h-20 object-cover"
                    src={IMAGES.galleryCarneritaThumb}
                    referrerPolicy="no-referrer"
                  />
                  <span className="block text-[11px] font-bold text-center py-1 bg-[#fef3c7] text-[#1c1917] truncate">
                    Pack Carnerita
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT OPTIONS & CUSTOM DEDICATION NOTE */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#b45309] font-bold">
                    Kajel Colección Exclusiva
                  </span>
                  <span className="text-[#e7e2d7]">•</span>
                  <span className="text-xs text-[#57534e]">Stock Limitado para Septiembre</span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl text-[#1c1917] font-bold leading-tight">
                  Gift Box Flores Amarillas (Peluche Novia & Set de Joyas Giratorias)
                </h3>
              </div>

              {/* PRICE CLUSTER */}
              <div className="p-4 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#78716c] line-through block">Precio Normal: S/ 67.90</span>
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-2xl md:text-3xl text-[#b45309] font-bold">
                      S/ 59.90
                    </span>
                    <span className="text-xs bg-[#f59e0b] text-[#451a03] px-2 py-0.5 rounded font-bold">
                      PREVENTA
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-[#57534e]">
                  <span className="text-[#b45309] font-bold block">Ahorro de S/ 8.00</span>
                  <span>+ 5 Mini Bon o bon gratis</span>
                </div>
              </div>

              {/* VARIANT SELECTION TABS */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1c1917]">
                  Selecciona la Versión del Peluche:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => handleVariantChange('patita')}
                    className={`relative flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedVariantId === 'patita'
                        ? 'border-[#b45309] bg-[#fdfbf7]'
                        : 'border-[#e7e2d7]/50 bg-white hover:border-[#b45309]/40'
                    }`}
                  >
                    <input
                      checked={selectedVariantId === 'patita'}
                      onChange={() => handleVariantChange('patita')}
                      className="text-[#b45309] focus:ring-[#b45309]"
                      name="pack_variant"
                      type="radio"
                      value="patita"
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs text-[#1c1917] block font-bold">Versión 1: Patita Novia</span>
                      <span className="text-[11px] text-[#57534e]">Con velo nupcial rosa</span>
                    </div>
                  </label>

                  <label
                    onClick={() => handleVariantChange('pollita')}
                    className={`relative flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedVariantId === 'pollita'
                        ? 'border-[#b45309] bg-[#fdfbf7]'
                        : 'border-[#e7e2d7]/50 bg-white hover:border-[#b45309]/40'
                    }`}
                  >
                    <input
                      checked={selectedVariantId === 'pollita'}
                      onChange={() => handleVariantChange('pollita')}
                      className="text-[#b45309] focus:ring-[#b45309]"
                      name="pack_variant"
                      type="radio"
                      value="pollita"
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs text-[#1c1917] block font-bold">Versión 2: Pollita Novia</span>
                      <span className="text-[11px] text-[#57534e]">Con velo blanco nupcial</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* INCLUSIONS LIST ACCORDING TO FLYER */}
              <div className="space-y-2">
                <span className="text-xs text-[#1c1917] font-bold block">Lo que incluye tu Gift Box:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c1917]">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb]">
                    <Sun className="w-4 h-4 text-[#b45309]" />
                    <span>Ramo girasol con margaritas</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb]">
                    <Sparkles className="w-4 h-4 text-[#b45309]" />
                    <span>Set anillo + collar giratorio inox</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb]">
                    <Gift className="w-4 h-4 text-[#b45309]" />
                    <span>Peluche nupcial a elección</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb]">
                    <Star className="w-4 h-4 text-[#b45309]" />
                    <span>5 Bombones mini Bon o bon</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb] col-span-1 sm:col-span-2">
                    <Sun className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                    <span className="font-bold text-[#b45309]">
                      Luces Hada cálidas instaladas (Regalo preventa)
                    </span>
                  </div>
                </div>
              </div>

              {/* CUSTOM DEDICATION NOTE BUILDER */}
              <div className="space-y-2 p-4 rounded-xl border border-[#f59e0b] bg-[#fffbeb]">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-[#b45309]" htmlFor="dedicatoria-blueprint">
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Personalizar Tarjeta Dedicatoria:</span>
                  </label>
                  <span className="text-[10px] text-[#57534e]">Frase impresa incluida</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PRESET_DEDICATIONS.slice(0, 2).map((phrase, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDedicationText(phrase)}
                      className="text-[10px] bg-white text-[#b45309] border border-[#e7e2d7]/50 hover:bg-[#fef3c7] px-2 py-0.5 rounded-full text-left"
                    >
                      " {phrase.substring(0, 38)}... "
                    </button>
                  ))}
                </div>

                <textarea
                  className="w-full rounded-lg border border-[#e7e2d7] bg-white p-3 text-xs text-[#1c1917] focus:border-[#b45309] focus:ring-1 focus:ring-[#b45309] outline-none"
                  id="dedicatoria-blueprint"
                  rows={2}
                  value={dedicationText}
                  onChange={(e) => setDedicationText(e.target.value)}
                  placeholder="Ej: Para mi persona favorita: 'Ella sabía que él sabía que vendría a buscarla con sus flores amarillas...'"
                />
              </div>

              {/* CALL TO ACTION BUTTON */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleQuickAdd(giftBoxProduct, currentVariant)}
                    className="py-3.5 rounded-xl bg-[#fef3c7] text-[#1c1917] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#fef3c7] transition-all border border-[#e7e2d7]/50 shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#b45309]" />
                    <span>Agregar a mi Bolsa</span>
                  </button>

                  <a
                    className="py-3.5 rounded-xl bg-[#b45309] text-white font-headline text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#d97706] transition-all"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pedir por WhatsApp 💬</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-[#57534e]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#b45309]" />
                    Pago seguro
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#b45309]" />
                    Entregas programadas
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#b45309] fill-[#b45309]" />
                    +500 clientes felices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE FOOTPRINT & FLOW EXPLANATION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="p-6 rounded-xl bg-[#fef3c7] border border-[#e7e2d7]/30 text-[#1c1917] space-y-3">
          <div className="flex items-center gap-2 text-[#b45309] font-headline text-base font-bold">
            <Sparkles className="w-5 h-5 text-[#f59e0b]" />
            <span>Estrategia de Conversión de la Tienda Kajel</span>
          </div>
          <p className="font-body text-xs md:text-sm text-[#57534e] leading-relaxed">
            La arquitectura conecta directamente los flyers promocionales físicos y digitales con una ruta de 2 clics hacia WhatsApp. Los clientes seleccionan entre el <strong>Ramo Girasol (S/ 13.90)</strong>, el <strong>Gift Carnerita (S/ 39.90)</strong> o las <strong>Gift Boxes con Peluches Novia (S/ 59.90)</strong>, asegurando incentivos de preventa (luces de hada y bombones Bon o bon) que incrementan el ticket promedio y la fidelidad hacia la marca <strong>{INSTAGRAM_HANDLE}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

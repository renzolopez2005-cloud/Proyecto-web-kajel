import React, { useState, useEffect } from 'react';
import { Product, ProductVariant } from '../types';
import { PRESET_DEDICATIONS, WHATSAPP_PHONE, WHATSAPP_DISPLAY } from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Sun, 
  Sparkles, 
  Gift, 
  ShieldCheck, 
  Truck, 
  Heart, 
  MessageCircle, 
  Plus, 
  Minus, 
  Check, 
  X,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !product) return null;

  // Gallery state
  const [activeImage, setActiveImage] = useState<string>(product.gallery[0]?.url || product.image);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [dedicationText, setDedicationText] = useState<string>(PRESET_DEDICATIONS[0]);
  const [customRecipient, setCustomRecipient] = useState<string>('');

  // Update gallery if product changes
  useEffect(() => {
    if (product.gallery[0]) {
      setActiveImage(product.gallery[0].url);
    } else {
      setActiveImage(product.image);
    }
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(undefined);
    }
    setQuantity(1);
    setDedicationText(PRESET_DEDICATIONS[0]);
    setCustomRecipient('');
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const unitPrice = product.price + (selectedVariant?.priceDiff || 0);
  const finalPrice = unitPrice * quantity;
  const normalTotal = product.normalPrice * quantity;
  const savingsTotal = normalTotal - finalPrice;

  const fullDedication = customRecipient.trim()
    ? `Para ${customRecipient.trim()}: "${dedicationText.trim()}"`
    : dedicationText.trim();

  const whatsAppLink = createProductWhatsAppLink(product, selectedVariant, fullDedication, quantity);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#e7e2d7] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Sticky Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e7e2d7]/60 bg-[#fffbeb]/90 backdrop-blur-xs flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#b45309]">
              Preventa Oficial — Septiembre
            </span>
            <span className="text-[11px] text-[#78716c] hidden sm:inline">
              • Elaborado artesanalmente a mano
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-amber-100 text-[#57534e] hover:text-[#b45309] flex items-center justify-center transition-colors cursor-pointer border border-[#e7e2d7]/50"
            title="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: IMAGE VIEWER & GALLERY */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#fffbeb] border border-[#e7e2d7]/30 shadow-md">
                <img
                  alt={product.name}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover object-[center_30%]"
                  src={activeImage}
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-3 left-3 bg-[#f59e0b] text-[#451a03] text-xs px-3 py-1 rounded-full font-bold shadow-xs">
                  {product.discountLabel}
                </div>

                {savingsTotal > 0 && (
                  <div className="absolute top-3 right-3 bg-[#1c1917]/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
                    Ahorras S/ {savingsTotal.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Thumbnails row */}
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img.url)}
                      className={`relative rounded-xl overflow-hidden h-16 border-2 transition-all cursor-pointer ${
                        activeImage === img.url
                          ? 'border-[#b45309] shadow-xs scale-95'
                          : 'border-[#e7e2d7] opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        alt={img.label}
                        className="w-full h-full object-cover"
                        src={img.thumb || img.url}
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Handcrafted Guarantee Box */}
              <div className="p-4 rounded-2xl bg-[#fffbeb] border border-[#e7e2d7]/60 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#b45309]">
                  <Sun className="w-4 h-4 fill-[#b45309]" />
                  <span>Beneficios de la Preventa Kajel:</span>
                </div>
                <ul className="space-y-1 text-[#57534e] text-[11px]">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Luces Hada cálidas</strong> de regalo instaladas.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Bombones Bon o bon</strong> de cortesía.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Tarjeta dedicatoria</strong> con caligrafía personalizada.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: DETAILS, DEDICATION & WHATSAPP ORDER */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block">
                  {product.category === 'boxes' ? 'Gift Box Artesanal' : 'Ramo de Flores Eternas'}
                </span>
                <h2 className="font-headline text-2xl font-bold text-[#1c1917] mt-1">
                  {product.name}
                </h2>
                <p className="text-xs text-[#57534e] mt-1 leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              {/* Pricing Display */}
              <div className="p-4 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#78716c] line-through block">
                    Precio regular: S/ {(product.normalPrice * quantity).toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-2xl md:text-3xl font-bold text-[#b45309]">
                      S/ {finalPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-[#b45309] bg-[#fef08a] px-2 py-0.5 rounded-full">
                      Preventa
                    </span>
                  </div>
                </div>

                {savingsTotal > 0 && (
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-700 font-bold block">
                      Ahorras: S/ {savingsTotal.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-[#78716c]">Cupos limitados</span>
                  </div>
                )}
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1c1917] block">
                  Contenido incluido en tu pedido:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#fdfbf7] border border-[#e7e2d7]/50">
                      <Check className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
                      <span className="text-[11px] text-[#57534e]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#1c1917] block">
                    Elige el modelo o personaje:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariant?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          onClick={() => {
                            setSelectedVariant(v);
                            if (v.image) setActiveImage(v.image);
                          }}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#b45309] bg-[#fef3c7] text-[#1c1917] ring-1 ring-[#b45309]/30 font-bold'
                              : 'border-[#e7e2d7] bg-white text-[#57534e] hover:bg-[#fffbeb]'
                          }`}
                        >
                          <div className="text-xs">{v.name}</div>
                          {v.description && (
                            <div className="text-[10px] text-[#78716c] line-clamp-1">{v.description}</div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Custom Dedication Section */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#fdfbf7] border border-[#e7e2d7]/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c1917] flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#b45309] fill-[#b45309]" />
                    <span>Dedicatoria en Tarjeta Fina (Gratis):</span>
                  </span>
                  <span className="text-[10px] text-[#b45309] font-bold">100% Caligrafiada</span>
                </div>

                <input
                  type="text"
                  placeholder="¿Para quién es? (Ej: Mi amor, Laura, Mamá)"
                  value={customRecipient}
                  onChange={(e) => setCustomRecipient(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#e7e2d7] focus:border-[#b45309] outline-none text-[#1c1917]"
                />

                {/* Preset Chips */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-[#78716c] font-semibold block">Frases sugeridas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_DEDICATIONS.map((preset, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setDedicationText(preset)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition-colors cursor-pointer text-left ${
                          dedicationText === preset
                            ? 'bg-[#b45309] text-white border-[#b45309]'
                            : 'bg-white text-[#57534e] border-[#e7e2d7] hover:bg-[#fffbeb]'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={dedicationText}
                  onChange={(e) => setDedicationText(e.target.value)}
                  placeholder="O escribe tu mensaje especial aquí..."
                  className="w-full text-xs p-2.5 rounded-xl bg-white border border-[#e7e2d7] focus:border-[#b45309] outline-none text-[#1c1917]"
                />

                {/* Card Preview */}
                <div className="p-3 bg-white border-2 border-dashed border-[#e7e2d7] rounded-xl text-center shadow-2xs">
                  <span className="text-[9px] uppercase tracking-widest text-[#78716c] block mb-1">
                    Vista previa de tu tarjeta
                  </span>
                  <p className="font-serif italic text-xs text-[#1c1917] max-w-sm mx-auto">
                    {customRecipient ? `Para ${customRecipient}: ` : ''}
                    "{dedicationText || 'Escribe tu dedicatoria especial...'}"
                  </p>
                  <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-[#f59e0b]">
                    <Sun className="w-3 h-3 fill-[#f59e0b]" />
                    <span>Kajel Flores Amarillas</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector & Direct WhatsApp Action */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#1c1917]">Cantidad:</span>
                  <div className="flex items-center border border-[#e7e2d7] rounded-lg bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-[#57534e] hover:bg-[#fef3c7] rounded-l-lg transition-colors cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center text-xs font-bold text-[#1c1917]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#57534e] hover:bg-[#fef3c7] rounded-r-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-xs text-[#57534e]">
                    Total: <strong className="text-[#b45309]">S/ {finalPrice.toFixed(2)}</strong>
                  </span>
                </div>

                {/* Primary CTA: WhatsApp direct reservation */}
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4d] text-white font-headline text-sm font-bold rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir por WhatsApp — S/ {finalPrice.toFixed(2)}</span>
                </a>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#57534e] pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#b45309]" />
                    Pago Yape, Plin o Transferencia
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#b45309]" />
                    Envíos programados en Lima
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

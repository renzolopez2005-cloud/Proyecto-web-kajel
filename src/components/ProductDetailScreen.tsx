import React, { useState, useEffect } from 'react';
import { Product, ProductVariant } from '../types';
import { PRODUCTS, IMAGES, PRESET_DEDICATIONS, WHATSAPP_PHONE, WHATSAPP_DISPLAY } from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Sun, 
  Sparkles, 
  Gift, 
  Star, 
  ShieldCheck, 
  Truck, 
  Heart, 
  MessageCircle, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Check, 
  Share2, 
  Edit3, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

interface ProductDetailScreenProps {
  product?: Product;
  onAddToCart: (product: Product, variant?: ProductVariant, quantity?: number, dedication?: string) => void;
  onBackToCatalog: () => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product = PRODUCTS[2], // Default to Gift Box Flores Amarillas V1
  onAddToCart,
  onBackToCatalog,
}) => {
  const currentProduct = product || PRODUCTS[2];

  // Gallery state
  const [activeImage, setActiveImage] = useState<string>(currentProduct.gallery[0]?.url || currentProduct.image);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    currentProduct.variants ? currentProduct.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [dedicationText, setDedicationText] = useState<string>(PRESET_DEDICATIONS[0]);
  const [customRecipient, setCustomRecipient] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // Update gallery if product changes
  useEffect(() => {
    if (currentProduct.gallery[0]) {
      setActiveImage(currentProduct.gallery[0].url);
    } else {
      setActiveImage(currentProduct.image);
    }
    if (currentProduct.variants && currentProduct.variants.length > 0) {
      setSelectedVariant(currentProduct.variants[0]);
    } else {
      setSelectedVariant(undefined);
    }
  }, [currentProduct]);

  const handleSelectVariant = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    if (variant.image) {
      setActiveImage(variant.image);
    }
  };

  const handleAdd = () => {
    onAddToCart(currentProduct, selectedVariant, quantity, dedicationText);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const finalPrice = (currentProduct.price + (selectedVariant?.priceDiff || 0)) * quantity;
  const normalTotal = currentProduct.normalPrice * quantity;
  const savingsTotal = normalTotal - finalPrice;

  const fullDedication = customRecipient.trim()
    ? `Para ${customRecipient.trim()}: "${dedicationText.trim()}"`
    : dedicationText.trim();

  const whatsAppLink = createProductWhatsAppLink(currentProduct, selectedVariant, fullDedication);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#b45309] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
          <Gift className="w-5 h-5 text-[#f59e0b]" />
          <div>
            <p className="font-bold text-sm">¡Agregado a tu Bolsa de Regalos!</p>
            <p className="text-xs text-[#fde68a]">Cantidad: {quantity} • Luces Hada incluidas</p>
          </div>
        </div>
      )}

      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] hover:text-[#d97706] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo Preventa</span>
        </button>

        <span className="text-xs bg-[#fef08a] text-[#451a03] px-3 py-1 rounded-full font-bold">
          Campaña Preventa Oficial — Septiembre
        </span>
      </div>

      {/* Main Single Product Layout */}
      <div className="rounded-2xl border border-[#e7e2d7]/40 bg-white p-6 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: IMAGE VIEWER & GALLERY */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#fffbeb] border border-[#e7e2d7]/20 shadow-md">
              <img
                alt={currentProduct.name}
                className="w-full h-80 sm:h-96 md:h-[420px] object-cover transition-all duration-300"
                src={activeImage}
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-3 left-3 bg-[#f59e0b] text-[#451a03] text-xs px-3 py-1 rounded-full font-bold shadow-xs">
                {currentProduct.discountLabel}
              </div>

              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-[#1c1917] shadow-xs">
                Incluye Luces Hada & Bombones
              </div>
            </div>

            {/* Thumbnails row */}
            {currentProduct.gallery && currentProduct.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {currentProduct.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(item.url)}
                    className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
                      activeImage === item.url
                        ? 'border-[#b45309] ring-2 ring-[#b45309]/30 scale-[1.02]'
                        : 'border-transparent hover:border-[#e7e2d7]'
                    }`}
                  >
                    <img
                      alt={item.label}
                      className="w-full h-20 object-cover"
                      src={item.thumb}
                      referrerPolicy="no-referrer"
                    />
                    <span className="block text-[11px] font-bold text-center py-1 bg-[#fef3c7] text-[#1c1917] truncate px-1">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Reassurance guarantees */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#e7e2d7]/30 text-center">
              <div className="p-2 rounded-lg bg-[#fffbeb]">
                <Sun className="w-4 h-4 text-[#b45309] mx-auto mb-1" />
                <span className="block text-[10px] font-bold text-[#1c1917]">No se marchita</span>
                <span className="text-[9px] text-[#57534e]">Chenille eterno</span>
              </div>
              <div className="p-2 rounded-lg bg-[#fffbeb]">
                <Truck className="w-4 h-4 text-[#b45309] mx-auto mb-1" />
                <span className="block text-[10px] font-bold text-[#1c1917]">Delivery Lima</span>
                <span className="text-[9px] text-[#57534e]">A domicilio</span>
              </div>
              <div className="p-2 rounded-lg bg-[#fffbeb]">
                <ShieldCheck className="w-4 h-4 text-[#b45309] mx-auto mb-1" />
                <span className="block text-[10px] font-bold text-[#1c1917]">Pago Seguro</span>
                <span className="text-[9px] text-[#57534e]">Yape / Plin</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS, VARIANTS, DEDICATION & ACTIONS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#b45309] font-bold">
                  Kajel Colección Exclusiva
                </span>
                <span className="text-[#e7e2d7]">•</span>
                <span className="text-xs text-[#57534e]">Stock Limitado para Septiembre</span>
              </div>

              <h1 className="font-headline text-2xl sm:text-3xl text-[#1c1917] font-extrabold leading-tight">
                {currentProduct.name}
              </h1>
              <p className="font-body text-xs sm:text-sm text-[#57534e] leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* PRICE & PREVENTA BOX */}
            <div className="p-4 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#78716c] line-through block">
                  Precio Normal: S/ {normalTotal.toFixed(2)}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-headline text-3xl text-[#b45309] font-bold">
                    S/ {finalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs bg-[#f59e0b] text-[#451a03] px-2 py-0.5 rounded font-bold">
                    PREVENTA
                  </span>
                </div>
              </div>
              <div className="text-right text-xs text-[#57534e]">
                <span className="text-[#b45309] font-bold block">
                  Ahorras S/ {savingsTotal.toFixed(2)}
                </span>
                <span>+ Luces Hada & Bombones gratis</span>
              </div>
            </div>

            {/* VARIANT SELECTOR IF AVAILABLE */}
            {currentProduct.variants && currentProduct.variants.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1c1917]">
                  Selecciona la Versión del Peluche / Modelo:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProduct.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleSelectVariant(v)}
                        className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'border-[#b45309] bg-[#fdfbf7] shadow-2xs'
                            : 'border-[#e7e2d7]/50 bg-white hover:border-[#b45309]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="product_variant_option"
                          checked={isSelected}
                          onChange={() => handleSelectVariant(v)}
                          className="text-[#b45309] focus:ring-[#b45309]"
                        />
                        <div>
                          <span className="text-xs font-bold text-[#1c1917] block">{v.name}</span>
                          <span className="text-[11px] text-[#57534e]">{v.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* INCLUSIONS LIST */}
            <div className="space-y-2">
              <span className="text-xs text-[#1c1917] font-bold block">Lo que incluye tu pedido:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c1917]">
                {currentProduct.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#fffbeb]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b45309] flex-shrink-0" />
                    <span className="text-[11px]">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DEDICATION BUILDER WITH CARD PREVIEW */}
            <div className="space-y-3 p-4 rounded-xl border border-[#f59e0b] bg-[#fffbeb]">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#b45309]">
                  <Edit3 className="w-4 h-4" />
                  <span>Personalizar Tarjeta Dedicatoria:</span>
                </label>
                <span className="text-[10px] text-[#57534e]">Impresión en papel fino incluida</span>
              </div>

              {/* Recipient name input */}
              <div>
                <input
                  type="text"
                  placeholder="Nombre de la persona especial (Opcional, ej: Para Luciana)"
                  value={customRecipient}
                  onChange={(e) => setCustomRecipient(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg bg-white border border-[#e7e2d7] focus:border-[#b45309] outline-none text-[#1c1917]"
                />
              </div>

              {/* Quick preset chips */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#57534e] font-semibold block">Frases sugeridas:</span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_DEDICATIONS.map((phrase, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setDedicationText(phrase)}
                      className={`text-[10px] px-2.5 py-1 rounded-full transition-all border ${
                        dedicationText === phrase
                          ? 'bg-[#b45309] text-white border-[#b45309]'
                          : 'bg-white text-[#57534e] border-[#e7e2d7]/50 hover:bg-[#fef3c7]'
                      }`}
                    >
                      {phrase.substring(0, 36)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Dedication textarea */}
              <textarea
                rows={2}
                value={dedicationText}
                onChange={(e) => setDedicationText(e.target.value)}
                placeholder="Escribe tu mensaje personalizado..."
                className="w-full text-xs p-3 rounded-lg bg-white border border-[#e7e2d7] focus:border-[#b45309] outline-none text-[#1c1917]"
              />

              {/* Physical Card Preview Simulation */}
              <div className="p-3 bg-white border-2 border-dashed border-[#e7e2d7] rounded-xl text-center shadow-2xs">
                <span className="text-[9px] uppercase tracking-widest text-[#78716c] block mb-1">
                  Vista Previa de tu Tarjeta Artesanal
                </span>
                <p className="font-serif italic text-xs text-[#1c1917] max-w-sm mx-auto">
                  {customRecipient ? `Para ${customRecipient}: ` : ''}
                  "{dedicationText || 'Escribe aquí tu dedicatoria especial...'}"
                </p>
                <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-[#f59e0b]">
                  <Sun className="w-3 h-3 fill-[#f59e0b]" />
                  <span>Kajel Flores Amarillas</span>
                </div>
              </div>
            </div>

            {/* QUANTITY AND ACTION BUTTONS */}
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

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  className="py-3.5 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-[#e7e2d7]/50 transition-colors shadow-xs cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#b45309]" />
                  <span>Agregar a mi Bolsa</span>
                </button>

                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5 bg-[#b45309] hover:bg-[#d97706] text-white font-headline text-xs md:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
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
                  Entregas programadas en Lima
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
    </div>
  );
};

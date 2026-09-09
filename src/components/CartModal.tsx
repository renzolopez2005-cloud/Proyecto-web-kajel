import React, { useState } from 'react';
import { CartItem, OrderForm } from '../types';
import { LIMA_DISTRICTS, WHATSAPP_PHONE } from '../data/products';
import { createCartWhatsAppLink } from '../utils/whatsapp';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Gift, 
  ShoppingBag, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Calendar 
} from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderForm, setOrderForm] = useState<Partial<OrderForm>>({
    customerName: '',
    customerPhone: '',
    recipientName: '',
    district: LIMA_DISTRICTS[0].name,
    deliveryAddress: '',
    deliveryDate: '21 de Septiembre (Día Flores Amarillas)',
    paymentMethod: 'yape',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product.price + (item.selectedVariant?.priceDiff || 0)) * item.quantity,
    0
  );

  const selectedDistObj = LIMA_DISTRICTS.find((d) => d.name === orderForm.district) || LIMA_DISTRICTS[0];
  const deliveryFee = items.length > 0 ? selectedDistObj.fee : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    const url = createCartWhatsAppLink(items, orderForm);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Top Header */}
          <div className="p-4 border-b border-[#e7e2d7]/30 bg-[#fffbeb] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-[#451a03]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-headline text-base font-bold text-[#1c1917]">
                  Tu Bolsa de Regalos
                </h2>
                <span className="text-[11px] text-[#57534e]">
                  {items.length} {items.length === 1 ? 'producto' : 'productos'} seleccionados
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#57534e] hover:bg-[#fef3c7] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#e7e2d7] mx-auto" />
                <h3 className="font-headline text-base font-bold text-[#1c1917]">
                  Tu bolsa está vacía
                </h3>
                <p className="text-xs text-[#57534e] max-w-xs mx-auto">
                  Explora nuestro catálogo de Flores Amarillas y elige un detalle inolvidable para esa persona especial.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-[#b45309] text-white rounded-lg text-xs font-bold shadow-xs hover:bg-[#d97706]"
                >
                  Ver Catálogo
                </button>
              </div>
            ) : (
              <>
                {/* ITEMS LIST */}
                <div className="space-y-3">
                  {items.map((item, index) => {
                    const unitPrice = item.product.price + (item.selectedVariant?.priceDiff || 0);
                    const itemTotal = unitPrice * item.quantity;

                    return (
                      <div
                        key={index}
                        className="p-3 bg-[#fdfbf7] rounded-xl border border-[#e7e2d7]/40 flex gap-3 relative group"
                      >
                        <img
                          alt={item.product.name}
                          className="w-16 h-16 rounded-lg object-cover bg-white flex-shrink-0"
                          src={item.selectedVariant?.image || item.product.image}
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-headline text-xs font-bold text-[#1c1917] truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(index)}
                              className="text-[#78716c] hover:text-[#ba1a1a] p-0.5 cursor-pointer transition-colors"
                              title="Eliminar"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedVariant && (
                            <span className="inline-block text-[10px] bg-[#fef3c7] text-[#b45309] px-1.5 py-0.2 rounded font-semibold">
                              {item.selectedVariant.name}
                            </span>
                          )}

                          {item.dedicationText && (
                            <p className="text-[10px] text-[#57534e] italic line-clamp-1">
                              "{item.dedicationText}"
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center border border-[#e7e2d7] rounded bg-white">
                              <button
                                onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs text-[#57534e] hover:bg-[#fef3c7]"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-[#1c1917]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs text-[#57534e] hover:bg-[#fef3c7]"
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>

                            <span className="font-headline text-xs font-bold text-[#b45309]">
                              S/ {itemTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* FREE PRESALE PERKS BADGE */}
                <div className="p-3 bg-[#fef08a] rounded-xl border border-[#f59e0b]/40 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#451a03]">
                    <Sparkles className="w-4 h-4 text-[#b45309]" />
                    <span>¡Regalos de Preventa Incluidos!</span>
                  </div>
                  <ul className="text-[11px] text-[#78350f] space-y-0.5">
                    <li>✓ Luces hada cálidas instaladas en tus arreglos</li>
                    <li>✓ Mini bombones Bon o bon de cortesía</li>
                    <li>✓ Tarjeta dedicatoria impresa en papel especial</li>
                  </ul>
                </div>

                {/* DELIVERY FORM */}
                <div className="space-y-3 pt-2 border-t border-[#e7e2d7]/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1c1917]">
                    <Truck className="w-4 h-4 text-[#b45309]" />
                    <span>Datos de Entrega en Lima (Opcional):</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <input
                        type="text"
                        placeholder="Tu Nombre y Apellido"
                        value={orderForm.customerName}
                        onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Tu Teléfono / WhatsApp"
                        value={orderForm.customerPhone}
                        onChange={(e) => setOrderForm({ ...orderForm, customerPhone: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309]"
                      />
                      <input
                        type="text"
                        placeholder="Destinatario(a)"
                        value={orderForm.recipientName}
                        onChange={(e) => setOrderForm({ ...orderForm, recipientName: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={orderForm.district}
                        onChange={(e) => setOrderForm({ ...orderForm, district: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309] cursor-pointer"
                      >
                        {LIMA_DISTRICTS.map((d) => (
                          <option key={d.name} value={d.name}>
                            {d.name} (+S/ {d.fee.toFixed(2)})
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        placeholder="Fecha (Ej: 21 Sep)"
                        value={orderForm.deliveryDate}
                        onChange={(e) => setOrderForm({ ...orderForm, deliveryDate: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309]"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Dirección o punto de entrega"
                        value={orderForm.deliveryAddress}
                        onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
                        className="w-full p-2 bg-[#fdfbf7] border border-[#e7e2d7] rounded-lg text-xs outline-none focus:border-[#b45309]"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* BOTTOM TOTALS & WHATSAPP ACTION BUTTON */}
          {items.length > 0 && (
            <div className="p-4 border-t border-[#e7e2d7]/30 bg-[#fffbeb] space-y-3">
              <div className="space-y-1.5 text-xs text-[#57534e]">
                <div className="flex justify-between">
                  <span>Subtotal productos:</span>
                  <span className="font-semibold text-[#1c1917]">S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío ({orderForm.district}):</span>
                  <span className="font-semibold text-[#1c1917]">S/ {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#e7e2d7]/30 font-headline text-sm font-bold text-[#1c1917]">
                  <span>Total a pagar:</span>
                  <span className="text-base text-[#b45309]">S/ {grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 bg-[#b45309] hover:bg-[#d97706] text-white font-headline text-xs md:text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirmar Pedido por WhatsApp 💬</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-[#57534e]">
                <button
                  onClick={onClearCart}
                  className="text-[#78716c] hover:text-[#ba1a1a] underline"
                >
                  Vaciar bolsa
                </button>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#b45309]" />
                  Pago por Yape / Plin / Transferencia
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

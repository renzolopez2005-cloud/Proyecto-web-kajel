import { Product, ProductVariant, CartItem, OrderForm } from '../types';
import { WHATSAPP_PHONE } from '../data/products';

export function createProductWhatsAppLink(
  product: Product,
  variant?: ProductVariant,
  customDedication?: string
): string {
  const variantText = variant ? `\n• *Versión seleccionada:* ${variant.name}` : '';
  const dedicationText = customDedication?.trim()
    ? `\n• *Dedicatoria en tarjeta:* "${customDedication.trim()}"`
    : '';

  const message = `🌻 *¡Hola Kajel Flores Amarillas!* 💛
Quiero reservar mi pedido de preventa:

📌 *Producto:* ${product.name} (${product.subtitle})
💰 *Precio Preventa:* S/ ${product.price.toFixed(2)} (Antes S/ ${product.normalPrice.toFixed(2)})${variantText}${dedicationText}
🎁 *Incluye:* Preventa con Luces Hada & Bombones

¿Me podrían confirmar disponibilidad y tiempos de entrega para Lima? ¡Muchas gracias! ✨`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createCartWhatsAppLink(
  items: CartItem[],
  orderForm?: Partial<OrderForm>
): string {
  if (items.length === 0) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Quisiera consultar por el catálogo de flores amarillas.')}`;
  }

  const itemsList = items.map((item, idx) => {
    const vText = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
    const dText = item.dedicationText ? `\n   ↳ _Dedicatoria: "${item.dedicationText}"_` : '';
    return `${idx + 1}. *${item.product.name}*${vText} x${item.quantity} = S/ ${(item.product.price * item.quantity).toFixed(2)}${dText}`;
  }).join('\n');

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product.price + (item.selectedVariant?.priceDiff || 0)) * item.quantity, 
    0
  );
  const deliveryFee = 2.5;
  const grandTotal = subtotal + deliveryFee;

  let deliveryDetails = '';
  if (orderForm?.customerName || orderForm?.district) {
    deliveryDetails = `\n\n📋 *Datos para la Entrega en Lima:*
• *Cliente:* ${orderForm.customerName || 'No especificado'}
• *Teléfono contacto:* ${orderForm.customerPhone || 'El de este chat'}
• *Destinatario:* ${orderForm.recipientName || orderForm.customerName || 'A coordinar'}
• *Distrito / Dirección:* ${orderForm.district || ''} ${orderForm.deliveryAddress || ''}
• *Fecha deseada:* ${orderForm.deliveryDate || 'Pronta entrega'}
• *Costo de envío:* S/ ${deliveryFee.toFixed(2)}
• *Método de Pago preferido:* ${orderForm.paymentMethod ? orderForm.paymentMethod.toUpperCase() : 'Yape / Plin'}`;
  }

  const message = `🌻 *¡Hola Kajel! Deseo confirmar mi pedido:* 💛

🛍️ *Detalle del Pedido:*
${itemsList}

📦 *Subtotal:* S/ ${subtotal.toFixed(2)}
🚚 *Envío a Domicilio:* S/ ${deliveryFee.toFixed(2)}
💰 *TOTAL A PAGAR: S/ ${grandTotal.toFixed(2)}*
✨ *Beneficio Preventa:* Luces hada instaladas + Bombones Bon o bon gratis en todos los packs.${deliveryDetails}

Por favor confírmenme el número de cuenta / QR para realizar el adelanto por Yape/Plin. ¡Muchas gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

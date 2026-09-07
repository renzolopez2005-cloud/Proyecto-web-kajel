import React from 'react';
import { Product } from '../types';
import { PRODUCTS, IMAGES, WHATSAPP_PHONE, WHATSAPP_DISPLAY, INSTAGRAM_HANDLE } from '../data/products';
import { 
  Sun, 
  Sparkles, 
  Heart, 
  Truck, 
  Gift, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Calendar, 
  Clock 
} from 'lucide-react';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog: () => void;
  onAddToCart: (product: Product) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProduct,
  onNavigateCatalog,
  onAddToCart,
}) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Top Presale Ribbon */}
      <div className="bg-[#b45309] text-white py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2">
        <Sun className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b] animate-spin" style={{ animationDuration: '8s' }} />
        <span>¡Preventa Oficial Flores Amarillas 2025! Asegura tu entrega con Luces Hada & Bombones Bon o bon gratis.</span>
        <button 
          onClick={onNavigateCatalog}
          className="underline font-bold text-[#fde68a] hover:text-white ml-2"
        >
          Ver Promos &rarr;
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7]/60 p-6 md:p-12 border border-[#e7e2d7]/30 shadow-sm relative overflow-hidden">
          {/* Subtle floral background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
                <Sun className="w-4 h-4 text-[#b45309]" />
                <span>Tradición Flores Amarillas • Amor Eterno</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold tracking-tight leading-tight">
                “Ella sabía que él sabía que algún día pasaría que vendría a buscarla con sus{' '}
                <span className="text-[#b45309] underline decoration-[#f59e0b] decoration-wavy">
                  Flores Amarillas
                </span>”
              </h1>

              <p className="font-body text-sm md:text-base text-[#57534e] max-w-xl leading-relaxed">
                Sorprende con ramos y gift boxes de girasoles eternos tejidos con amor, luces de hada, peluches nupciales exclusivos y joyas giratorias.{' '}
                <strong className="text-[#1c1917]">
                  Reserva hoy en Preventa y asegura tu entrega con bombones gratis.
                </strong>
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onNavigateCatalog}
                  className="px-6 py-3.5 rounded-xl bg-[#b45309] hover:bg-[#d97706] text-white font-headline text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <Gift className="w-4 h-4" />
                  <span>Ver Colección Preventa</span>
                </button>

                <a
                  className="px-6 py-3.5 rounded-xl bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] font-headline text-sm font-bold border border-[#e7e2d7]/50 transition-all flex items-center gap-2 shadow-xs"
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel! Deseo información sobre los ramos de flores amarillas.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="w-4 h-4 text-[#b45309]" />
                  <span>Pedir por WhatsApp ({WHATSAPP_DISPLAY})</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#e7e2d7]/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0">
                    <Heart className="w-4 h-4 fill-[#b45309]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">100% Artesanal</span>
                    <span className="text-[10px] text-[#57534e]">Chenille premium eterno</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">Todo Lima</span>
                    <span className="text-[10px] text-[#57534e]">Envíos programados</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309] flex-shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#1c1917] block">Tarjeta & Regalos</span>
                    <span className="text-[10px] text-[#57534e]">Luces hada + Bon o bon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO PHOTOS MOSAIC */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div 
                  onClick={() => onSelectProduct(PRODUCTS[1])}
                  className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/30"
                >
                  <img
                    alt="Gift Flores Amarillas con Carnerita"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={IMAGES.carneritaTop}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm p-1.5 rounded-lg text-center shadow-xs">
                    <span className="text-[11px] font-bold text-[#b45309] block">Pack Carnerita</span>
                    <span className="text-xs font-bold text-[#1c1917]">S/ 39.90</span>
                  </div>
                </div>

                <div 
                  onClick={() => onSelectProduct(PRODUCTS[3])}
                  className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/30"
                >
                  <img
                    alt="Gift Box Versión 2 Pollita Novia"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={IMAGES.pollitaHero}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-[#f59e0b] text-[#451a03] text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                    Preventa
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div 
                  onClick={() => onSelectProduct(PRODUCTS[2])}
                  className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[#e7e2d7]/30"
                >
                  <img
                    alt="Gift Box Versión 1 Patita Novia"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={IMAGES.patitaHero}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm p-1.5 rounded-lg text-center shadow-xs">
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
      </section>

      {/* COUNTDOWN & MOTIVATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#fffbeb] border border-[#e7e2d7]/40 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b] text-[#451a03] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline text-base md:text-lg font-bold text-[#1c1917]">
                Campaña Oficial de Septiembre — Flores Amarillas
              </h3>
              <p className="text-xs md:text-sm text-[#57534e]">
                Evita las alzas de último momento y la escasez. Asegura hoy con tu adelanto y programa la entrega a domicilio en Lima.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white px-3 py-2 rounded-lg text-center border border-[#e7e2d7]/30 shadow-2xs">
              <span className="font-headline text-lg font-bold text-[#b45309]">100%</span>
              <span className="block text-[10px] text-[#57534e]">Eternas</span>
            </div>
            <div className="bg-white px-3 py-2 rounded-lg text-center border border-[#e7e2d7]/30 shadow-2xs">
              <span className="font-headline text-lg font-bold text-[#b45309]">S/ 8.00</span>
              <span className="block text-[10px] text-[#57534e]">Ahorro preventa</span>
            </div>
            <button
              onClick={onNavigateCatalog}
              className="px-4 py-2.5 bg-[#b45309] hover:bg-[#d97706] text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
              Catálogo Seleccionado
            </span>
            <h2 className="font-headline text-2xl font-bold text-[#1c1917]">
              Colección Preventa Flores Amarillas
            </h2>
          </div>
          <button
            onClick={onNavigateCatalog}
            className="text-xs font-bold text-[#b45309] hover:text-[#d97706] flex items-center gap-1"
          >
            <span>Ver los 4 productos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-[#e7e2d7]/30 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative h-52 bg-[#fffbeb] overflow-hidden cursor-pointer"
                >
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={product.image}
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${product.tagColor || 'bg-[#b45309] text-white'}`}>
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute top-2 right-2 bg-[#f59e0b] text-[#451a03] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    {product.discountLabel}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-headline text-base font-bold text-[#1c1917] hover:text-[#b45309] cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#57534e] line-clamp-2">
                    {product.subtitle}
                  </p>

                  <div className="pt-2 border-t border-[#e7e2d7]/20 space-y-1">
                    <span className="text-[10px] text-[#b45309] font-bold uppercase block">Incluye:</span>
                    <ul className="text-[11px] text-[#57534e] space-y-0.5">
                      {product.inclusions.slice(0, 2).map((inc, i) => (
                        <li key={i} className="truncate flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#f59e0b]"></span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                  <div>
                    <span className="text-[10px] text-[#78716c] line-through block">
                      Normal: S/ {product.normalPrice.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-[#b45309] font-bold">Preventa:</span>
                      <span className="font-headline text-base font-bold text-[#b45309]">
                        S/ {product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="py-2 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] text-xs font-bold rounded-lg transition-colors"
                  >
                    + Bolsa
                  </button>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="py-2 bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-bold rounded-lg transition-colors text-center"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE KAJEL CRAFT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-white border border-[#e7e2d7]/30 p-6 md:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider">
              ¿Por qué elegir Flores Eternas Kajel?
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
              El detalle que dura toda la vida
            </h2>
            <p className="text-xs md:text-sm text-[#57534e]">
              A diferencia de las flores naturales que marchitan en 3 días, nuestros girasoles tejidos a mano conservan su forma, color y significado por siempre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                <Sun className="w-5 h-5 fill-[#b45309]" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Técnica Chenille Premium</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Cada pétalo es moldeado a mano con limpiapipas aterciopelado de alta densidad y follaje floral texturizado de larga durabilidad.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                <Sparkles className="w-5 h-5 text-[#b45309]" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Joyas Giratorias Inoxidables</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Nuestros gift boxes incluyen joyas en acero inoxidable dorado con mecanismo giratorio antiestrés y acabado brillante garantizado.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#b45309]">
                <ShieldCheck className="w-5 h-5 text-[#b45309]" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">Atención Humana & Puntual</h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Coordinamos contigo cada detalle por WhatsApp: foto previa de tu ramo terminado, dedicatoria impresa y ruta de entrega en Lima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider">
            Testimonios Reales
          </span>
          <h2 className="font-headline text-2xl font-bold text-[#1c1917]">
            Lo que dicen quienes ya regalaron Kajel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-[#e7e2d7]/30 shadow-sm space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "¡Mi novia quedó fascinada con la Patita Novia y las luces! El girasol es idéntico a las fotos y la cajita llegó perfecta a Miraflores."
            </p>
            <div className="pt-2 border-t border-[#e7e2d7]/20 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Diego M.</span>
              <span className="text-[#78716c]">Miraflores, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e7e2d7]/30 shadow-sm space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "El pack carnerita con el anillo giratorio es hermoso y súper delicado. Excelente atención por WhatsApp, respondieron al instante."
            </p>
            <div className="pt-2 border-t border-[#e7e2d7]/20 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Valeria C.</span>
              <span className="text-[#78716c]">Surco, Lima</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e7e2d7]/30 shadow-sm space-y-3">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-xs text-[#57534e] italic leading-relaxed">
              "Aproveché la preventa con las luces hada y los bombones de regalo. Llegó puntual el 21 de septiembre como prometieron. 10/10."
            </p>
            <div className="pt-2 border-t border-[#e7e2d7]/20 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1c1917]">Renzo L.</span>
              <span className="text-[#78716c]">San Borja, Lima</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-[#b45309] text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-md">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="inline-block px-3 py-1 bg-[#f59e0b] text-[#451a03] rounded-full text-xs font-bold">
              Atención Directa y Personalizada
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">
              ¿Tienes una dedicatoria especial o pedido personalizado?
            </h2>
            <p className="text-xs md:text-sm text-[#fde68a] leading-relaxed">
              Escríbenos directamente por WhatsApp. Te ayudamos a armar el paquete ideal con tu frase favorita, fecha y distrito de entrega en Lima.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel, deseo personalizar un pedido de Flores Amarillas.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#b45309] hover:bg-[#fef3c7] font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#b45309] fill-[#b45309]" />
                <span>Conversar con un Asesor (+51 970 480 398)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

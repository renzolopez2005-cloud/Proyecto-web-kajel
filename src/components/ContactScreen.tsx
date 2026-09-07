import React, { useState } from 'react';
import { 
  WHATSAPP_PHONE, 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_HANDLE, 
  LIMA_DISTRICTS, 
  FAQ_ITEMS 
} from '../data/products';
import { 
  MessageCircle, 
  PhoneCall, 
  Camera, 
  PlayCircle, 
  ThumbsUp, 
  Truck, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedDistrict, setSelectedDistrict] = useState<string>(LIMA_DISTRICTS[0].name);

  const selectedDistObj = LIMA_DISTRICTS.find((d) => d.name === selectedDistrict) || LIMA_DISTRICTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Top Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] p-6 md:p-10 border border-[#e7e2d7]/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Atención Directa & Envíos en Lima</span>
          </div>
          <h1 className="font-headline text-2xl md:text-4xl font-bold text-[#1c1917]">
            Pedidos, Entregas & Atención por WhatsApp
          </h1>
          <p className="font-body text-xs md:text-sm text-[#57534e] leading-relaxed">
            Realizamos envíos a domicilio programados en todo Lima Metropolitana o puntos de encuentro céntricos. Coordina tu dedicatoria, fecha y detalles directamente con nosotros.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel! Deseo coordinar un pedido para Lima.')}`}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 bg-[#b45309] hover:bg-[#d97706] text-white font-bold text-xs md:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 flex-shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Escribir al WhatsApp ({WHATSAPP_DISPLAY})</span>
        </a>
      </div>

      {/* THREE MAIN TILES: WHATSAPP DIRECT, SOCIAL MEDIA, PAYMENT METHODS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TILE 1: WHATSAPP */}
        <div className="bg-white rounded-2xl border border-[#e7e2d7]/30 p-6 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-bold text-[#1c1917]">WhatsApp Oficial</h3>
            <p className="text-xs text-[#57534e] mt-0.5">Atención de Lunes a Domingo, 8am a 10pm</p>
          </div>
          <div className="bg-[#fffbeb] p-3 rounded-xl space-y-1 text-xs">
            <span className="font-bold text-[#b45309] block">Número de Pedidos:</span>
            <span className="font-mono text-sm font-bold text-[#1c1917] block">{WHATSAPP_DISPLAY}</span>
            <span className="text-[11px] text-[#57534e]">Respuesta promedio en menos de 10 min.</span>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full py-2.5 bg-[#b45309] text-white rounded-xl text-xs font-bold hover:bg-[#d97706] transition-colors"
          >
            Abrir Chat de WhatsApp
          </a>
        </div>

        {/* TILE 2: SOCIAL CHANNELS */}
        <div className="bg-white rounded-2xl border border-[#e7e2d7]/30 p-6 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-bold text-[#1c1917]">Redes Sociales</h3>
            <p className="text-xs text-[#57534e] mt-0.5">Fotos reales, videos de entregas y reviews</p>
          </div>
          <div className="space-y-2">
            <a
              href="https://instagram.com/Kajel.pe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors text-xs"
            >
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#b45309]" />
                <span className="font-semibold text-[#1c1917]">Instagram</span>
              </div>
              <span className="font-bold text-[#b45309]">{INSTAGRAM_HANDLE}</span>
            </a>
            <a
              href="https://tiktok.com/@Kajel.pe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors text-xs"
            >
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#b45309]" />
                <span className="font-semibold text-[#1c1917]">TikTok</span>
              </div>
              <span className="font-bold text-[#b45309]">@Kajel.pe</span>
            </a>
            <a
              href="https://facebook.com/Kajel.pe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#fffbeb] hover:bg-[#fef3c7] transition-colors text-xs"
            >
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-[#b45309]" />
                <span className="font-semibold text-[#1c1917]">Facebook</span>
              </div>
              <span className="font-bold text-[#b45309]">Kajel Detalles</span>
            </a>
          </div>
        </div>

        {/* TILE 3: PAYMENT METHODS */}
        <div className="bg-white rounded-2xl border border-[#e7e2d7]/30 p-6 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-bold text-[#1c1917]">Métodos de Pago</h3>
            <p className="text-xs text-[#57534e] mt-0.5">100% seguros y sin comisiones extras</p>
          </div>
          <div className="bg-[#fffbeb] p-3 rounded-xl space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-[#e7e2d7]/30 pb-1.5">
              <span className="font-bold text-[#722f99]">💜 Yape / 💙 Plin</span>
              <span className="text-[11px] font-semibold text-[#57534e]">Inmediato</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#e7e2d7]/30 pb-1.5">
              <span className="font-bold text-[#0039a6]">🏦 BCP / BBVA / Interbank</span>
              <span className="text-[11px] font-semibold text-[#57534e]">Transferencia</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#b45309]">💵 Reserva Preventa</span>
              <span className="text-[11px] font-semibold text-[#57534e]">50% adelanto</span>
            </div>
          </div>
          <p className="text-[11px] text-[#57534e] italic">
            El saldo restante se cancela contra entrega o un día antes del despacho programado.
          </p>
        </div>
      </div>

      {/* DELIVERY FEE CALCULATOR BY DISTRICT */}
      <div className="bg-white rounded-2xl border border-[#e7e2d7]/30 p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#b45309] font-bold text-xs">
              <Truck className="w-4 h-4" />
              <span>Calculadora de Envíos en Lima Metropolitana</span>
            </div>
            <h2 className="font-headline text-xl md:text-2xl font-bold text-[#1c1917]">
              Consulta la tarifa de delivery para tu distrito
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-[#1c1917]" htmlFor="distrito-select">Distrito:</label>
            <select
              id="distrito-select"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="p-2 bg-[#fffbeb] border border-[#e7e2d7] rounded-xl text-xs font-semibold text-[#1c1917] outline-none cursor-pointer"
            >
              {LIMA_DISTRICTS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name} ({d.zone})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected District Info Card */}
        <div className="p-4 rounded-xl bg-[#fffbeb] border border-[#e7e2d7]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline text-base font-bold text-[#1c1917]">
                {selectedDistObj.name}
              </h4>
              <p className="text-xs text-[#57534e]">
                Zona: {selectedDistObj.zone} • Rango de entrega estimada:{' '}
                <strong>{selectedDistObj.estimatedHours}</strong>
              </p>
            </div>
          </div>

          <div className="text-right sm:border-l sm:border-[#e7e2d7]/40 sm:pl-6">
            <span className="text-[11px] text-[#78716c] block">Costo estimado:</span>
            <span className="font-headline text-2xl font-bold text-[#b45309]">
              S/ {selectedDistObj.fee.toFixed(2)}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-[#57534e] leading-relaxed">
          * También contamos con puntos de encuentro previa coordinación (Centros comerciales o estaciones del Metropolitano/Tren eléctrico).
        </p>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <div className="bg-white rounded-2xl border border-[#e7e2d7]/30 p-6 md:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#b45309] font-bold text-xs">
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-headline text-xl md:text-2xl font-bold text-[#1c1917]">
            Resolvemos tus dudas antes de pedir
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#e7e2d7]/30 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 bg-[#fdfbf7] hover:bg-[#fffbeb] flex items-center justify-between gap-4 font-headline text-sm font-bold text-[#1c1917] cursor-pointer transition-colors"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#b45309] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#78716c] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 bg-white text-xs text-[#57534e] leading-relaxed border-t border-[#e7e2d7]/20">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

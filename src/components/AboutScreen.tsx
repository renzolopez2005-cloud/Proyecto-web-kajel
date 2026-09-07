import React from 'react';
import { INSTAGRAM_HANDLE, WHATSAPP_PHONE, WHATSAPP_DISPLAY, IMAGES } from '../data/products';
import { 
  Heart, 
  Sparkles, 
  Sun, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Camera, 
  Award, 
  Scissors 
} from 'lucide-react';

interface AboutScreenProps {
  onNavigateCatalog: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigateCatalog }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Hero Header */}
      <div className="rounded-2xl bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] p-6 md:p-12 border border-[#e7e2d7]/30 shadow-sm text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
          <Heart className="w-3.5 h-3.5 fill-[#b45309] text-[#b45309]" />
          <span>Nuestra Historia & Compromiso Artesanal</span>
        </div>
        <h1 className="font-headline text-3xl md:text-5xl text-[#1c1917] font-extrabold max-w-3xl mx-auto">
          Flores Amarillas que nunca se marchitan, hechas con amor en Lima
        </h1>
        <p className="font-body text-sm md:text-base text-[#57534e] max-w-2xl mx-auto leading-relaxed">
          En <strong className="text-[#1c1917]">Kajel ({INSTAGRAM_HANDLE})</strong> transformamos una hermosa tradición en recuerdos que perduran para siempre. Cada girasol y detalle es tejido a mano con dedicación absoluta.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            El Significado de las Flores Amarillas
          </span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917] leading-tight">
            “Ella sabía que él sabía que algún día pasaría...”
          </h2>
          <p className="font-body text-sm text-[#57534e] leading-relaxed">
            Regalar flores amarillas en septiembre no es solo un regalo; es una promesa de amor, lealtad y alegría compartida. Inspirados por la ternura de este gesto, creamos alternativas eternas para que esa emoción no se apague cuando pasen los días.
          </p>
          <p className="font-body text-sm text-[#57534e] leading-relaxed">
            Utilizamos la técnica de <strong>chenille aterciopelado (limpiapipas de alta densidad)</strong>, modelando cada pétalo individualmente. Esto otorga una textura suave y esponjosa que nunca pierde su color vibrante.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-[#fffbeb] rounded-xl border border-[#e7e2d7]/30">
              <span className="font-headline text-xl font-bold text-[#b45309] block">+500</span>
              <span className="text-xs text-[#57534e]">Parejas y personas felices en Lima</span>
            </div>
            <div className="p-3 bg-[#fffbeb] rounded-xl border border-[#e7e2d7]/30">
              <span className="font-headline text-xl font-bold text-[#b45309] block">100%</span>
              <span className="text-xs text-[#57534e]">Hecho a mano en Perú</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <img
            alt="Detalle artesanal flor amarilla"
            className="w-full h-64 object-cover rounded-2xl shadow-sm border border-[#e7e2d7]/30"
            src={IMAGES.patitaHero}
            referrerPolicy="no-referrer"
          />
          <img
            alt="Peluche novia con velo"
            className="w-full h-64 object-cover rounded-2xl shadow-sm border border-[#e7e2d7]/30 mt-6"
            src={IMAGES.pollitaHero}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Comparison: Flores Eternas vs Flores Naturales */}
      <div className="rounded-2xl bg-white border border-[#e7e2d7]/30 p-6 md:p-10 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider">
            Comparativa Transparente
          </span>
          <h3 className="font-headline text-2xl font-bold text-[#1c1917]">
            ¿Por qué elegir un Ramo Eterno Kajel?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kajel Flores Eternas */}
          <div className="p-6 rounded-xl bg-[#fffbeb] border-2 border-[#f59e0b] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold">
                <Sun className="w-5 h-5 fill-[#451a03]" />
              </div>
              <div>
                <h4 className="font-headline text-base font-bold text-[#1c1917]">Flores Eternas Kajel</h4>
                <p className="text-xs text-[#b45309] font-semibold">Inversión para toda la vida</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-[#1c1917]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b45309] flex-shrink-0 mt-0.5" />
                <span><strong>Durabilidad infinita:</strong> No se marchitan ni botan pétalos sucios.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b45309] flex-shrink-0 mt-0.5" />
                <span><strong>Hipoalergénicas:</strong> Sin polen ni olores que causen estornudos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b45309] flex-shrink-0 mt-0.5" />
                <span><strong>Con regalos completos:</strong> Joyas en acero inox, luces hada y peluches.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b45309] flex-shrink-0 mt-0.5" />
                <span><strong>Precios estables:</strong> Sin incrementos repentinos de último minuto.</span>
              </li>
            </ul>
          </div>

          {/* Flores Naturales Tradicionales */}
          <div className="p-6 rounded-xl bg-white border border-[#e7e2d7]/40 space-y-4 opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] text-[#78716c] flex items-center justify-center font-bold">
                🍂
              </div>
              <div>
                <h4 className="font-headline text-base font-bold text-[#57534e]">Flores Naturales Convencionales</h4>
                <p className="text-xs text-[#78716c]">Detalle efímero</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-[#57534e]">
              <li className="flex items-start gap-2">
                <span className="text-[#ba1a1a] font-bold">✕</span>
                <span>Se marchitan y pudren en 3 a 5 días máximo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ba1a1a] font-bold">✕</span>
                <span>Requieren agua constante, cambio de florero y botan malos olores.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ba1a1a] font-bold">✕</span>
                <span>Precios inflados el 21 de septiembre por alta demanda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ba1a1a] font-bold">✕</span>
                <span>El recuerdo físico se pierde al botarlas a la basura.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA FOOTER */}
      <div className="text-center space-y-4 pt-4">
        <button
          onClick={onNavigateCatalog}
          className="px-6 py-3.5 bg-[#b45309] hover:bg-[#d97706] text-white font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Explorar Colección de Preventa</span>
        </button>
      </div>
    </div>
  );
};

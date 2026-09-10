import React from 'react';
import { INSTAGRAM_HANDLE, WHATSAPP_PHONE, WHATSAPP_DISPLAY, IMAGES } from '../data/products';
import { 
  Heart, 
  Sparkles, 
  Sun, 
  CheckCircle2, 
  Scissors, 
  Gift, 
  Clock, 
  Feather, 
  Palette, 
  HelpCircle,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Award,
  Stars,
  ShieldCheck
} from 'lucide-react';

interface AboutScreenProps {
  onNavigateCatalog: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigateCatalog }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-14">
      {/* Hero Header */}
      <div className="rounded-3xl bg-gradient-to-br from-[#fffbeb] via-white to-[#fef9c3]/50 p-8 md:p-14 border border-[#e7e2d7]/60 shadow-xs text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-[#b45309] text-[#b45309]" />
          <span>Taller Artesanal Limeño & Preventa 2026</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-extrabold max-w-3xl mx-auto leading-tight">
          El arte de regalar flores amarillas que duran para toda la vida
        </h1>
        <p className="text-sm md:text-base text-[#57534e] max-w-2xl mx-auto leading-relaxed">
          En <strong className="text-[#1c1917]">Kajel ({INSTAGRAM_HANDLE})</strong> transformamos una hermosa tradición en recuerdos tangibles. Cada pétalo de girasol, cada lazo con letras doradas y cada dedicatoria se elabora a mano con chenille aterciopelado en Lima.
        </p>
      </div>

      {/* BRAND LORE & ORIGIN STORY SECTION */}
      <section className="rounded-3xl bg-gradient-to-br from-[#fffbeb] via-[#fef9c3]/30 to-white border border-[#e7e2d7]/70 p-6 sm:p-8 md:p-12 shadow-xs space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-[#b45309] text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>El Lore de la Marca</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1917] leading-tight">
            De una mesa de centro en Lima a cientos de historias de amor
          </h2>
          <p className="text-sm text-[#57534e] leading-relaxed">
            Detrás de cada ramo no hay una fábrica ni moldes plásticos importados. Conoce los detalles íntimos, anécdotas y valores que dieron vida a nuestra marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lore Card 1: El Nombre Kajel */}
          <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3 flex flex-col justify-between group hover:shadow-xs transition-shadow">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block">
                Etimología & Concepto • Septiembre 2022
              </span>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">
                ¿Qué significa «Kajel»?
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Nació de la fusión poética entre <strong>«K’aj»</strong> (palabra de raíz andina que evoca el resplandor cálido y dorado del sol de primavera) y <strong>«El»</strong> (por <em>Eternos Lazos</em>). Representa la promesa de entregar un pequeño sol entre las manos: una flor radiante que ilumina momentos especiales y cuyo brillo jamás se apaga con el tiempo.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-[#e7e2d7] text-[11px] text-[#78716c] italic">
              «Luz dorada hecha a mano para acompañar tus recuerdos más bonitos.»
            </div>
          </div>

          {/* Lore Card 2: La Mascota Carnerita */}
          <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3 flex flex-col justify-between group hover:shadow-xs transition-shadow">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Stars className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block">
                Nuestra Mascota Oficial
              </span>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">
                La Leyenda de la Carnerita
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                En la campaña de 2023, una clienta nos pidió un peluche especial: <em>"mi novio me dice con cariño que soy como una ovejita tierna"</em>. Confeccionamos a mano una pequeña carnerita de lana con velo de novia y mini girasol. El video del pedido se hizo viral en Lima y la carnerita pasó a ser el sello consentido de nuestras gift boxes.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-[#e7e2d7] text-[11px] text-[#78716c] italic">
              «Hoy es el regalo estrella para propuestas de noviazgo y aniversarios.»
            </div>
          </div>

          {/* Lore Card 3: El Manifiesto */}
          <div className="p-6 rounded-2xl bg-white border border-[#e7e2d7]/70 shadow-2xs space-y-3 flex flex-col justify-between group hover:shadow-xs transition-shadow">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#fffbeb] text-[#b45309] border border-amber-200/70 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider block">
                Sello de Calidad
              </span>
              <h3 className="font-headline text-lg font-bold text-[#1c1917]">
                El Manifiesto de Taller
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                En Kajel tenemos una regla inquebrantable: <strong>ninguna flor sale de una máquina</strong>. Si un pétalo no queda perfectamente aterciopelado o equilibrado, se desarma y se vuelve a moldear. Por eso nuestros cupos de preventa son estrictamente limitados: preferimos hacer 100 ramos perfectos que 1,000 apresurados.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-[#e7e2d7] text-[11px] text-[#78716c] italic">
              «Cada ramo lleva la cinta de satén con letras doradas 'LOVE IS'.»
            </div>
          </div>
        </div>

        {/* Workshop Atmosphere Quote */}
        <div className="rounded-2xl bg-white/80 border border-amber-200/80 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1c1917]">El Compromiso Artesanal Kajel</h4>
              <p className="text-xs text-[#57534e]">
                Diseñado, cortado, modelado y perfumado a mano con dedicación en nuestro taller de Lima, Perú.
              </p>
            </div>
          </div>
          <div className="px-3.5 py-1 rounded-full bg-amber-100 text-[#b45309] text-xs font-bold whitespace-nowrap self-end sm:self-auto">
            Edición Preventa 2026
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#b45309] tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestra Inspiración</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1917] leading-tight">
            “Ella sabía que él sabía que algún día pasaría...”
          </h2>
          <p className="text-sm text-[#57534e] leading-relaxed">
            Todos los 21 de septiembre, las flores amarillas llenan las calles de ilusión, recordando aquella melodía nostálgica y el gesto romántico de quien busca hacer sentir única a su persona especial.
          </p>
          <p className="text-sm text-[#57534e] leading-relaxed">
            Sin embargo, nos dolía ver cómo los ramos naturales de floristería empezaban a marchitarse a los tres días, perdiendo sus pétalos en el florero. Por eso en <strong>Kajel</strong> decidimos reinventar el concepto: crear <em>flores eternas</em> modeladas con <strong>chenille de alta densidad (limpiapipas aterciopelado)</strong>.
          </p>
          <p className="text-sm text-[#57534e] leading-relaxed">
            El resultado es una flor con volumen esponjoso, textura cálida y un color amarillo brillante que no se opaca con el paso de los meses ni los años. Un detalle que conservará su forma en la repisa o mesa de noche como recuerdo vivo de ese momento especial.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
            <div className="p-4 bg-[#fffbeb] rounded-2xl border border-[#e7e2d7]/50">
              <span className="font-headline text-2xl font-bold text-[#b45309] block">+500</span>
              <span className="text-xs text-[#57534e] font-medium">Sonrisas entregadas en Lima</span>
            </div>
            <div className="p-4 bg-[#fffbeb] rounded-2xl border border-[#e7e2d7]/50">
              <span className="font-headline text-2xl font-bold text-[#b45309] block">100%</span>
              <span className="text-xs text-[#57534e] font-medium">Hecho a mano en Perú</span>
            </div>
            <div className="p-4 bg-[#fffbeb] rounded-2xl border border-[#e7e2d7]/50 col-span-2 sm:col-span-1">
              <span className="font-headline text-2xl font-bold text-[#b45309] block">0 días</span>
              <span className="text-xs text-[#57534e] font-medium">Flores marchitas o desechadas</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#e7e2d7]/60 group">
              <img
                alt="Ramo Girasol artesanal real"
                className="w-full h-56 object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-300"
                src={IMAGES.ramoGirasol}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Ramo Girasol Real
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#e7e2d7]/60 group">
              <img
                alt="Detalle chenille artesanal"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                src={IMAGES.carneritaTop}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Detalle Textura
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#e7e2d7]/60 group">
              <img
                alt="Gift Box con carnerita"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                src={IMAGES.patitaHero}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Gift Box Peluche
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#e7e2d7]/60 group">
              <img
                alt="Peluche novia con velo"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                src={IMAGES.pollitaHero}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                Carnerita Velo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Handcrafted Process Section */}
      <section className="rounded-3xl bg-white border border-[#e7e2d7]/60 p-6 sm:p-8 md:p-12 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            El Proceso en el Taller
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1917]">
            ¿Cómo elaboramos cada flor de chenille?
          </h2>
          <p className="text-xs md:text-sm text-[#57534e] leading-relaxed">
            Cada arreglo toma entre 2 y 3 horas de confección manual meticulosa, cuidando cada ángulo para que al recibirlo sientas la calidad y calidez de un objeto hecho con el corazón.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b45309] flex items-center justify-center font-bold text-sm">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">
                1. Selección de Materiales
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Elegimos alambre flexible con recubrimiento de felpa de microfibra de alta densidad en tono amarillo canario, marrón café y verde follaje.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#b45309]">Textura ultra suave</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b45309] flex items-center justify-center font-bold text-sm">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">
                2. Modelado Pétalo a Pétalo
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Curvamos manualmente cada uno de los 14 a 18 pétalos del girasol y tejemos en espiral el centro oscuro para lograr profundidad y realismo.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#b45309]">Forma y volumen 3D</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b45309] flex items-center justify-center font-bold text-sm">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">
                3. Montaje & Complementos
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Integramos margaritas silvestres, tallos florales reforzados, luces hada LED cálidas, bombones Bon o bon y peluches temáticos.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#b45309]">Listo para emocionar</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#fffbeb]/60 border border-[#e7e2d7]/60 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b45309] flex items-center justify-center font-bold text-sm">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-base font-bold text-[#1c1917]">
                4. Envoltura & Dedicatoria
              </h3>
              <p className="text-xs text-[#57534e] leading-relaxed">
                Empacamos en papel coreano translúcido o cajas protectoras con cinta estampada “LOVE IS” y la tarjeta con mensaje personalizado.
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#b45309]">Presentación de lujo</span>
          </div>
        </div>
      </section>

      {/* Comparison: Flores Eternas vs Flores Naturales */}
      <section className="rounded-3xl bg-white border border-[#e7e2d7]/60 p-6 sm:p-8 md:p-12 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
            Comparativa Clara
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1917]">
            ¿Por qué elegir un Ramo Eterno Kajel?
          </h3>
          <p className="text-xs md:text-sm text-[#57534e]">
            Comparamos la experiencia frente a la floristería tradicional de temporada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kajel Flores Eternas */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#fffbeb] to-[#fef9c3]/40 border-2 border-amber-400 space-y-5 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#f59e0b] text-white flex items-center justify-center font-bold shadow-2xs">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-headline text-lg font-bold text-[#1c1917]">Flores de Chenille Kajel</h4>
                <p className="text-xs text-[#b45309] font-bold">Un recuerdo que dura para siempre</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#1c1917]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>No se marchitan nunca:</strong> Mantienen su textura y color vívido indefinidamente.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>100% Hipoalergénicas:</strong> Sin polen, ácaros ni olores que provoquen estornudos o alergias.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Regalos completos listos:</strong> Incluyen tarjeta temática, chocolates y opciones con luces LED o joyería.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Precio de preventa asegurado:</strong> Reservas con anticipación y evitas las colas y sobreprecios del 21 de septiembre.</span>
              </li>
            </ul>
          </div>

          {/* Flores Naturales Tradicionales */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-50/80 border border-stone-200/80 space-y-5 opacity-90">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-stone-200 text-stone-600 flex items-center justify-center text-xl">
                🥀
              </div>
              <div>
                <h4 className="font-headline text-lg font-bold text-[#57534e]">Flores Naturales Convencionales</h4>
                <p className="text-xs text-[#78716c]">Emoción efímera de pocos días</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#57534e]">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-sm">✕</span>
                <span>Se marchitan, caen y botan hojas marrones a los 3 a 5 días de haberlas recibido.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-sm">✕</span>
                <span>Requieren recortar tallos, cambiar agua estancada a diario y limpiar floreros.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-sm">✕</span>
                <span>Precios inflados hasta 3 veces su valor normal el mismo 21 de septiembre.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold text-sm">✕</span>
                <span>El recuerdo físico se pierde inevitablemente en el tacho de basura al cabo de una semana.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="rounded-3xl bg-[#fffbeb]/50 border border-[#e7e2d7]/70 p-6 sm:p-8 md:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#b45309] tracking-wider block">
              Guía de Mantenimiento
            </span>
            <h2 className="font-headline text-2xl font-bold text-[#1c1917]">
              ¿Cómo cuidar tus flores de chenille para que duren años?
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-amber-100 text-[#b45309] text-xs font-bold whitespace-nowrap">
            Cero Agua • Cero Complicaciones
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-[#e7e2d7]/60 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1c1917]">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-[#b45309] flex items-center justify-center text-xs">1</span>
              <span>Mantener en lugar seco</span>
            </div>
            <p className="text-xs text-[#57534e] leading-relaxed">
              No requieren agua ni humedad. Mantenlas en tu habitación, escritorio o vitrina bajo techo alejadas de la lluvia.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e7e2d7]/60 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1c1917]">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-[#b45309] flex items-center justify-center text-xs">2</span>
              <span>Limpieza sencilla</span>
            </div>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Si acumulan polvo con el tiempo, usa suavemente un secador de pelo con aire frío o sacúdelas ligeramente con una brocha suave.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e7e2d7]/60 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1c1917]">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-[#b45309] flex items-center justify-center text-xs">3</span>
              <span>Pétalos amoldables</span>
            </div>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Al tener alma interna de alambre maleable, puedes abrir o acomodar los pétalos suavemente con tus manos si deseas darles más volumen.
            </p>
          </div>
        </div>
      </section>

      {/* Artisanal FAQ Section */}
      <section className="rounded-3xl bg-white border border-[#e7e2d7]/60 p-6 sm:p-8 md:p-12 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-[#b45309] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Dudas Frecuentes</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1917]">
            Preguntas sobre pedidos & confección
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#fffbeb]/40 border border-[#e7e2d7]/50 space-y-2">
            <h3 className="font-headline text-sm font-bold text-[#1c1917]">
              ¿Con cuánta anticipación debo reservar mi pedido?
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Al ser un producto 100% elaborado y ensamblado a mano, nuestros cupos para el 21 de septiembre son limitados. Recomendamos hacer tu reserva durante la preventa actual para garantizar stock y precio especial.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fffbeb]/40 border border-[#e7e2d7]/50 space-y-2">
            <h3 className="font-headline text-sm font-bold text-[#1c1917]">
              ¿Puedo personalizar la dedicatoria en la tarjeta?
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              ¡Sí, por supuesto! Al confirmar tu pedido por WhatsApp puedes enviarnos el texto o mensaje especial que deseas que escribamos en la tarjeta que acompaña al ramo o box.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fffbeb]/40 border border-[#e7e2d7]/50 space-y-2">
            <h3 className="font-headline text-sm font-bold text-[#1c1917]">
              ¿Qué zonas de Lima cubren para la entrega?
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Realizamos envíos a domicilio programados por aplicativo motorizado en todo Lima Metropolitana y también coordinamos entregas en estaciones del tren o puntos de encuentro céntricos según coordinación previa.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fffbeb]/40 border border-[#e7e2d7]/50 space-y-2">
            <h3 className="font-headline text-sm font-bold text-[#1c1917]">
              ¿Cómo funcionan las luces LED en los ramos?
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Los modelos con luces incluyen una serie mini de alambre de cobre con micro LEDs de luz cálida y un interruptor oculto con baterías incluidas, listo para encender en el momento de la entrega o sorpresa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <div className="rounded-3xl bg-gradient-to-r from-[#b45309] to-[#d97706] text-white p-8 md:p-12 text-center space-y-6 shadow-md">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-200 block">
            Asegura tu detalle este 21 de Septiembre
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            ¿Listo para sorprender con un ramo que nunca se marchita?
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed">
            Revisa todos los modelos de ramos, gift boxes con peluche de carnerita y combos exclusivos de preventa en nuestro catálogo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onNavigateCatalog}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-amber-50 text-[#b45309] font-bold text-sm rounded-2xl shadow-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Ver Catálogo Completo de Ramos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Kajel! Estuve leyendo Sobre Nosotros y quisiera consultar detalles para mi pedido de flores amarillas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      </div>
    </div>
  );
};

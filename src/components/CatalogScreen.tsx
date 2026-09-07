import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_PHONE } from '../data/products';
import { createProductWhatsAppLink } from '../utils/whatsapp';
import { 
  Search, 
  Sparkles, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Check, 
  Gift, 
  Flame, 
  SlidersHorizontal 
} from 'lucide-react';

interface CatalogScreenProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (filterCategory === 'plush' && !p.hasPlush) return false;
      if (filterCategory === 'jewelry' && !p.hasJewelry) return false;
      if (filterCategory === 'budget' && p.price > 20) return false;
      if (filterCategory === 'boxes' && p.category !== 'boxes') return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchSub = p.subtitle.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchInc = p.inclusions.some(inc => inc.toLowerCase().includes(query));
        if (!matchName && !matchSub && !matchDesc && !matchInc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured default order
    });
  }, [filterCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-[#fffbeb] border border-[#e7e2d7]/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef08a] text-[#451a03] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Colección Preventa Flores Amarillas — Septiembre</span>
          </div>
          <h1 className="font-headline text-2xl md:text-3xl font-bold text-[#1c1917]">
            Catálogo de Ramos & Gift Boxes Eternos
          </h1>
          <p className="font-body text-xs md:text-sm text-[#57534e] max-w-2xl leading-relaxed">
            Elaborados artesanalmente en limpiapipas de chenille de alta densidad y follaje fino. Incluyen luces de hada cálidas y mini bombones Bon o bon por preventa.
          </p>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-[#e7e2d7]/30 shadow-xs flex-shrink-0">
          <span className="text-[11px] text-[#78716c] block font-semibold uppercase">Beneficio Preventa:</span>
          <span className="font-headline text-sm font-bold text-[#b45309] block">
            🎁 Luces Hada + Bombones Gratis
          </span>
          <span className="text-[10px] text-[#57534e]">Ahorro de hasta S/ 8.00 por pack</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#e7e2d7]/30 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === 'all'
                ? 'bg-[#b45309] text-white'
                : 'bg-[#fffbeb] text-[#57534e] hover:bg-[#fef3c7]'
            }`}
          >
            Todos ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilterCategory('boxes')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === 'boxes'
                ? 'bg-[#b45309] text-white'
                : 'bg-[#fffbeb] text-[#57534e] hover:bg-[#fef3c7]'
            }`}
          >
            Gift Boxes de Lujo
          </button>
          <button
            onClick={() => setFilterCategory('plush')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === 'plush'
                ? 'bg-[#b45309] text-white'
                : 'bg-[#fffbeb] text-[#57534e] hover:bg-[#fef3c7]'
            }`}
          >
            Con Peluches Nupciales
          </button>
          <button
            onClick={() => setFilterCategory('jewelry')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === 'jewelry'
                ? 'bg-[#b45309] text-white'
                : 'bg-[#fffbeb] text-[#57534e] hover:bg-[#fef3c7]'
            }`}
          >
            Con Joyería Giratoria
          </button>
          <button
            onClick={() => setFilterCategory('budget')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === 'budget'
                ? 'bg-[#b45309] text-white'
                : 'bg-[#fffbeb] text-[#57534e] hover:bg-[#fef3c7]'
            }`}
          >
            Económicos (S/ 13.90)
          </button>
        </div>

        {/* Search & Sort */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-56">
            <Search className="w-4 h-4 text-[#78716c] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#fffbeb] border border-[#e7e2d7]/50 rounded-lg text-[#1c1917] focus:border-[#b45309] focus:ring-1 focus:ring-[#b45309] outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#78716c]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-[#fffbeb] border border-[#e7e2d7]/50 rounded-lg px-2.5 py-1.5 text-[#1c1917] outline-none cursor-pointer"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#e7e2d7]/30 space-y-3">
          <p className="text-sm font-semibold text-[#57534e]">No se encontraron productos con esos filtros.</p>
          <button
            onClick={() => { setFilterCategory('all'); setSearchQuery(''); }}
            className="px-4 py-2 bg-[#b45309] text-white rounded-lg text-xs font-bold"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const whatsAppLink = createProductWhatsAppLink(product);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#e7e2d7]/30 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image with Badges */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative h-60 bg-[#fffbeb] overflow-hidden cursor-pointer"
                  >
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={product.image}
                      referrerPolicy="no-referrer"
                    />

                    {product.tag && (
                      <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs ${product.tagColor || 'bg-[#b45309] text-white'}`}>
                        {product.tag}
                      </span>
                    )}

                    <span className="absolute top-2.5 right-2.5 bg-[#f59e0b] text-[#451a03] text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {product.discountLabel}
                    </span>

                    {product.bestSeller && (
                      <span className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                        Top Ventas
                      </span>
                    )}
                  </div>

                  {/* Body Details */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-headline text-lg font-bold text-[#1c1917] hover:text-[#b45309] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#57534e] mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Inclusions checklist */}
                    <div className="bg-[#fffbeb] p-3 rounded-xl space-y-1.5 text-xs">
                      <span className="text-[10px] text-[#b45309] uppercase font-bold tracking-wider block">
                        Contenido del Pack:
                      </span>
                      <ul className="space-y-1 text-[#1c1917]">
                        {product.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] leading-tight">
                            <Check className="w-3 h-3 text-[#b45309] mt-0.5 flex-shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer and CTAs */}
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between mb-3 border-t border-[#e7e2d7]/20 pt-3">
                    <div>
                      <span className="text-[11px] text-[#78716c] line-through block">
                        Normal: S/ {product.normalPrice.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-[#b45309] font-bold">PREVENTA:</span>
                        <span className="font-headline text-xl text-[#b45309] font-bold">
                          S/ {product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="py-2.5 bg-[#fef3c7] hover:bg-[#fef3c7] text-[#1c1917] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#e7e2d7]/40"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>+ Bolsa</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2.5 bg-[#b45309] hover:bg-[#d97706] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer text-center"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Personalizar</span>
                    </button>
                  </div>

                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 w-full py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
                    <span>Pedir directo al WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

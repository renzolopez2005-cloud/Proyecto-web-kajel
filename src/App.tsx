import React, { useState } from 'react';
import { Product } from './types';
import { WHATSAPP_PHONE } from './data/products';
import { TopToolbar } from './components/TopToolbar';
import { HomeScreen } from './components/HomeScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      data-palette="girasol"
      className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1c1917] selection:bg-[#f59e0b] selection:text-[#451a03]"
    >
      {/* 1. DISTRACTION-FREE LANDING HEADER (No nav links, no palette dropdown) */}
      <TopToolbar onScrollToCatalog={handleScrollToCatalog} />

      {/* 2. SINGLE VERTICAL SCROLL LANDING CONTENT */}
      <main className="flex-1">
        <HomeScreen onSelectProduct={(prod) => setSelectedProduct(prod)} />
      </main>

      {/* 3. PRODUCT DETAILS MODAL (Opens in place, keeping the visitor on the landing page) */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <ProductDetailScreen
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
        </div>
      )}

      {/* 4. FLOATING CONVERSION ACTION BUTTON (WhatsApp Only - Zero Cart Clutter) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar por disponibilidad de ramos de flores amarillas para Lima.')}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4.5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          title="Chatear por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Consultas WhatsApp
          </span>
        </a>
      </div>

      {/* 5. MINIMALIST FOOTER */}
      <Footer />
    </div>
  );
}

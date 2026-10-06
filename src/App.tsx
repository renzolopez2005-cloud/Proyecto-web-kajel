import React, { useState } from 'react';
import { Product } from './types';
import { WHATSAPP_PHONE } from './data/products';
import { TopToolbar } from './components/TopToolbar';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'about'>('landing');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleScrollToCatalog = () => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById('catalogo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('catalogo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateAbout = () => {
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      data-palette="girasol"
      className="min-h-screen flex flex-col bg-gradient-to-b from-[#fef7e6] via-[#fffdf5] to-[#fef2d3] text-[#1c1917] selection:bg-[#f59e0b] selection:text-[#451a03] relative overflow-x-hidden"
    >
      {/* Warm Ambient Glow Atmosphere in Background */}
      <div className="fixed top-[-100px] left-[10%] w-[550px] h-[550px] bg-[#fde68a]/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-[35%] right-[-120px] w-[600px] h-[600px] bg-[#f59e0b]/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] left-[-100px] w-[500px] h-[500px] bg-[#fef08a]/35 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 1. DISTRACTION-FREE LANDING HEADER */}
      <TopToolbar onScrollToCatalog={handleScrollToCatalog} />

      {/* 2. MAIN VIEW: UNIFIED LANDING PAGE OR DEDICATED ABOUT PAGE */}
      <main className="flex-1">
        {currentView === 'landing' ? (
          <HomeScreen 
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onNavigateAbout={handleNavigateAbout}
          />
        ) : (
          <AboutScreen onNavigateCatalog={handleBackToLanding} />
        )}
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
      <Footer onNavigateAbout={handleNavigateAbout} />
    </div>
  );
}

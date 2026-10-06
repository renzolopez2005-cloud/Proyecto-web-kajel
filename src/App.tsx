import React, { useState, useEffect } from 'react';
import { Product, ColorPalette } from './types';
import { PRODUCTS, WHATSAPP_PHONE } from './data/products';
import { TopToolbar } from './components/TopToolbar';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { AboutScreen } from './components/AboutScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  // Color palette state persisted in localStorage
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(() => {
    try {
      const saved = localStorage.getItem('kajel_palette');
      const validPalettes: ColorPalette[] = [
        'girasol', 
        'botanico', 
        'romance', 
        'lavanda', 
        'atardecer', 
        'oceano', 
        'terracota', 
        'noche'
      ];
      if (saved && validPalettes.includes(saved as ColorPalette)) {
        return saved as ColorPalette;
      }
    } catch {
      // ignore
    }
    return 'girasol';
  });

  // Sync currentPalette with localStorage and root DOM element
  useEffect(() => {
    try {
      localStorage.setItem('kajel_palette', currentPalette);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute('data-palette', currentPalette);
    document.body.setAttribute('data-palette', currentPalette);
  }, [currentPalette]);

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseProductDetail = () => {
    setIsDetailOpen(false);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      data-palette={currentPalette}
      className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1c1917] selection:bg-[#f59e0b] selection:text-[#451a03] transition-colors duration-200"
    >
      {/* Top Sticky Header: Brand, Color Palette Selector & Direct WhatsApp CTA */}
      <TopToolbar
        currentPalette={currentPalette}
        onChangePalette={setCurrentPalette}
        onNavigateCatalog={scrollToCatalog}
      />

      {/* Main Single Landing Page Content Flow */}
      <main className="flex-1 space-y-12">
        {/* Hero, Presale Ribbon, Countdown & Why Kajel */}
        <HomeScreen
          onSelectProduct={handleOpenProductDetail}
          onNavigateCatalog={scrollToCatalog}
        />

        {/* Complete Catalog & Products Section */}
        <section id="catalogo" className="scroll-mt-16">
          <CatalogScreen
            onSelectProduct={handleOpenProductDetail}
          />
        </section>

        {/* Brand Lore, The Carnerita Story & Artisanal Craft */}
        <section id="historia" className="scroll-mt-16">
          <AboutScreen
            onNavigateCatalog={scrollToCatalog}
          />
        </section>

        {/* Lima District Delivery Calculator & FAQ Accordion */}
        <section id="envios" className="scroll-mt-16">
          <ContactScreen />
        </section>
      </main>

      {/* Product Detail Modal (Opens when inspecting a product) */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={handleCloseProductDetail}
      />

      {/* Floating Action Button: Quick WhatsApp Order Consultation */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar por disponibilidad de flores amarillas.')}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4d] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          title="Chatear por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Consultas WhatsApp
          </span>
        </a>
      </div>

      {/* Landing Page Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}

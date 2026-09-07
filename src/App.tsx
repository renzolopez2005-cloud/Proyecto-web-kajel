import React, { useState, useEffect } from 'react';
import { ActiveScreen, Product, ProductVariant, CartItem, ColorPalette } from './types';
import { PRODUCTS, WHATSAPP_PHONE, WHATSAPP_DISPLAY } from './data/products';
import { TopToolbar } from './components/TopToolbar';
import { BlueprintView } from './components/BlueprintView';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { AboutScreen } from './components/AboutScreen';
import { ContactScreen } from './components/ContactScreen';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('blueprint');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[2]); // Default to Gift Box V1
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>('girasol');
  
  // Initial cart with a default starter item so the cart isn't empty on first view
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return [
      {
        product: PRODUCTS[2],
        selectedVariant: PRODUCTS[2].variants ? PRODUCTS[2].variants[0] : undefined,
        quantity: 1,
        dedicationText: '“Ella sabía que él sabía que algún día pasaría que vendría a buscarla con sus Flores Amarillas”',
      },
    ];
  });

  // Scroll to top when changing screens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScreen]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveScreen('producto');
  };

  const handleAddToCart = (
    product: Product,
    variant?: ProductVariant,
    quantity: number = 1,
    dedication?: string
  ) => {
    setCartItems((prev) => {
      // Check if same product and variant exist
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant?.id === variant?.id
      );

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        if (dedication) copy[existingIdx].dedicationText = dedication;
        return copy;
      }

      return [
        ...prev,
        {
          product,
          selectedVariant: variant,
          quantity,
          dedicationText: dedication,
        },
      ];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      data-palette={currentPalette}
      className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1c1917] selection:bg-[#f59e0b] selection:text-[#451a03] transition-colors duration-200"
    >
      {/* Top Architecture Navigation & Status Bar */}
      <TopToolbar
        activeScreen={activeScreen}
        onSelectScreen={(screen) => setActiveScreen(screen)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currentPalette={currentPalette}
        onChangePalette={setCurrentPalette}
      />

      {/* Dynamic Screen View Content */}
      <main className="flex-1">
        {activeScreen === 'blueprint' && (
          <BlueprintView
            onNavigateScreen={(screen) => setActiveScreen(screen)}
            onAddToCart={handleAddToCart}
            onOpenProductDetail={handleSelectProduct}
            cartCount={totalCartCount}
          />
        )}

        {activeScreen === 'home' && (
          <HomeScreen
            onSelectProduct={handleSelectProduct}
            onNavigateCatalog={() => setActiveScreen('catalogo')}
            onAddToCart={(prod) => handleAddToCart(prod)}
          />
        )}

        {activeScreen === 'catalogo' && (
          <CatalogScreen
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod) => handleAddToCart(prod)}
          />
        )}

        {activeScreen === 'producto' && (
          <ProductDetailScreen
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBackToCatalog={() => setActiveScreen('catalogo')}
          />
        )}

        {activeScreen === 'nosotros' && (
          <AboutScreen
            onNavigateCatalog={() => setActiveScreen('catalogo')}
          />
        )}

        {activeScreen === 'contacto' && (
          <ContactScreen />
        )}
      </main>

      {/* Cart Drawer Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons: WhatsApp and Quick Cart */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={() => setIsCartOpen(true)}
          className="w-12 h-12 rounded-full bg-[#b45309] hover:bg-[#d97706] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 relative cursor-pointer"
          title="Ver bolsa de compras"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f59e0b] text-[#451a03] text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
              {totalCartCount}
            </span>
          )}
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Kajel! Deseo consultar por disponibilidad de flores amarillas.')}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg transition-transform hover:scale-105"
          title="Chatear por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Consultas WhatsApp
          </span>
        </a>
      </div>

      {/* Global Footer */}
      <Footer onSelectScreen={(screen) => setActiveScreen(screen)} />
    </div>
  );
}


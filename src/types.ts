export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  image: string;
  thumbImage: string;
  priceDiff?: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'ramos' | 'packs' | 'boxes';
  price: number;
  normalPrice: number;
  discountLabel: string;
  tag?: string;
  tagColor?: string;
  image: string;
  gallery: { url: string; label: string; thumb: string }[];
  description: string;
  inclusions: string[];
  variants?: ProductVariant[];
  hasJewelry?: boolean;
  hasPlush?: boolean;
  hasLights?: boolean;
  hasCandies?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
  dedicationText: string;
  includedGifts: string[];
}

export interface OrderForm {
  customerName: string;
  customerPhone: string;
  recipientName: string;
  deliveryAddress: string;
  district: string;
  deliveryDate: string;
  dedicationNote: string;
  paymentMethod: 'yape' | 'plin' | 'transferencia';
  notes: string;
}

export type ActiveScreen = 'blueprint' | 'home' | 'catalogo' | 'producto' | 'nosotros' | 'contacto';

export type ColorPalette = 'girasol' | 'botanico' | 'romance' | 'noche';

export interface PaletteOption {
  id: ColorPalette;
  name: string;
  badge: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  bgPreview: string;
}

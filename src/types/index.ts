export interface Product {
  id: string;
  name: string;
  nameRu: string;
  nameUz?: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  descriptionUz?: string;
  badge?: string;
  badgeUz?: string;
  weight?: string;
}

export interface Category {
  id: string;
  nameRu: string;
  nameUz?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryInfo {
  recipientName: string;
  phone: string;
  message?: string;
}

export type Screen = 'landing' | 'products' | 'cart' | 'checkout' | 'success' | 'privacy';

import { useState } from 'react';
import type { Product } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { QuantityControl } from './QuantityControl';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, open, onClose }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { t, getName, language } = useLanguage();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
    onClose();
  };

  const badge = language === 'uz' && product.badgeUz ? product.badgeUz : product.badge;
  const description = language === 'uz' && product.descriptionUz ? product.descriptionUz : product.description;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[350px] bg-white p-0 gap-0">
        <div className="relative">
          <img
            src={product.image}
            alt={getName(product)}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {badge && (
            <Badge className="absolute top-3 left-3 bg-[#0A84FF] text-white">
              {badge}
            </Badge>
          )}
          {product.weight && (
            <Badge className="absolute top-3 right-3 bg-gray-500 text-white">
              {product.weight}
            </Badge>
          )}
        </div>

        <div className="p-6 space-y-4">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-left">
              {getName(product)}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <p className="text-2xl font-bold text-[#0A84FF]">
              {product.price.toLocaleString()} {t('products.currency')}
            </p>

            {description && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">{t('product.description')}</h4>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium">{t('product.inCart')}</span>
              <QuantityControl
                quantity={quantity}
                onIncrement={() => setQuantity((q) => q + 1)}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
              />
            </div>
          </div>

          <Button
            className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white"
            onClick={handleAddToCart}
          >
            {t('product.add')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

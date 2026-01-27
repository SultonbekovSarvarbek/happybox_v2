import { useState } from 'react';
import { Product } from '@/types';
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

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, open, onClose }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[350px] bg-white p-0 gap-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.nameRu}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-[#0A84FF] text-white">
              {product.badge}
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
              {product.nameRu}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <p className="text-2xl font-bold text-[#0A84FF]">
              {product.price.toLocaleString()} сум
            </p>

            {product.description && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Описание</h4>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium">В корзине</span>
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
            Добавить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

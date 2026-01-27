import { Product } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow bg-white"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.nameRu}
          className="w-full h-32 object-cover"
        />
        {product.badge && (
          <Badge className="absolute top-2 left-2 bg-[#0A84FF] text-white text-xs">
            {product.badge}
          </Badge>
        )}
        {product.weight && (
          <Badge className="absolute top-2 right-2 bg-gray-500 text-white text-xs">
            {product.weight}
          </Badge>
        )}
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
          {product.nameRu}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[#0A84FF] font-semibold">
            {product.price.toLocaleString()} сум
          </p>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-[#0A84FF] hover:bg-[#0A84FF]/90"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

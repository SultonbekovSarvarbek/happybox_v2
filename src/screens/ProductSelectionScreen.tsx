import { useState } from 'react';
import { ChevronLeft, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductDetailModal } from '@/components/product/ProductDetailModal';
import { useNavigation } from '@/context/NavigationContext';
import { useCart } from '@/context/CartContext';
import { categories, products } from '@/data/products';
import type { Product } from '@/types';

export function ProductSelectionScreen() {
  const { goBack, navigateTo } = useNavigation();
  const { totalItems, totalPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#E8F4FF] flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={goBack}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Выбор товаров</h1>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => navigateTo('cart')}
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>

      {/* Category Filter */}
      <div className="bg-white px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.nameRu}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          {categories.find((c) => c.id === selectedCategory)?.nameRu}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Cart Preview Button */}
      {totalItems > 0 && (
        <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200">
          <Button
            className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white h-12 rounded-xl flex items-center justify-between px-6"
            onClick={() => navigateTo('cart')}
          >
            <span className="font-medium">
              {totalItems} товар · {totalPrice.toLocaleString()} сум
            </span>
            <div className="flex items-center gap-2">
              <span>Просмотр коробки</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        open={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

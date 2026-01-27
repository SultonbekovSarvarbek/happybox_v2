import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
}

export function QuantityControl({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
}: QuantityControlProps) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={onDecrement}
        disabled={quantity <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-base font-medium min-w-[20px] text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90 border-[#0A84FF]"
        onClick={onIncrement}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

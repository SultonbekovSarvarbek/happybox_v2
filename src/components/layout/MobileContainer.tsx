import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[390px] min-h-screen bg-[#E8F4FF] shadow-2xl relative">
        {children}
      </div>
    </div>
  );
}

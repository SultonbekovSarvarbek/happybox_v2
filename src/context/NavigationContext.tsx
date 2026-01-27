import { createContext, useContext, useState, ReactNode } from 'react';
import { Screen, Product } from '@/types';

interface NavigationContextType {
  currentScreen: Screen;
  navigateTo: (screen: Screen) => void;
  goBack: () => void;
  history: Screen[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [history, setHistory] = useState<Screen[]>(['landing']);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (screen: Screen) => {
    setHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentScreen,
        navigateTo,
        goBack,
        history,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

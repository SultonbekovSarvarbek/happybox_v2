import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { ru, type TranslationKey } from './translations/ru';
import { uz } from './translations/uz';

export type Language = 'ru' | 'uz';

const translations: Record<Language, Record<TranslationKey, string>> = { ru, uz };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  getName: (item: { nameRu: string; nameUz?: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('happybox-lang');
    return saved === 'uz' ? 'uz' : 'ru';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('happybox-lang', lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || translations.ru[key] || key;
  }, [language]);

  const getName = useCallback((item: { nameRu: string; nameUz?: string }): string => {
    if (language === 'uz' && item.nameUz) return item.nameUz;
    return item.nameRu;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getName }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

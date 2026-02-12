import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-sm">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
          language === 'ru'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('uz')}
        className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
          language === 'uz'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        UZ
      </button>
    </div>
  );
}

import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/i18n/LanguageContext';

export function LandingScreen() {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-[#E8F4FF]">
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="bg-[#0A84FF] p-8 rounded-3xl shadow-lg">
          <Gift className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">HappyBox</h1>
          <p className="text-gray-600 text-base px-4">
            {t('landing.subtitle')}
          </p>
        </div>

        <Button
          className="w-full max-w-[320px] bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white h-12 text-base rounded-xl mt-8"
          onClick={() => navigateTo('products')}
        >
          <Gift className="w-5 h-5 mr-2" />
          {t('landing.cta')}
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 pb-4">
        <span className="text-xs text-gray-500">{t('landing.birthday')}</span>
        <span className="text-xs text-gray-400">&middot;</span>
        <span className="text-xs text-gray-500">{t('landing.loved')}</span>
        <span className="text-xs text-gray-400">&middot;</span>
        <span className="text-xs text-gray-500">{t('landing.justBecause')}</span>
        <span className="text-xs text-gray-400">&middot;</span>
        <span className="text-xs text-gray-500">{t('landing.holidays')}</span>
      </div>
    </div>
  );
}

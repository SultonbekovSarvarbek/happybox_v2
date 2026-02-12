import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

export function PrivacyPolicyScreen({ onBack }: PrivacyPolicyScreenProps) {
  const { t } = useLanguage();

  const renderList = (itemsStr: string) =>
    itemsStr.split('|').map((item) => <li key={item}>{item}</li>);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            {t('privacy.title')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {t('privacy.headerTitle')}
        </h2>
        <p className="text-sm text-gray-400 mb-10">
          {t('privacy.lastUpdated')}
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          {t('privacy.intro')}
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s1.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s1.content')}
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s2.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {t('privacy.s2.intro')}
          </p>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            {t('privacy.s2.1.title')}
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5 ml-2">
            {renderList(t('privacy.s2.1.items'))}
          </ul>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            {t('privacy.s2.2.title')}
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5 ml-2">
            {renderList(t('privacy.s2.2.items'))}
          </ul>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            {t('privacy.s2.3.title')}
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
            {renderList(t('privacy.s2.3.items'))}
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s3.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {t('privacy.s3.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
            {renderList(t('privacy.s3.items'))}
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s4.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {t('privacy.s4.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            {renderList(t('privacy.s4.items'))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s4.note')}
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s5.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {t('privacy.s5.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            {renderList(t('privacy.s5.items'))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s5.note')}
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s6.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {t('privacy.s6.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            {renderList(t('privacy.s6.items'))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s6.note')}
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s7.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {t('privacy.s7.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            {renderList(t('privacy.s7.items'))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s7.note')}{' '}
            <a
              href="mailto:info@happybox.uz"
              className="text-[#0A84FF] hover:underline"
            >
              info@happybox.uz
            </a>
            {' / '}
            <a
              href="tel:+998940444581"
              className="text-[#0A84FF] hover:underline"
            >
              +998 94 044 45 81
            </a>
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s8.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s8.content')}
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s9.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s9.content')}
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('privacy.s10.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('privacy.s10.content')}
          </p>
          <p className="mt-2">
            <a
              href="mailto:info@happybox.uz"
              className="text-[#0A84FF] hover:underline font-medium"
            >
              info@happybox.uz
            </a>
            <br />
            <a
              href="tel:+998940444581"
              className="text-[#0A84FF] hover:underline font-medium"
            >
              +998 94 044 45 81
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

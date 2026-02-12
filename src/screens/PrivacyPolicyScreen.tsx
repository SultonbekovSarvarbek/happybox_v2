import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyScreenProps {
  onBack: () => void;
}

export function PrivacyPolicyScreen({ onBack }: PrivacyPolicyScreenProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            Политика конфиденциальности
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Политика конфиденциальности HappyBox
        </h2>
        <p className="text-sm text-gray-400 mb-10">
          Дата последнего обновления: 12 февраля 2026 г.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Настоящая Политика конфиденциальности объясняет, какие данные собирает
          сервис HappyBox, как они используются и защищаются. Используя сайт или
          приложение HappyBox, вы соглашаетесь с данной Политикой.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            1. Общие положения
          </h3>
          <p className="text-gray-600 leading-relaxed">
            HappyBox уважает право пользователей на конфиденциальность и
            принимает меры для защиты персональных данных. Мы собираем и
            обрабатываем данные только в объёме, необходимом для работы сервиса и
            предоставления услуг.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            2. Какие данные мы можем собирать
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Мы можем получать следующие категории информации:
          </p>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            2.1 Данные, предоставленные пользователем
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5 ml-2">
            <li>имя</li>
            <li>номер телефона</li>
            <li>email</li>
            <li>текст сообщений</li>
            <li>данные заказа</li>
          </ul>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            2.2 Технические данные
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5 ml-2">
            <li>IP-адрес</li>
            <li>тип устройства</li>
            <li>браузер</li>
            <li>операционная система</li>
            <li>язык интерфейса</li>
            <li>данные cookies (при использовании сайта)</li>
          </ul>

          <h4 className="text-base font-medium text-gray-800 mb-2">
            2.3 Данные заказа
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
            <li>выбранный сертификат</li>
            <li>дата покупки</li>
            <li>статус заказа</li>
            <li>сумма платежа</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            3. Как используются данные
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Мы используем данные для:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
            <li>обработки заказов</li>
            <li>передачи сертификатов</li>
            <li>связи с пользователем</li>
            <li>поддержки клиентов</li>
            <li>улучшения сервиса</li>
            <li>предотвращения мошенничества</li>
            <li>выполнения требований законодательства</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            4. Передача данных третьим лицам
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            HappyBox может передавать данные третьим лицам только в следующих
            случаях:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            <li>бизнес-партнёрам — для исполнения сертификата</li>
            <li>платёжным системам — для обработки оплаты</li>
            <li>государственным органам — если это требуется законом</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Мы не продаём и не передаём персональные данные третьим лицам в
            маркетинговых целях.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            5. Хранение и защита данных
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Мы принимаем разумные технические и организационные меры безопасности
            для защиты данных от:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            <li>несанкционированного доступа</li>
            <li>изменения</li>
            <li>раскрытия</li>
            <li>уничтожения</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Данные хранятся только столько времени, сколько необходимо для
            выполнения целей обработки или требований законодательства.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            6. Cookies и аналитика
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Сайт HappyBox может использовать cookies и аналитические инструменты
            для:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            <li>корректной работы сайта</li>
            <li>улучшения интерфейса</li>
            <li>анализа поведения пользователей</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Пользователь может отключить cookies в настройках браузера.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            7. Права пользователя
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Пользователь имеет право:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 ml-2">
            <li>запросить информацию о своих данных</li>
            <li>потребовать исправления данных</li>
            <li>
              потребовать удаление данных (если это не противоречит закону)
            </li>
            <li>отозвать согласие на обработку</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Запрос можно отправить на email:{' '}
            <a
              href="mailto:info@happybox.uz"
              className="text-[#0A84FF] hover:underline"
            >
              info@happybox.uz
            </a>
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            8. Ссылки на сторонние сервисы
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Сервис может содержать ссылки на сайты партнёров. HappyBox не несёт
            ответственность за политику конфиденциальности сторонних сайтов.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            9. Изменение политики
          </h3>
          <p className="text-gray-600 leading-relaxed">
            HappyBox вправе обновлять настоящую Политику. Актуальная версия
            всегда публикуется на сайте и в приложении. Продолжение использования
            сервиса означает согласие с изменениями.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            10. Контакты
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Если у вас есть вопросы по обработке данных, напишите нам:
          </p>
          <p className="mt-2">
            <a
              href="mailto:info@happybox.uz"
              className="text-[#0A84FF] hover:underline font-medium"
            >
              info@happybox.uz
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

const steps = [
  { num: '1', title: 'Оставляете заявку', description: 'Заполните короткую форму на сайте.' },
  { num: '2', title: 'Подключаем ваш бизнес', description: 'Мы настраиваем ваш кабинет партнёра.' },
  { num: '3', title: 'Вы создаёте сертификаты', description: 'Добавляете предложения, цены и описания.' },
  { num: '4', title: 'Пользователи покупают', description: 'Сертификаты появляются в каталоге HappyBox.' },
]

export function BusinessStepsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Подключение
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Как это работает
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100">
              <span className="w-10 h-10 rounded-full bg-[#0A84FF] text-white text-sm font-bold flex items-center justify-center shrink-0">
                {s.num}
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    name: "Алексей М.",
    location: "Московская область",
    text: "Перекрыли кровлю за 4 дня, всё аккуратно, без мусора. Прошёл сезон дождей — ни капли не просочилось. Рекомендую!",
    service: "Ремонт кровли",
  },
  {
    name: "Наталья К.",
    location: "Владимирская область",
    text: "Заказали баню под ключ. Ребята сделали всё быстро и качественно. Уже второй год топим — никаких претензий. Отдельное спасибо за утепление.",
    service: "Баня под ключ",
  },
  {
    name: "Сергей Т.",
    location: "Тульская область",
    text: "Обшили дом сайдингом и утеплили. Разница в тепле ощущается сразу. Цена оказалась ниже, чем у других подрядчиков, а качество лучше.",
    service: "Утепление и сайдинг",
  },
  {
    name: "Ирина В.",
    location: "Калужская область",
    text: "Пристроили террасу и навес для машины. Сделали быстро, всё ровно и красиво. Соседи уже спрашивают контакты мастеров!",
    service: "Терраса и навес",
  },
];

export default function Reviews() {
  return (
    <div className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Отзывы</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Что говорят наши клиенты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="border border-neutral-200 p-8 flex flex-col gap-4">
              <p className="text-neutral-700 text-base leading-relaxed">«{review.text}»</p>
              <div className="mt-auto pt-4 border-t border-neutral-100 flex justify-between items-end">
                <div>
                  <p className="font-bold text-neutral-900">{review.name}</p>
                  <p className="text-neutral-400 text-sm">{review.location}</p>
                </div>
                <span className="text-xs uppercase tracking-wide text-neutral-400 bg-neutral-100 px-3 py-1">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

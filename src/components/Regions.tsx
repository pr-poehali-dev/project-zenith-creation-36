const cities = [
  "Мытищи", "Пушкино", "Сергиев Посад", "Щёлково", "Софрино",
  "Зеленоград", "Красногорск", "Дмитров Лесной", "Ашукино", "Ивантеевка",
  "Дмитров", "Бронницы", "Воскресенск", "Обнинск", "Одинцово", "Тучково",
];

export default function Regions() {
  return (
    <div className="bg-neutral-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">География</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Работаем по всей Московской области
        </h2>
        <p className="text-neutral-400 mb-12 text-lg">Выезжаем в любой город и посёлок области — бесплатный замер на месте</p>
        <div className="flex flex-wrap gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="border border-neutral-600 text-white px-4 py-2 text-sm hover:border-white transition-colors duration-300"
            >
              {city}
            </span>
          ))}
          <span className="border border-white bg-white text-neutral-900 px-4 py-2 text-sm font-bold">
            + вся Московская область
          </span>
        </div>
      </div>
    </div>
  );
}

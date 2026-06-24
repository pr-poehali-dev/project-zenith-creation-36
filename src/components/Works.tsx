const works = [
  {
    img: "https://cdn.poehali.dev/projects/87db9df2-8ef3-4a12-a5b2-a40fd079da08/files/ea4b30cb-d2b3-4636-a3fc-20dbfbc2dcfb.jpg",
    title: "Кровля под ключ",
    desc: "Монтаж металлочерепицы, водосточная система, утепление",
  },
  {
    img: "https://cdn.poehali.dev/projects/87db9df2-8ef3-4a12-a5b2-a40fd079da08/files/f9b7ceaf-ae31-4ed4-b3f3-7f8f17ad92aa.jpg",
    title: "Баня из бруса",
    desc: "Строительство бани с нуля, отделка и печь",
  },
  {
    img: "https://cdn.poehali.dev/projects/87db9df2-8ef3-4a12-a5b2-a40fd079da08/files/3aa19fc7-240d-452c-b2dd-346722e12d18.jpg",
    title: "Терраса и беседка",
    desc: "Пристройка террасы и беседки к загородному дому",
  },
  {
    img: "https://cdn.poehali.dev/projects/87db9df2-8ef3-4a12-a5b2-a40fd079da08/files/28d2440c-afed-460a-8091-80adb0ad5423.jpg",
    title: "Обшивка сайдингом",
    desc: "Утепление фасада и обшивка виниловым сайдингом",
  },
];

export default function Works() {
  return (
    <div className="bg-neutral-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наши работы</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Примеры выполненных объектов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((work) => (
            <div key={work.title} className="group overflow-hidden bg-white">
              <div className="overflow-hidden h-64">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-neutral-900 mb-1">{work.title}</h4>
                <p className="text-neutral-500 text-sm">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

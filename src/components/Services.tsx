import Icon from "@/components/ui/icon";

const services = [
  { icon: "Home", title: "Ремонт кровли", desc: "Частичный и полный ремонт, замена покрытия, устранение протечек" },
  { icon: "Building2", title: "Крыша с нуля", desc: "Возведение стропильной системы и монтаж кровельного пирога" },
  { icon: "Layers", title: "Фундамент", desc: "Заливка фундамента, ремонт и реконструкция существующего" },
  { icon: "HousePlus", title: "Возведение домов", desc: "Строительство домов под ключ — от проекта до отделки" },
  { icon: "Flame", title: "Бани", desc: "Строительство бань из бруса и бревна с внутренней отделкой" },
  { icon: "LayoutDashboard", title: "Пристройки", desc: "Пристройки к дому: жилые комнаты, веранды, гаражи" },
  { icon: "TreePine", title: "Террасы и беседки", desc: "Открытые и закрытые террасы, беседки, зоны отдыха" },
  { icon: "Car", title: "Навесы", desc: "Навесы для автомобилей, дров, инвентаря и зон отдыха" },
  { icon: "Thermometer", title: "Утепление домов", desc: "Утепление фасада, стен, перекрытий и кровли" },
  { icon: "PanelTop", title: "Обшивка сайдингом", desc: "Виниловый, металлический и деревянный сайдинг под ключ" },
  { icon: "ArrowUpFromLine", title: "Ремонт пола", desc: "Замена и ремонт деревянного пола, лаги, черновой настил" },
  { icon: "RefreshCw", title: "Реконструкция", desc: "Полная реконструкция старых домов, надстройки и перепланировки" },
];

const WA_LINK = "https://wa.me/89299543999?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C";

export default function Services() {
  return (
    <div className="bg-white px-6 py-20" id="services">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Что мы делаем</h3>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight max-w-xl">
            Полный спектр строительных работ
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide font-bold hover:bg-neutral-800 transition-colors duration-300 w-fit shrink-0"
          >
            Узнать стоимость
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 flex flex-col gap-3 hover:bg-neutral-50 transition-colors duration-300">
              <Icon name={s.icon} size={28} className="text-neutral-900" />
              <h4 className="font-bold text-neutral-900 text-lg">{s.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

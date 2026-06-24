export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/87db9df2-8ef3-4a12-a5b2-a40fd079da08/files/9bedebd9-c07d-4ef9-a18d-587f51aa7184.jpg"
          alt="Готовый дом с террасой"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Полный цикл строительных работ</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Ремонт и замена кровли, фундамент с нуля и его реставрация, возведение домов и бань,
          пристройки, террасы, беседки, навесы, утепление и обшивка сайдингом. Делаем качественно и в срок.
        </p>
        <a
          href="https://wa.me/89299543999?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black w-fit uppercase tracking-wide inline-block"
        >
          Получить расчёт в WhatsApp
        </a>
      </div>
    </div>
  );
}
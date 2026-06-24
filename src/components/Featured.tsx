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
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Получить расчёт
        </button>
      </div>
    </div>
  );
}
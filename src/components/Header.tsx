interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-white text-sm uppercase tracking-wide font-bold">СтройМастер</div>
          <a href="tel:+79299543999" className="text-white/70 hover:text-white transition-colors duration-300 text-xs tracking-wide">+7 929 954-39-99</a>
        </div>
        <nav className="flex gap-8 items-center">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <a
            href="https://wa.me/89299543999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 text-sm uppercase tracking-wide font-bold hover:bg-neutral-200 transition-colors duration-300"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
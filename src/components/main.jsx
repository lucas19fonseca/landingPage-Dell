export default function Main() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(255,255,255,0.02)_100%)] pointer-events-none" />

      {/* Header */}
      <header className="z-10 flex flex-col items-center text-center px-6 animate-[fadeInUp_1s_ease-out] mb-4">
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[0.15em] mb-1">
            <span className="block bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative">
              DELL
            </span>
            <span className="block text-white/90 tracking-[0.18em] font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent">
              MASSOTERAPIA
            </span>
          </h1>
          <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mt-4 overflow-hidden" />
        </div>

        <p className="pt-6 text-neutral-200 text-lg sm:text-xl md:text-2xl tracking-wide font-light">
          Liberação Miofascial & Bem-Estar
        </p>
        <p className="pt-2 text-neutral-300 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
          Com Vandernilsa Lopes Rocha
        </p>
      </header>

      {/* Indicadores */}
      <section className="z-10 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-10 sm:pt-14 w-full max-w-4xl lg:max-w-5xl text-center px-4">
        {[
          { number: "20+", text: "anos de\nexperiência", icon: "fas fa-award" },
          {
            number: "5.0",
            text: "avaliação\nGoogle",
            icon: "fas fa-star",
            link: "https://www.google.com/search?sca_esv=bccd47c9b4a088db&hl=pt-BR&gl=br&output=search&kgmid=/g/11mkf6nx4r&q=Del520_massoterapia+Libera%C3%A7%C3%A3o-miofascial",
          },
          { number: "7", text: "técnicas\nespecializadas", icon: "fas fa-gem" },
        ].map((item, index) => {
          const cardContent = (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <i
                className={`${item.icon} text-white/20 text-lg absolute top-3 right-3 group-hover:text-white/30 transition-colors duration-300`}
              />
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                {item.number}
              </h2>
              <p className="uppercase text-[10px] sm:text-xs tracking-[0.15em] text-neutral-300 leading-relaxed whitespace-pre-line font-medium">
                {item.text}
              </p>
            </div>
          );

          return item.link ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </section>

      {/* Botões */}
      <section className="z-10 pt-12 sm:pt-16 max-w-3xl px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Botão Primário */}
          <a
            target="_blank"
            href="https://calendly.com/dellmassoterapia"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold uppercase tracking-[0.15em] text-xs py-4 px-8 rounded-xl transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="fas fa-calendar-check text-sm group-hover:rotate-12 transition-transform duration-300" />
              Agendar consulta
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>

          {/* Botão Secundário (corrigido para scroll suave) */}
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#servicos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-white via-neutral-100 to-white text-black font-bold uppercase tracking-[0.15em] text-xs py-4 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="fas fa-spa text-sm group-hover:rotate-180 transition-transform duration-500" />
              Conhecer serviços
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>

        {/* Scroll down */}
        <div className="pt-16 flex flex-col items-center text-neutral-300 animate-[fadeIn_1s_ease-out_1.5s_both]">
          <p className="text-[10px] uppercase tracking-[0.3em] motion-safe:animate-pulse font-medium mb-3">
            Descubra Mais
          </p>
          <i className="fas fa-chevron-down text-lg motion-safe:animate-bounce" />
        </div>
      </section>

      {/* Efeitos de fundo */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-[spin_20s_linear_infinite] -z-10" />
    </main>
  );
}

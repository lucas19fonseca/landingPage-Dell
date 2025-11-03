export default function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col items-center justify-center text-center text-white px-6">
      <header className="flex flex-col items-center">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-3xl uppercase tracking-widest mt-10 px-10 py-4 rounded-full">
          <i className="fas fa-award"></i>
          <strong>Desde 2005</strong>
        </div>

        <h1 className="text-7xl sm:text-8xl pt-10 font-semibold leading-tight tracking-wider">
          DELL <br />
          <span className="text-white/90 font-semibold tracking-wider">MASSOTERAPIA</span>
        </h1>

        <p className="pt-10 text-neutral-300 tracking-wider font-medium text-2xl">
          Liberação Miofascial & Bem-Estar
        </p>
        <p className="pt-3 text-neutral-400 tracking-wide text-sm">
          Com Vandernilsa Lopes Rocha
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16 ">
        <div>
          <h2 className="text-5xl font-bold text-white pb-5">20+</h2>
          <p className="uppercase text-sm tracking-wider text-neutral-400 tracking-widest">anos de experiência</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white pb-5">5.0</h2>
          <p className="uppercase text-sm tracking-wider text-neutral-400 tracking-widest">avaliação Google</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white pb-5">7</h2>
          <p className="uppercase text-sm tracking-wider text-neutral-400 tracking-widest">técnicas especializadas</p>
        </div>
      </section>

      <section className="pt-14">
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-xl px-10 py-4 w-fit min-w-[280px] justify-center">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-amber-300"></i>
            ))}
            <span className="ml-2 text-xl">5,0 estrelas nas avaliações do Google</span>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-15">
          <a
            href="#"
            className="bg-white text-black uppercase font-semibold tracking-widest py-5 px-14 rounded-full transition duration-500 hover:bg-black hover:text-white hover:scale-105"
          >
            <i className="fas fa-calendar-check mr-2"></i> Agendar consulta
          </a>

          <a
            href="#"
            className="bg-white text-black uppercase font-semibold tracking-widest py-5 px-14 rounded-full transition duration-500 hover:bg-black hover:text-white hover:scale-105"
          >
            <i className="fas fa-info-circle mr-2"></i> Conhecer serviços
          </a>
        </div>

        <div className="pt-16 text-neutral-300">
          <p className="text-sm uppercase tracking-widest animate-pulse">Ver mais</p>
          <i className="fas fa-chevron-down mt-2 text-xl animate-pulse-down"></i>
        </div>
      </section>
    </main>
  );
}

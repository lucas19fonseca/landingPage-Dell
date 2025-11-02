export default function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col items-center justify-center text-center text-white">
      <header>
        <h1 className="text-5xl pt-1    0 flex justify-center">
          <strong className="mr-4">DELL</strong> MASSOTERAPIA
        </h1>
        <p className="pt-10">Vandernilsa Lopes Rocha</p>
        <p className="pt-5">Massoterapeuta | Estudante de Fisioterapia</p>
      </header>

      <section className="pt-10">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-4xl px-10 py-4 w-fit min-w-[280px] justify-center">
            <i className="fas fa-star text-amber-300"></i>
            <i className="fas fa-star text-amber-300"></i>
            <i className="fas fa-star text-amber-300"></i>
            <i className="fas fa-star text-amber-300"></i>
            <i className="fas fa-star text-amber-300"></i>
            <span className="ml-2">5,0 (8 avaliações)</span>
          </div>
        </div>

        <p className="pt-10">Excelência em liberação miofascial desde 2005</p>

        <div className="pt-10 flex justify-center">
          <a
            href="#"
            className="bg-white text-black uppercase font-semibold tracking-widest py-5 px-14 rounded-xl hover:bg-gray-200 transition"
          >
            Agendar consulta
          </a>
        </div>
      </section>
    </main>
  );
}

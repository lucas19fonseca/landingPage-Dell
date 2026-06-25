export default function Galeria() {
    /*
      COMO TROCAR PELAS FOTOS REAIS:
      1. Coloque as imagens da cliente na pasta "public/galeria/"
         (ex.: public/galeria/foto1.jpg, foto2.jpg, ...).
      2. Em cada item abaixo, troque o bloco do placeholder (a <div> com o ícone)
         por uma imagem, assim:

         <img
           src="/galeria/foto1.jpg"
           alt="Descrição da foto"
           className="w-full h-full object-cover"
         />

      Dica: imagens na proporção quadrada ou 4:3 ficam melhores.
    */

    // Legendas opcionais de cada espaço. Edite à vontade.
    const fotos = [
        "Ambiente",
        "Atendimento",
        "Sala de massagem",
        "Técnicas",
        "Antes & Depois",
        "Resultados",
    ];

    return (
        <section id="galeria" className="py-8 md:py-12 lg:py-25 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-5">
                {/* Cabeçalho */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6 text-black tracking-wide justify-center flex items-center uppercase relative">
                    Galeria
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-30 h-0.5 bg-black"></div>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 lg:mb-15 italic">
                    Conheça um pouco do nosso espaço e do nosso trabalho
                </p>

                {/* Grid de fotos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {fotos.map((legenda, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden border border-gray-300 bg-[#f4f4f4]"
                        >
                            {/* PLACEHOLDER - troque por <img ... /> quando tiver as fotos */}
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 transition-colors duration-400 group-hover:text-gray-600">
                                <i className="fas fa-camera text-4xl sm:text-5xl mb-3"></i>
                                <span className="text-sm sm:text-base uppercase tracking-wide">
                                    {legenda}
                                </span>
                                <span className="text-xs mt-1 text-gray-400">Foto em breve</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

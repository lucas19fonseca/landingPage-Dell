export default function Tecnicas() {
    return (
        <section id="servicos" className="py-8 md:py-12 lg:py-25 bg-[#f4f4f4]">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-5">
                {/* Cabeçalho */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-black tracking-wide justify-center flex items-center uppercase relative">
                    Serviços & Técnicas
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-30 h-0.5 bg-black"></div>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 lg:mb-15 italic px-2">
                    Tratamentos especializados para seu bem-estar
                </p>

                {/* Grid de Serviços */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x-0 sm:divide-x divide-y divide-gray-300">
                    {/* Liberação Miofascial */}
                    <div className="group bg-white py-6 shadow-sm sm:py-8 md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-hands"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Liberação Miofascial
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Técnica principal que trabalha a fáscia muscular através de pressão e deslizamento, promovendo alívio de tensões profundas, melhora da mobilidade e recuperação de lesões.
                        </p>
                    </div>

                    {/* Ventosaterapia */}
                    <div className="group bg-white py-6 shadow-sm sm:py-8 md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-fire"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Ventosaterapia
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Terapia milenar que utiliza ventosas para criar sucção na pele, melhorando a circulação sanguínea, eliminando toxinas e aliviando dores musculares.
                        </p>
                    </div>

                    {/* Dry Needling */}
                    <div className="group bg-white py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-syringe"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Dry Needling
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Agulhamento a seco para tratamento de pontos-gatilho e liberação de tensões musculares profundas, promovendo alívio imediato da dor.
                        </p>
                    </div>

                    {/* Crochetagem Instrumental */}
                    <div className="group bg-white py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Crochetagem Instrumental
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Técnica que utiliza instrumentos específicos para tratamento de aderências fasciais e cicatrizes, melhorando a mobilidade dos tecidos.
                        </p>
                    </div>

                    {/* Eletroterapia TENS */}
                    <div className="group bg-white py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Eletroterapia TENS
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Estimulação elétrica transcutânea para alívio da dor e recuperação muscular, promovendo relaxamento e bem-estar.
                        </p>
                    </div>

                    {/* Magnetoterapia */}
                    <div className="group bg-white py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-magnet"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Magnetoterapia
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Aplicação de imãs terapêuticos para equilíbrio energético, melhora da circulação e redução de inflamações.
                        </p>
                    </div>

                    {/* Crioterapia */}
                    <div className="group bg-white py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 hover:bg-black hover:text-white hover:scale-102 hover:z-10 hover:shadow-xl">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-black transition-colors duration-400 group-hover:text-white">
                            <i className="fas fa-snowflake"></i>
                        </div>
                        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 font-normal uppercase tracking-wide">
                            Crioterapia
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px] transition-colors duration-400 group-hover:text-gray-300">
                            Terapia com aplicação de frio para redução de inflamações, alívio de dores agudas e aceleração da recuperação muscular.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
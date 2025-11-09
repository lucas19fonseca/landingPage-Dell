export default function Beneficios() {
    const beneficiosColuna1 = [
        { text: "Aumenta a mobilidade articular" },
        { text: "Favorece a execução dos movimentos" },
        { text: "Diminui a sobrecarga músculo-articular" },
        { text: "Libera e ativa os músculos" },
        { text: "Prepara a musculatura" },
        { text: "Melhora a circulação e respiração" },
        { text: "Promove mudanças físicas e emocionais" }
    ];

    const beneficiosColuna2 = [
        { text: "Aumenta a consciência corporal" },
        { text: "Relaxa a musculatura profundamente" },
        { text: "Ajuda na liberação do ácido lático" },
        { text: "Diminui as tensões musculares" },
        { text: "Auxilia na recuperação muscular" },
        { text: "Previne lesões efetivamente" },
        { text: "Proporciona bem-estar geral" }
    ];

    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h2 className="uppercase text-4xl md:text-5xl font-normal tracking-wide text-gray-800 mb-4">
                        Benefícios
                    </h2>
                    <div className="w-30 h-0.5 bg-black mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-gray-600 text-center mb-15 italic">
                        Transforme sua qualidade de vida
                    </p>
                </div>

                {/* Grid de Benefícios */}
                <div className="bg-[#f4f4f4] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 shadow-sm">
                    {/* Coluna 1 */}
                    <ul className="space-y-5">
                        {beneficiosColuna1.map((beneficio, index) => (
                            <li
                                key={index}
                                className="flex items-start group p-3 rounded-lg transition-all duration-300 relative"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg mr-4 flex-shrink-0">
                                    <svg 
                                        className="w-5 h-5 text-black" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M5 13l4 4L19 7"
                                        >
                                        </path>
                                    </svg>
                                </div>
                                
                                <span className="text-gray-700 font-medium pt-2">
                                    {beneficio.text}
                                </span>
                                
                                {/* Linha embaixo de cada item */}
                                <hr className="absolute bottom-0 left-0 w-full border-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </li>
                        ))}
                    </ul>

                    {/* Coluna 2 */}
                    <ul className="space-y-5">
                        {beneficiosColuna2.map((beneficio, index) => (
                            <li
                                key={index}
                                className="flex items-start group p-3 rounded-lg transition-all duration-300 relative"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg mr-4 flex-shrink-0">
                                    <svg 
                                        className="w-5 h-5 text-black" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M5 13l4 4L19 7"
                                        >
                                        </path>
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium pt-2">
                                    {beneficio.text}
                                </span>
                                
                                {/* Linha embaixo de cada item */}
                                <hr className="absolute bottom-0 left-0 w-full border-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
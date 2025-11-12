export default function investimento() {
    return (
        <section id="servicos" className="py-8 md:py-12 lg:py-25 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-5">
                {/* Cabeçalho */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6 text-black tracking-wide justify-center flex items-center uppercase relative">
                    Investimento
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-30 h-0.5 bg-black"></div>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 lg:mb-15 italic">
                    Escolha o melhor plano para você
                </p>

                {/* Container dos cards - centralizado com gap */}
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-9xl w-full">
                        {/* Primeiro card */}
                        <div className="group bg-black py-6 shadow-sm sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 text-center relative transition-all duration-400 text-white border border-gray-300">
                            <i className="fas fa-credit-card fa-3x mb-4" aria-hidden="true"></i>
                            <h1 className="text-2xl font-sans mb-3 tracking-wide">FORMAS DE PAGAMENTO</h1>
                            <p className="mb-1 text-lg">PIX • Cartão de Crédito/Débito</p>
                            <p className="text-sm mt-2 text-gray-300">Taxa da máquina (InfinitPay)</p>
                        </div>

                        {/* Segundo card */}
                        <div className="group bg-[#f4f4f4] py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 text-center relative transition-all duration-400 border border-gray-300">
                            <i className="fas fa-money-bill-wave fa-3x mb-4"></i>
                            <h1 className="text-xl font-sans mb-3 tracking-wide">DESCONTO ESPECIAL</h1>
                            <p className="mb-2">Dinheiro em Espécie</p>
                            <p className="text-3xl font-semibold">20% OFF</p>
                        </div>
                    </div>
                </div>

                {/* Terceira seção - PIX e WhatsApp */}
                <div className="flex justify-center mt-12 md:mt-16">
                    <div className="bg-white py-6 sm:py-8 md:py-8 px-4 sm:px-6 md:px-8 border-2 border-black text-center relative transition-all duration-400 max-w-7xl w-full">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center justify-center sm:justify-start">
                                <i className="fab fa-pix text-2xl mr-2" aria-hidden="true"></i>
                                <p className="text-lg">
                                    <strong>Chave PIX:</strong> demilsa2016@gmail.com
                                </p>
                            </div>
                            <a
                                target="_blank"
                                href="https://wa.me/5561993001047?text=Ol%C3%A1%2Ctudo%20bem%3F%0AGostaria%20de%20saber%20mais%20sobre%20o%20seu%20servi%C3%A7o!"
                                className="bg-green-500 hover:bg-green-600 hover:shadow-[0_0_15px_2px_rgba(37,211,102,0.8)] uppercase py-3 px-6 text-white font-bold flex items-center justify-center transition-all duration-300 rounded-lg"
                            >
                                <i className="fab fa-whatsapp text-white text-2xl mr-3"></i>
                                consultar valores no whatsapp
                            </a>

                        </div>
                    </div>
                </div>
                {/* Seção de Planos - Layout de 3 colunas */}
                <div className="mt-12 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-9xl mx-auto">

                        {/* Plano Individual */}
                        <div className="bg-[#f4f4f4] border border-gray-200 p-6 md:p-8 text-center flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">INDIVIDUAL</h3>

                            <div className="mb-6">
                                <p className="text-3xl font-bold text-gray-900">R$ 230</p>
                                <p className="text-gray-600">por sessão</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check"></i></span>
                                    <span className="text-gray-700">1 sessão de 45 minutos</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Escolha do tratamento</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Avaliação inicial completa</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Flexibilidade total de horário</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>
                            </div>

                            <a
                                href="https://calendly.com/dellmassoterapia"
                                target="_blank"
                                className="w-full bg-black hover:bg-white hover:text-black border-2 tracking-wider border-black text-white font-medium py-3 rounded transition duration-300 mt-auto"
                            >
                                AGENDAR
                            </a>
                        </div>


                        {/* Plano 5 Sessões */}
                        <div className="bg-[#f4f4f4] border border-gray-200 p-6 md:p-8 text-center flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">5 SESSÕES</h3>

                            <div className="mb-2">
                                <p className="text-3xl font-bold text-gray-900">R$ 680</p>
                            </div>
                            <p className="text-gray-450 mb-6">R$ 136 por sessão</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">5 sessões de 45 minutos</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Economia de R$ 470</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Tratamento personalizado</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Validade de 60 dias</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>

                                <div className="flex items-center justify-start">
                                    <span className="mr-3"><i className="fas fa-check mr-2 sm:mr-3"></i></span>
                                    <span className="text-gray-700">Prioridade no agendamento</span>
                                </div>
                                <div className="border-t border-gray-300 "></div>
                            </div>

                            <a
                                href="https://calendly.com/dellmassoterapia"
                                target="_blank"
                                className="w-full bg-black hover:bg-white hover:text-black border-2 tracking-wider border-black text-white font-medium py-3 rounded transition duration-300 mt-auto"
                            >
                                AGENDAR
                            </a>
                        </div>


                        {/* Plano 10 Sessões */}
                        <div className="bg-black text-white p-6 md:p-8 text-center border border-gray-300 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">10 SESSÕES</h3>

                                <div className="mb-2">
                                    <p className="text-3xl font-bold">R$ 1.250</p>
                                </div>
                                <p className="text-gray-300 mb-6">R$ 125 por sessão</p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>10 sessões de 45 minutos</span>
                                    </div>
                                    <div className="border-t border-gray-400"></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Economia de R$ 1.050</span>
                                    </div>
                                    <div className="border-t border-gray-400"></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Plano completo personalizado</span>
                                    </div>
                                    <div className="border-t border-gray-400"></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Validade de 90 dias</span>
                                    </div>
                                    <div className="border-t border-gray-400"></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Atendimento prioritário</span>
                                    </div>
                                    <div className="border-t border-gray-400"></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Acompanhamento contínuo</span>
                                    </div>
                                    <div className="border-t border-gray-400 "></div>

                                    <div className="flex items-center justify-start">
                                        <span className="mr-3">
                                            <i className="fas fa-check mr-2 sm:mr-3"></i>
                                        </span>
                                        <span>Melhor custo-benefício</span>
                                    </div>
                                    <div className="border-t border-gray-400 "></div>
                                </div>
                            </div>

                            <a
                                href="https://calendly.com/dellmassoterapia"
                                className="w-full bg-white hover:bg-black hover:text-white border-2 tracking-wider border-white text-gray-900 font-medium py-3 px-15 rounded transition duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.9)]"
                                target="_blank"
                            >
                                AGENDAR
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
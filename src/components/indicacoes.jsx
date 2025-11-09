export default function Indicacoes() {
    return (
        <section className="bg-[#f4f4f4] pb-12 md:pb-15">
            <div className="w-full px-6 sm:px-10 md:px-20 lg:px-35">
                {/* Cabeçalho */}
                <h2 className="flex justify-center uppercase text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-gray-800 mb-4 pt-8">
                    Indicações
                </h2>
                <div className="w-24 sm:w-30 h-0.5 bg-black mx-auto mb-4 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-600 text-center italic">
                    Para quem é recomendado
                </p>

                {/* Conteúdo principal */}
                <div className="w-full text-justify space-y-4 md:space-y-5 pt-5">
                    <p className="text-base sm:text-lg md:text-[19px] font-normal leading-relaxed">
                        A técnica de Liberação Miofascial é indicada para <strong>pessoas de todas as idades e estilos de vida</strong>, não só para atletas. A movimentação do cotidiano pode trazer desequilíbrios para o sistema miofascial.
                    </p>

                    <p className="text-base sm:text-lg md:text-[19px] font-normal leading-relaxed">
                        A técnica pode ser feita pelo próprio indivíduo na forma de automassagem, mas o ideal é que um profissional seja consultado para analisar o caso. Durante o tratamento, você pode sentir algum incômodo ao encontrar um ponto de grande tensão, entretanto, a sensação de alívio e os ganhos obtidos que vêm depois compensam.
                    </p>

                    <p className="text-base sm:text-lg md:text-[19px] font-normal leading-relaxed">
                        A Liberação Miofascial pode auxiliar no relaxamento das tensões do dia a dia, na prevenção do desgaste precoce e no tratamento de muitos casos de dor musculoesquelética. É um grande aliado na manutenção da qualidade de vida.
                    </p>

                    {/* Card de Contraindicações */}
                    <div className="w-full bg-white flex items-start p-4 sm:p-6 relative mt-6 shadow-sm">
                        {/* Linha vertical */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-black rounded-l-lg"></div>

                        {/* Conteúdo do card */}
                        <div className="ml-4 sm:ml-6 w-full">
                            <h3 className="uppercase text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide text-gray-800 mb-3 sm:mb-4 flex items-center flex-wrap lg:mt-4">
                                <i className="fas fa-exclamation-triangle mr-2 sm:mr-3"></i>
                                <span>Contraindicações</span>
                            </h3>
                            <p className="mb-3 sm:mb-4 lg:mb-10 lg:mt-10 text-base sm:text-lg">
                                A técnica não é recomendada nas seguintes situações:
                            </p>
                            
                            {/* Lista responsiva */}
                            <ul className="space-y-2 sm:space-y-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 lg:gap-x-8 text-sm sm:text-base md:text-[17px] lg:pb-10">
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Feridas abertas</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Infecções ativas</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Hematomas recentes</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Deficiência circulatória aguda</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Tratamento anticoagulante</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Hipersensibilidade da pele</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Diabetes descontrolada</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Osteoporose avançada</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-times mr-3 mt-1"></i>
                                    <span>Fraturas em fase inicial</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
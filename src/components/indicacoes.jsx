export default function indicacoes() {
    return (
        <section className="bg-[#f4f4f4]">
            <div >
                <h2 className="flex justify-center uppercase text-5xl font-normal tracking-wide text-gray-800 mb-4 pt-10">Indicações</h2>
                <div className="w-30 h-0.5 bg-black mx-auto mb-4 rounded-full"></div>
                <p class="px-20 italic flex justify-center">Para quem é recomendado</p>
                <div class="px-35 text-justify space-y-5 pt-5">
                    <p className="text-[19px] font-normal">A técnica de Liberação Miofascial é indicada para <strong>pessoas de todas as idades e estilos de vida</strong>, não só para atletas. A movimentação do cotidiano pode trazer desequilíbrios para o sistema miofascial.</p>

                    <p className="text-[19px] font-normal">A técnica pode ser feita pelo próprio indivíduo na forma de automassagem, mas o ideal é que um profissional seja consultado para analisar o caso. Durante o tratamento, você pode sentir algum incômodo ao encontrar um ponto de grande tensão, entretanto, a sensação de alívio e os ganhos obtidos que vêm depois compensam.</p>

                    <p className="text-[19px] font-normal">A Liberação Miofascial pode auxiliar no relaxamento das tensões do dia a dia, na prevenção do desgaste precoce e no tratamento de muitos casos de dor musculoesquelética. É um grande aliado na manutenção da qualidade de vida.</p>

                    <div className="bg-white flex items-start p-6 relative">
                        {/* Linha vertical na esquerda */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-black rounded-full"></div>

                        {/* Conteúdo do card */}
                        <div className="ml-6">
                            <h3 className="uppercase text-4xl font-normal tracking-wide text-gray-800 mb-4">
                                <i className="fas fa-exclamation-triangle"></i> Contraindicações
                            </h3>
                            <p className="mb-2">A técnica não é recomendada nas seguintes situações:</p>
                            <ul className="list-inside space-y-1 ">
                                <li><i className="fas fa-times mr-4"></i>Feridas abertas</li>
                                <li><i className="fas fa-times mr-4"></i>Infecções ativas</li>
                                <li><i className="fas fa-times mr-4"></i>Hematomas recentes</li>
                                <li><i className="fas fa-times mr-4"></i>Deficiência circulatória aguda</li>
                                <li><i className="fas fa-times mr-4"></i>Tratamento anticoagulante</li>
                                <li><i className="fas fa-times mr-4"></i>Hipersensibilidade da pele</li>
                                <li><i className="fas fa-times mr-4"></i>Diabetes descontrolada</li>
                                <li><i className="fas fa-times mr-4"></i>Osteoporose avançada</li>
                                <li><i className="fas fa-times mr-4"></i>Fraturas em fase inicial</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
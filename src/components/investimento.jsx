export default function investimento() {
    return (
        <section id="servicos" className="py-8 md:py-12 lg:py-25 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-5">
                {/* Cabeçalho */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6 text-black tracking-wide justify-center flex items-center uppercase relative">
                    Investimento
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-30 h-0.5 bg-black"></div>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 lg:mb-15 italic ">
                    Escolha o melhor plano para você
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x-0 sm:divide-x divide-y">
                    <div className="group bg-black py-6 shadow-sm sm:py-8 md:py-[50px] px-4 sm:px-6 md:px-[40px] text-center relative transition-all duration-400 text-white">
                        <i className="fas fa-credit-card" aria-hidden="true"></i>
                        <h1>FORMAS DE PAGAMENTO</h1>
                        <p>PIX • Cartão de Crédito/Débito</p>
                        <p>Taxa da máquina (InfinitPay)</p>
                    </div>


                    <div className="group bg-[#f4f4f4] py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border border-gray-300 text-center relative transition-all duration-400 ">
                        <i className="fas fa-money-bill-wave"></i>
                        <h1>DESCONTO ESPECIAL</h1>
                        <p>Dinheiro em Espécie</p>
                        <p>20% OFF</p>
                    </div>
                </div>
                <div className="group bg-[#f4f4f4] py-6 sm:py-8 shadow-sm md:py-[50px] px-4 sm:px-6 md:px-[40px] border-2 border-black text-center relative transition-all duration-400 ">
                   <p className=""> <i className="fab fa-pix" aria-hidden="true"></i><strong>Chave PIX:</strong> dernilsa2016@gmail.com</p>
                        <a href="" className="bg-green-500 uppercase p-4 text-white"><i className="fab fa-whatsapp text-white text-2xl mr-3 mt-1"></i>consultar valores no whatsapp</a>
                </div>
            </div>
        </section>
    );
}
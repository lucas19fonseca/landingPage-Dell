import Del from "../assets/libera.png"
export default function Sobre() {
    return (
<div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
  <div className="max-w-6xl mx-auto">
    
    {/* Título Principal */}
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 tracking-tight">
        SOBRE A DELL
      </h1>
      <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
    </div>

    {/* Layout em colunas lado a lado */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Coluna da Esquerda - Boas-vindas */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Bem-vindo à Dell Massoterapia
          </h2>
          <div className="w-16 h-0.5 bg-gray-300"></div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Sou <span className="font-medium text-gray-900">Vandernilsa Lopes Rocha</span>, conhecida como <span className="font-medium text-gray-900">Dell</span>.
          </p>

          <p>
            Tenho 45 anos e atuo na área de massagens desde 2005, somando <span className="font-medium text-gray-900">20 anos de experiência</span>.
          </p>

          <p>
            Atualmente, sou estudante de <span className="font-medium text-gray-900">Fisioterapia</span>, sempre buscando aprimorar meus conhecimentos.
          </p>

          <p>
            Meu foco é voltado para a <span className="font-medium text-gray-900">massagem miofascial</span> — conhecida como <span className="font-medium text-gray-900">Liberação Miofascial</span>.
          </p>
        </div>
      </div>

      {/* Coluna da Direita - Especialização */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Liberação Miofascial
          </h2>
          <div className="w-16 h-0.5 bg-gray-300"></div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Técnica que aplica pressão e deslizamento em pontos específicos do corpo para relaxar e alongar os músculos.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="font-medium text-gray-900">A fáscia</span> é uma membrana do tecido conjuntivo que permite o deslizamento dos músculos, mantém a força muscular e reduz a fricção.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                Além de prevenir, trata pequenas lesões e promove o equilíbrio do sistema musculoesquelético.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Elemento decorativo minimalista */}
    <div className="flex justify-center mt-16 space-x-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
    </div>
  </div>
</div>
    );
}
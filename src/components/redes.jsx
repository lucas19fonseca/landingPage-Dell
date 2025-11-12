import React from "react";

export default function Contatos() {
  const openWhatsapp = () => {
    window.open("https://wa.me/5561993001047", "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl text-white tracking-wide uppercase mb-6">
          Links úteis
        </h2>
        <div className="w-40 h-0.5 bg-white mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* WHATSAPP */}
          <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-5 shadow-xl backdrop-blur-md hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-green-400 text-2xl">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg mb-1">WhatsApp</h3>
                <p className="text-gray-300 text-sm">(61) 99300-1047</p>
              </div>
            </div>
            <a
              href="https://wa.me/5561993001047?text=Ol%C3%A1%2Ctudo%20bem%3F%0AGostaria%20de%20saber%20mais%20sobre%20o%20seu%20servi%C3%A7o!"
              target="_blank"
              className="mt-4 w-full bg-green-500 text-black font-semibold py-2.5 rounded-xl hover:bg-green-400 active:scale-95 transition-all text-sm"
            >
              Enviar Mensagem
            </a>
          </div>

          {/* ENDEREÇO */}
          <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-5 shadow-xl backdrop-blur-md hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-red-400 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg mb-1">Endereço</h3>
                <p className="text-gray-300 text-sm leading-snug">
                  SGAN 911 - Asa Norte <br /> Brasília - DF, 70790-110
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=SGAN+911+-+Asa+Norte,+Brasília+-+DF,+70790-110"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block w-full bg-red-500 text-black font-semibold py-2.5 rounded-xl hover:bg-red-400 active:scale-95 transition-all text-sm"
            >
              Ver no Mapa
            </a>
          </div>

          {/* INSTAGRAM */}
          <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-5 shadow-xl backdrop-blur-md hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-pink-400 text-2xl">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg mb-1">Instagram</h3>
                <p className="text-gray-300 text-sm">@del520_massoterapia</p>
              </div>
            </div>
            <a
              href="https://instagram.com/del520_massoterapia"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block w-full bg-pink-500 text-black font-semibold py-2.5 rounded-xl hover:brightness-110 active:scale-95 transition-all text-sm"
            >
              Visitar Perfil
            </a>
          </div>

          {/* AVALIAÇÕES GOOGLE */}
          <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-5 shadow-xl backdrop-blur-md hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center rounded-xl text-yellow-400 text-2xl">
                <i className="fas fa-star"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg mb-1">Avaliações Google</h3>
                <p className="text-gray-300 text-sm leading-snug">
                  Veja o que nossos clientes dizem sobre nossos serviços!
                </p>
              </div>
            </div>
            <a
              href="https://share.google/2mV9M9DHgJrWC68Yg"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block w-full bg-yellow-400 text-black font-semibold py-2.5 rounded-xl hover:bg-yellow-300 active:scale-95 transition-all text-sm"
            >
              Ver Avaliações
            </a>
          </div>

          {/* AGENDAMENTO */}
          <div className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-5 shadow-xl backdrop-blur-md hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-blue-400 text-2xl">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg mb-1">Agendamento</h3>
                <p className="text-gray-300 text-sm leading-snug">
                  Escolha seu melhor horário e agende sua sessão.
                </p>
              </div>
            </div>
            <a
              href="https://calendly.com/dellmassoterapia"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block w-full bg-blue-500 text-black font-semibold py-2.5 rounded-xl hover:bg-blue-400 active:scale-95 transition-all text-sm"
            >
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

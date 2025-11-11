import React from "react";

export default function Contatos() {
  const openWhatsapp = () => {
    window.open("https://wa.me/5561993001047", "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4 md:mb-6 text-white tracking-wide justify-center flex items-center uppercase relative">
          Entre em Contato
        </h2>
             <div className="w-40 h-0.5 bg-white mx-auto mt-4 mb-4 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WHATSAPP */}
          <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-3xl group-hover:bg-green-500/20 transition">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl mb-1">
                  WhatsApp
                </h3>
                <p className="text-gray-300">(61) 99300-1047</p>
              </div>
            </div>

            <button
              onClick={openWhatsapp}
              className="mt-6 w-full bg-green-500 text-black font-semibold py-3 rounded-xl hover:bg-green-400 active:scale-95 transition-all"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* ENDEREÇO */}
          <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 text-3xl group-hover:bg-red-500/20 transition">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl mb-1">
                  Endereço
                </h3>
                <p className="text-gray-300 leading-snug">
                  SGAN 911 - Asa Norte <br /> Brasília - DF, 70790-110
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-gray-700/70">
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1424215418843!2d-47.8830261!3d-15.7492976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bdf0873d5b5%3A0x123456789abcdef!2sSGAN%20911%20-%20Asa%20Norte%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v0000000000000"
                width="100%"
                height="180"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 text-3xl group-hover:bg-pink-500/20 transition">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl mb-1">
                  Instagram
                </h3>
                <p className="text-gray-300">@del520_massoterapia</p>
              </div>
            </div>

            <a
              href="https://instagram.com/del520_massoterapia"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold py-3 rounded-xl hover:brightness-110 active:scale-95 transition-all"
            >
              Visitar Perfil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

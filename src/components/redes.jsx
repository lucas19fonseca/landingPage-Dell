import { motion } from "framer-motion";

export default function Redes() {
  const openWhatsapp = (phone) => {
    const cleaned = phone.replace(/[^0-9]/g, "");
    const link = cleaned.startsWith("55")
      ? `https://wa.me/${cleaned}`
      : `https://wa.me/55${cleaned}`;
    window.open(link, "_blank");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Número copiado: " + text);
    } catch (e) {
      alert("Não foi possível copiar. Copie manualmente: " + text);
    }
  };

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 text-center">
          Nossas redes e contatos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="group bg-black/10 border border-gray-800 rounded-xl p-5 shadow-lg backdrop-blur-sm hover:scale-[1.02] transform transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white text-xl">
                <i className="fab fa-instagram"></i>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium text-lg">Loja Central</h3>
                <p className="text-gray-300 text-sm mt-1">
                  R. Exemplo, 123 - Centro, Cidade
                </p>
              </div>

              <div className="ml-2 flex flex-col items-end gap-2">
                <button
                  onClick={() => openWhatsapp("+55 (61) 9 9999-9999")}
                  className="text-sm px-3 py-1 bg-white text-black rounded-full font-medium border border-white/10 hover:brightness-95 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Whats
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-300 text-sm">Telefone</p>
                <p className="text-white font-medium">+55 (61) 9 9999-9999</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard("+55 (61) 9 9999-9999")}
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition"
                >
                  Copiar
                </button>

                <a
                  href="https://instagram.com/loja_central"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-gradient-to-tr from-pink-500/10 to-yellow-400/10 hover:from-pink-500/20 hover:to-yellow-400/20 transition flex items-center gap-2"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="font-medium">@loja_central</span>
                </a>
              </div>
            </div>
            <div className="mt-4 text-gray-400 text-xs">
              Clique em "Whats" para abrir uma conversa rápida ou copie o número.
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="group bg-black/10 border border-gray-800 rounded-xl p-5 shadow-lg backdrop-blur-sm hover:scale-[1.02] transform transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white text-xl">
                <i className="fab fa-instagram"></i>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium text-lg">Unidade Norte</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Av. Norte, 456 - Bairro
                </p>
              </div>

              <div className="ml-2 flex flex-col items-end gap-2">
                <button
                  onClick={() => openWhatsapp("+55 (61) 9 8888-8888")}
                  className="text-sm px-3 py-1 bg-white text-black rounded-full font-medium border border-white/10 hover:brightness-95 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Whats
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-300 text-sm">Telefone</p>
                <p className="text-white font-medium">+55 (61) 9 8888-8888</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard("+55 (61) 9 8888-8888")}
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition"
                >
                  Copiar
                </button>

                <a
                  href="https://instagram.com/unidade_norte"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-gradient-to-tr from-pink-500/10 to-yellow-400/10 hover:from-pink-500/20 hover:to-yellow-400/20 transition flex items-center gap-2"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="font-medium">@unidade_norte</span>
                </a>
              </div>
            </div>
            <div className="mt-4 text-gray-400 text-xs">
              Clique em "Whats" para abrir uma conversa rápida ou copie o número.
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="group bg-black/10 border border-gray-800 rounded-xl p-5 shadow-lg backdrop-blur-sm hover:scale-[1.02] transform transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white text-xl">
                <i className="fab fa-instagram"></i>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium text-lg">Atendimento VIP</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Alameda VIP, 10 - Setor
                </p>
              </div>

              <div className="ml-2 flex flex-col items-end gap-2">
                <button
                  onClick={() => openWhatsapp("+55 (61) 9 7777-7777")}
                  className="text-sm px-3 py-1 bg-white text-black rounded-full font-medium border border-white/10 hover:brightness-95 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Whats
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-gray-300 text-sm">Telefone</p>
                <p className="text-white font-medium">+55 (61) 9 7777-7777</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard("+55 (61) 9 7777-7777")}
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition"
                >
                  Copiar
                </button>

                <a
                  href="https://instagram.com/del520_massoterapia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 border border-white/10 rounded-md bg-gradient-to-tr from-pink-500/10 to-yellow-400/10 hover:from-pink-500/20 hover:to-yellow-400/20 transition flex items-center gap-2"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="font-medium">@del520_massoterapia</span>
                </a>
              </div>
            </div>
            <div className="mt-4 text-gray-400 text-xs">
              Clique em "Whats" para abrir uma conversa rápida ou copie o número.
            </div>
          </motion.article>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Quer outro estilo (lista compacta, cards maiores, ou com mapa integrado)? Me fala que eu adapto.
          </p>
        </div>
      </div>
    </section>
  );
}

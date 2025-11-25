import { motion } from "framer-motion";

const CentralAtendimento: React.FC = () => {
  return (
    <motion.div
      className="container max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* TÍTULO */}
      <motion.h1
        className="text-3xl font-bold text-blue-600 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Central de Atendimento – Secretaria Paroquial
      </motion.h1>

      {/* HORÁRIO DE ATENDIMENTO */}
      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          Horário de Atendimento
        </h3>

        <p className="text-gray-700 mb-2">
          A Secretaria Paroquial está disponível para atendimento presencial e
          pelo WhatsApp nos seguintes horários:
        </p>

        <ul className="text-gray-700 ml-4">
          <li className="mb-2">
            <strong>Segunda a Sexta:</strong> das 14h às 19h
          </li>
        </ul>

        <p className="text-gray-700 mt-4">
          <strong>Atendimento do Padre:</strong> terças e quintas a partir das
          15h.
        </p>
      </motion.section>

      {/* CONTATOS */}
      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Contatos da Secretaria
        </h3>

        <p className="mb-2">
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            className="text-blue-600 font-semibold hover:underline"
          >
            WhatsApp
          </a>
          : (86) 9 98877-9778
        </p>

        <p>
          <a
            href="https://maps.app.goo.gl/spjC5NR9tYVZF7Ng6"
            target="_blank"
            className="text-blue-600 font-semibold hover:underline"
          >
            Endereço
          </a>
          : Rua José Ebaid, 1047 - Dirceu II
        </p>
      </motion.section>

      {/* BOTÃO VOLTAR */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Voltar ao site principal
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default CentralAtendimento;

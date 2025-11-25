import { motion } from "framer-motion";

const Casamento: React.FC = () => {
  return (
    <motion.div
      className="container max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Título */}
      <motion.section
        className="mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-3">Casamento</h2>
        <p className="text-gray-700 text-lg">
          Informações sobre preparação, documentos e agendamento serão 
          adicionadas em breve.
        </p>
      </motion.section>

      {/* Botão */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.a
          href="/teste.html"
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

export default Casamento;

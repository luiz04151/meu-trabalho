import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

export default function Grupos() {
  return (
    <motion.main
      className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* TÍTULO */}
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-blue-700">
          Formulário de Inscrição para o EJC
        </h1>
        <p className="text-gray-600 mt-2">
          Participe do movimento jovem que transforma vidas através do amor de Cristo.
        </p>
      </motion.section>

      {/* CARD DO GRUPO */}
      <motion.section
        className="grupos-lista flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="grupo-card bg-gray-100 p-6 rounded-2xl shadow-md max-w-md text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Encontro de Jovens com Cristo (EJC)
          </h2>

          <p className="text-gray-700 mb-5">
            O EJC é um processo de evangelização que promove a conversão do jovem,
            levando-o a um encontro pessoal e profundo com Deus, incentivando seu
            engajamento na vida da Igreja.
          </p>

          <Link to="/cadastro-ejc" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Cadastro do EJC
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}

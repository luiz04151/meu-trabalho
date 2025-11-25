import { useTestimonials } from "../hooks/useTestimonials";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testemunhos() {
  const { testemunhos, addTestemunho } = useTestimonials();
  const [novo, setNovo] = useState("");

  const handleEnviar = () => {
    if (novo.trim().length === 0) return;
    addTestemunho(novo);
    setNovo("");
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Testemunhos
      </h1>

      {/* LISTA DE TESTEMUNHOS */}
      <ul className="flex flex-col gap-4 mb-6">
        <AnimatePresence>
          {testemunhos.map((t, i) => (
            <motion.li
              key={i}
              className="bg-gray-100 p-4 rounded-xl shadow-sm text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {t}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* INPUT */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-3"
      >
        <textarea
          value={novo}
          onChange={(e) => setNovo(e.target.value)}
          placeholder="Compartilhe seu testemunho..."
          rows={3}
          className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <br></br>

        <motion.button
          onClick={handleEnviar}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Enviar Testemunho
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

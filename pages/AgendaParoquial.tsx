import { useAgenda } from "../hooks/useAgenda";
import { motion } from "framer-motion";

export default function AgendaParoquial() {
  const { agenda, loading } = useAgenda();

  if (loading)
    return (
      <motion.p
        className="text-center mt-10 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Carregando agenda...
      </motion.p>
    );

  return (
    <motion.div
      className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* TÍTULO */}
      <motion.h2
        className="text-3xl font-bold text-blue-700 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Agenda Paroquial
      </motion.h2>

      {/* LISTAGEM */}
      <motion.ul
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {agenda.map((item, index) => (
          <motion.li
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-sm flex flex-col text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <span className="font-semibold text-blue-600 text-lg">
              {item.data}
            </span>
            <span className="text-gray-700">{item.evento}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

import React, { useReducer } from "react";
import { motion } from "framer-motion";

// Tipos do estado e ações
type State = {
  message: string;
  submitted: boolean;
};

type Action =
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SUBMIT" }
  | { type: "RESET" };

// Reducer para controlar o estado do feedback
function feedbackReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SUBMIT":
      return { ...state, submitted: true };
    case "RESET":
      return { message: "", submitted: false };
    default:
      return state;
  }
}

export default function FeedbackPage() {
  const [state, dispatch] = useReducer(feedbackReducer, {
    message: "",
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.message.trim().length === 0) return;
    dispatch({ type: "SUBMIT" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto p-8 mt-10 bg-white shadow-xl rounded-2xl border border-gray-200"
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Feedback do Site</h1>

      {!state.submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <textarea
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-blue-500 shadow-sm"
            placeholder="Escreva aqui sua opinião, sugestão ou elogio..."
            value={state.message}
            onChange={(e) =>
              dispatch({ type: "SET_MESSAGE", payload: e.target.value })
            }
            rows={6}
          />
          <br></br>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-blue-600 text-white font-semibold p-3 rounded-xl shadow-md"
          >
            Enviar Feedback
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Obrigado pelo seu feedback!
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Sua opinião é muito importante para nós.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-300 px-4 py-2 rounded-xl hover:bg-gray-400 transition shadow-sm"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Enviar outro feedback
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
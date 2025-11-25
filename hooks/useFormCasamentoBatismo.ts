import { useState } from "react";

export function useFormCasamentoBatismo() {
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "Casamento",
    data: "",
    contato: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert(`Inscrição enviada para ${formData.tipo}: ${formData.nome}`);
    setFormData({ nome: "", tipo: "Casamento", data: "", contato: "" });
  };

  return { formData, handleChange, handleSubmit };
}

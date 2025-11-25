import { useTestimonials } from "../hooks/useTestimonials";
import { useState } from "react";

export default function Testemunhos() {
  const { testemunhos, addTestemunho } = useTestimonials();
  const [novo, setNovo] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Testemunhos</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {testemunhos.map((t, i) => (
          <li key={i} style={{ margin: "10px 0", color: "#333" }}>{t}</li>
        ))}
      </ul>

      <input
        value={novo}
        onChange={(e) => setNovo(e.target.value)}
        placeholder="Compartilhe seu testemunho"
        style={{ padding: "10px", width: "300px", marginTop: "15px" }}
      />
      <br />
      <button onClick={() => { addTestemunho(novo); setNovo(""); }} style={{ marginTop: "10px" }}>
        Enviar
      </button>
    </div>
  );
}

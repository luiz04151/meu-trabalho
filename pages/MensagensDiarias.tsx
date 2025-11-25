import { useDailyMessage } from "../hooks/useDailyMessage";

export default function MensagensDiarias() {
  const mensagem = useDailyMessage();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Mensagem do Dia</h2>
      <p style={{ fontSize: "1.3rem", color: "#333", marginTop: "20px" }}>
        {mensagem}
      </p>
    </div>
  );
}

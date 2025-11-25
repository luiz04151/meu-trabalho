import { useAgenda } from "../hooks/useAgenda";

export default function AgendaParoquial() {
  const { agenda, loading } = useAgenda();

  if (loading) return <p style={{ textAlign: "center" }}>Carregando agenda...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Agenda Paroquial</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {agenda.map((item, i) => (
          <li key={i} style={{ margin: "10px 0", fontSize: "1.1rem" }}>
            <strong>{item.data}</strong> — {item.evento}
          </li>
        ))}
      </ul>
    </div>
  );
}

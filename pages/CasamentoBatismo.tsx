import React from "react";


const Casamento: React.FC = () => {
  return (
    <div className="container" style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#007bff" }}> Casamento</h2>
        <p style={{ textAlign: "justify", color: "#333" }}>
          O Sacramento do Matrimônio é uma bênção especial concedida por Deus àqueles que decidem
          unir suas vidas diante Dele. O casamento religioso representa o compromisso de amor, 
          fidelidade e fé, baseado na presença de Cristo no centro da família.
        </p>
        <p style={{ textAlign: "justify", color: "#333" }}>
          Para celebrar o casamento na Paróquia Santa Teresinha, os noivos devem participar do 
          <strong> curso de preparação matrimonial</strong>, realizado periodicamente pela pastoral
          familiar. Também é necessário apresentar os documentos pessoais e agendar a data com 
          antecedência mínima de <strong>3 meses</strong>.
        </p>
        <p>
           <strong>Informações e agendamentos:</strong>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp da secretaria
          </a>
        </p>
      </section>

      

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="/teste.html"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
           Voltar ao site principal
        </a>
      </div>
    </div>
  );
};

export default Casamento;

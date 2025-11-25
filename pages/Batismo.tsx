import React from "react";

const Batismo: React.FC = () => {
  return (
    <div className="container" style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#007bff" }}>Batismo</h2>

        <p style={{ textAlign: "justify", color: "#333" }}>
          O Batismo é o primeiro e mais importante dos sacramentos. É através dele que recebemos 
          a graça divina e nos tornamos membros da Igreja de Cristo. O sacramento pode ser recebido 
          por crianças, jovens e adultos, conforme a preparação adequada.
        </p>

        <p style={{ textAlign: "justify", color: "#333" }}>
          Os pais e padrinhos devem participar do <strong>encontro de preparação para o batismo</strong>,
          que acontece sempre no <strong>último sábado de cada mês</strong>. 
          As celebrações do batismo são realizadas no <strong>primeiro domingo de cada mês</strong>.
        </p>

        <p>
          <strong>Agende o batismo:</strong>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato com a secretaria
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

export default Batismo;

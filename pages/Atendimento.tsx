import React from "react";

const CentralAtendimento: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        lineHeight: "1.7",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "30px" }}>
        Central de Atendimento – Secretaria Paroquial
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#0056b3" }}>📞 Horário de Atendimento</h3>

        <p style={{ color: "#333" }}>
          A Secretaria Paroquial está disponível para atendimento presencial e telefônico nos seguintes horários:
        </p>

        <ul style={{ color: "#333" }}>
          <li><strong>Segunda a Sexta:</strong> 08h às 12h e 14h às 17h</li>
          <li><strong>Sábados:</strong> 08h às 12h</li>
        </ul>

        <p style={{ marginTop: "10px", color: "#333" }}>
          <strong>Atendimento do Padre:</strong> terças e quintas a partir das 15h.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#0056b3" }}>📄 Serviços Disponíveis</h3>

        <ul style={{ color: "#333" }}>
          <li>Agendamento de Batismo</li>
          <li>Agendamento de Casamento</li>
          <li>Emissão de certidões</li>
          <li>Inscrições para pastorais e movimentos</li>
          <li>Informações sobre sacramentos e celebrações</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#0056b3" }}>📍 Contatos da Secretaria</h3>

        <p><strong>Telefone:</strong> (86) 98877-9778</p>

        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=5586988779778"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para abrir o WhatsApp
          </a>
        </p>

        <p><strong>E-mail:</strong> secretaria@paroquiasantateresinha.com</p>

        <p><strong>Endereço:</strong> Av. Exemplo, 123 – Bairro Cidade – Teresina – PI</p>
      </section>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="/"
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

export default CentralAtendimento;

import React from "react";

const MissaComRosas: React.FC = () => {
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
      <h1
        style={{
          textAlign: "center",
          color: "#c2185b",
          marginBottom: "30px",
        }}
      >
        Missa com Rosas
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#8e155d" }}> Sobre a Missa</h3>

        <p style={{ color: "#333" }}>
          A <strong>Missa com Rosas</strong> é uma celebração especial dedicada a
          <strong> Santa Teresinha do Menino Jesus</strong>, conhecida como a
          Santa das Rosas e Doutora da Igreja.
        </p>

        <p style={{ color: "#333" }}>
          Essa missa é um momento de devoção, entrega espiritual e busca pela
          intercessão de Santa Teresinha, que prometeu derramar uma chuva de
          rosas sobre aqueles que confiam em sua intercessão.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#8e155d" }}> Data da Celebração</h3>

        <p style={{ color: "#333" }}>
          A Missa com Rosas acontece <strong>todo primeiro dia de cada mês</strong>.
        </p>

        <p style={{ color: "#333" }}>
          É um momento especial para agradecer, pedir graças e fortalecer a fé.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#8e155d" }}> Traga sua rosa!</h3>

        <p style={{ color: "#333" }}>
          Os fiéis são convidados a trazer uma rosa como sinal de devoção e pedidos pessoais.
        </p>

        <p style={{ color: "#333" }}>
          Ao final da missa, as rosas são abençoadas.
        </p>
      </section>

      <div
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        <a
          href="/"
          style={{
            backgroundColor: "#c2185b",
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

export default MissaComRosas;


import { Link } from "react-router-dom";
import "../App.css"; // usa o mesmo estilo geral

function Grupos() {
  return (
    <main className="grupos-container">
      <section className="intro">
        <h1>Formulário de inscrição para o EJC</h1>
        <p>
          
        </p>
      </section>

      <section className="grupos-lista">
        <div className="grupo-card">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczMjmGRSVzeIn2382791njNEmEkOrkwMVnYSPbqFDCIC16zFbxaX5Y_DWBt5-IpnGa6s1gcwb_VbWFnEiF8ZeW-KHK9D9S6sr5U51qq_mrcJc3PVneTpXuSCT2HiMUWbGlO0D_d9SwsyN0pWHf0Xl8Pl0w=w422-h633-s-no-gm?authuser=0" alt="EJC" />
          <h2>Encontro de Jovens com Cristo (EJC)</h2>
          <p>
           O EJC é um processo de evangelização que promove a conversão do jovem, levando-o a um encontro pessoal e profundo com Deus, incentivando seu engajamento na vida da Igreja.
          </p>
          <Link to="/cadastro-ejc" style={{ textDecoration: "none" }}>
        <button
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
           Cadastro do EJC
        </button>
      </Link>

        </div>

        
      </section>

      
    </main>
  );
}

export default Grupos;

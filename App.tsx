import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Missa from './pages/missa'

// Páginas existentes
import Grupos from './pages/Grupos'
import CadastroEjc from './pages/CadastroEjc'

// Novas páginas
import MensagensDiarias from './pages/MensagensDiarias'
import AgendaParoquial from './pages/AgendaParoquial'
import Testemunhos from './pages/Testemunhos'
import CasamentoBatismo from './pages/CasamentoBatismo'
import Batismo from './pages/Batismo'
import Atendimento from './pages/Atendimento'
import Feedback from './pages/feedback'

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center', padding: '20px' }}>

        {/* Logo com link para home */}
        <Link to="/">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczN_8WNxURZccAFmOAg-I1OnofrqxZlfrykzjs1dFV6NL0IABlNwZlN4Ku57QSWvOevssG1p7NCH37iC_p9xFu4Crdt5F_hHjVs7PGsUSo7zrmtwuc1gbRRtNbBfR_f_Pr4WI5zvDQeNyBo7UbU-W7WEwQ=w581-h633-s-no-gm?authuser=0"
            alt="Logo da Paróquia"
            height={100}
            style={{ cursor: "pointer" }}
          />
        </Link>

        <h2>Seja Bem-Vindo!</h2>
        <h1>Paróquia Santa Teresinha do Menino Jesus</h1>

        {/* Menu Principal */}
        <nav style={{ marginTop: '20px' }}>
          <Link to="/missa" style={{ margin: '0 10px' }}>Missa com Rosas</Link>
          <Link to="/grupos" style={{ margin: '0 10px' }}>Inscrição EJC</Link>
          <Link to="/mensagens" style={{ margin: '0 10px' }}>Mensagens</Link>
          <Link to="/agenda" style={{ margin: '0 10px' }}>Agenda</Link>
          <Link to="/testemunhos" style={{ margin: '0 10px' }}>Testemunhos</Link>
          <Link to="/casamento-batismo" style={{ margin: '0 10px' }}>Casamento</Link>
          <Link to="/batismo" style={{ margin: '0 10px' }}>Batismo</Link>
          <Link to="/atendimento" style={{ margin: '0 10px' }}>Atendimento</Link>
          <Link to="/feedback" style={{ margin: '0 10px' }}>Feedback</Link>

        </nav>
      </div>

      <div className="card">

        {/* Link para o site original */}
        <a href="/teste.html" style={{ textDecoration: "none" }}>
          <button>
            <strong>Acesse Nosso Site!</strong>
          </button>
        </a>

        <br />

        <p>Atendimento paroquial nas terças e quintas a partir das 15h</p>
      </div>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}></h1>} />

        <Route path="/missa" element={<Missa />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/cadastro-ejc" element={<CadastroEjc />} />

        {/* Novas páginas */}
        <Route path="/mensagens" element={<MensagensDiarias />} />
        <Route path="/agenda" element={<AgendaParoquial />} />
        <Route path="/testemunhos" element={<Testemunhos />} />
        <Route path="/casamento-batismo" element={<CasamentoBatismo />} />
        <Route path="/batismo" element={<Batismo />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

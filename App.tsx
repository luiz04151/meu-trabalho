import './App.css'
import logo from './assets/logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Páginas existentes
import Grupos from './pages/Grupos'
import CadastroEjc from './pages/CadastroEjc'

// Novas páginas sugeridas
import MensagensDiarias from './pages/MensagensDiarias'
import AgendaParoquial from './pages/AgendaParoquial'
import Testemunhos from './pages/Testemunhos'
import CasamentoBatismo from './pages/CasamentoBatismo'
import Batismo from './pages/Batismo'
import Atendimento from './pages/Atendimento'

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        {/* Logo com link interno */}
        <Link to="/">
          <img src={logo} className="logo" alt="Logo da Paróquia" />
        </Link>

        <h2>Seja Bem-Vindo!</h2>
        <h1>Paróquia Santa Teresinha do Menino Jesus</h1>

        {/* Menu principal */}
        <nav style={{ marginTop: '20px' }}>
          <Link to="/grupos" style={{ margin: '0 10px' }}>Inscrição EJC</Link>
          <Link to="/mensagens" style={{ margin: '0 10px' }}>Mensagens</Link>
          <Link to="/agenda" style={{ margin: '0 10px' }}>Agenda</Link>
          <Link to="/testemunhos" style={{ margin: '0 10px' }}>Testemunhos</Link>
          <Link to="/casamento-batismo" style={{ margin: '0 10px' }}>Casamento</Link>
          <Link to="/batismo" style={{ margin: '0 10px' }}>Batismo</Link>
          <Link to="/atendimento" style={{ margin: '0 10px' }}>Atendimento</Link>
        </nav>
      </div>

      <div className="card">
        {/* Botão para o site original */}
        <a href="/src/texte.html" target="_self" style={{ textDecoration: 'none' }}>
          <button>
            <strong>Acesse Nosso Site!</strong>
          </button>
        </a>

        <br />

        

        <p>Atendimento paroquial de ter a qui a partir das 15h</p>
      </div>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}></h1>} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/cadastro-ejc" element={<CadastroEjc />} />

        {/* Novas páginas */}
        <Route path="/mensagens" element={<MensagensDiarias />} />
        <Route path="/agenda" element={<AgendaParoquial />} />
        <Route path="/testemunhos" element={<Testemunhos />} />
        <Route path="/casamento-batismo" element={<CasamentoBatismo />} />
        <Route path="/batismo" element={<Batismo />} />
        <Route path="/atendimento" element={<Atendimento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

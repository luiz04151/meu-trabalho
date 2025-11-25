import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Pessoa {
  id: number;
  nome: string;
  email: string;
  endereco: string;
  bairro: string;       // ✔ corrigido
  nascimento: string;
  tipo: string;
}

function CadastroPessoas() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [form, setForm] = useState<Pessoa>({
    id: 0,
    nome: "",
    email: "",
    endereco: "",
    bairro: "",          // ✔ corrigido
    nascimento: "",
    tipo: "Participante",
  });

  // ------------------------------------
  //  Função para enviar dados ao PHP
  // ------------------------------------
  const salvarNoBanco = async () => {
    try {
      const response = await fetch("http://localhost/api/salvar_ejc.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const resultado = await response.json();

      if (resultado.status === "ok") {
        alert("Salvo no banco de dados!");
      } else {
        alert("Erro ao salvar: " + resultado.detalhe);
      }
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
      alert("Erro ao conectar com o servidor PHP.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const inserir = () => {
    if (!form.nome || !form.email) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    // Primeiro salva no PHP/MySQL
    salvarNoBanco();

    // Adiciona na tabela interna
    if (form.id === 0) {
      const novo = { ...form, id: pessoas.length + 1 };
      setPessoas([...pessoas, novo]);
    } else {
      setPessoas(
        pessoas.map((p) => (p.id === form.id ? form : p))
      );
    }

    limpar();
  };

  const limpar = () => {
    setForm({
      id: 0,
      nome: "",
      email: "",
      endereco: "",
      bairro: "",       // ✔ corrigido
      nascimento: "",
      tipo: "Participante",
    });
  };

  const editar = (pessoa: Pessoa) => {
    setForm(pessoa);
  };

  const excluir = (id: number) => {
    setPessoas(pessoas.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Cadastro EJC</h1>

      {/* Formulário */}
      <div className="card p-4 shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Nome completo:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="form-control"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">E-mail:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="exemplo@email.com"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              className="form-control"
              placeholder="Rua, número"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Bairro:</label>
            <input
              type="text"
              name="bairro"                 // ✔ corrigido
              value={form.bairro}           // ✔ corrigido
              onChange={handleChange}
              className="form-control"
              placeholder="Nome do bairro"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Data de nascimento:</label>
            <input
              type="date"
              name="nascimento"
              value={form.nascimento}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Tipo de cadastro:</label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Participante">Participante</option>
              <option value="Serviço">Serviço</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-success me-2" onClick={inserir}>
            Salvar
          </button>
          <button type="button" className="btn btn-secondary" onClick={limpar}>
            Limpar
          </button>
        </div>
      </div>

      {/* Tabela */}
      <h3 className="mt-5 mb-3">Lista de Registros</h3>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Nenhum registro cadastrado.
              </td>
            </tr>
          ) : (
            pessoas.map((pessoa) => (
              <tr key={pessoa.id}>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.tipo}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => editar(pessoa)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => excluir(pessoa.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CadastroPessoas;

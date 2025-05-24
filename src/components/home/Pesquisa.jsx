import "./Pesquisa.css";
import { useState } from "react";

function Pesquisa({ onClose, onResultados }) {
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(false);

  const buscarAtleta = async () => {
    if (!nome.trim()) return;
    setCarregando(true);
    try {
      const response = await fetch(
        `https://v1.mma.api-sports.io/fighters?search=${nome}`,
        {
          method: "GET",
          headers: {
            "x-apisports-key": "36fbea2dfe7f445271aa2be4e39976d6"
          }
        }
      );
      const data = await response.json();
      console.log("🔍 Dados da API com search:", data);

      if (data?.results > 0) {
        onResultados(data.response); // <- manda os dados pro Home
      } else {
        onResultados([]); // <- limpa os resultados
      }

    } catch (error) {
      console.error("❌ Erro na busca:", error);
      onResultados([]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="modal">
      <header className="header">
        <h2>Digite o nome do atleta</h2>
        <hr className="hr" />
      </header>

      <section className="inputs">
        <span className="span-input">
          <input
            type="text"
            placeholder="PROCURAR"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </span>
      </section>

      <footer className="footer">
        <button onClick={buscarAtleta}>Buscar</button>
        <button onClick={onClose}>Fechar</button>
      </footer>

      {carregando && <p>Carregando...</p>}
    </div>
  );
}

export default Pesquisa;

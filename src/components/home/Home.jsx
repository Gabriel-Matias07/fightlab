import { useState } from 'react';
import './Home.css';
import Pesquisa from './Pesquisa';
import ResultadoBusca from './ResultadoBusca'; // Card basico de exibição

function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [atletas, setAtletas] = useState([]);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="home-container">
      <header className='header-logo'>
        <h1 className='upperCase'>FightLab</h1>
      </header>

      <section className='section-title'>
        <h1 className='titles'>Encontre Grandes Nomes do Box</h1>
        <h2 className='upperCase'>
          Histórico, estatísticas e curiosidades dos <br />
          maiores boxeadores do mundo
        </h2>
      </section>

      <span className='span-btn'>
        <button onClick={abrirModal} className="btn">Pesquisar Atletas</button>
        <button className="btn">Sobre Nós</button>
      </span>

      {modalAberto && (
        <Pesquisa
          onClose={fecharModal}
          onResultados={setAtletas} // <- aqui passa os dados buscados pro Home
        />
      )}

      <ResultadoBusca atletas={atletas} /> {/* <- aqui exibe os dados */}
    </div>
  );
}

export default Home;

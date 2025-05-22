import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <span className='span'>
      <h1 className='upperCase'>Encontre Grandes Nomes do Box</h1>
      <h2 className='upperCase'>Histórico, estatísticas e curiosidades dos <br /> maiores boxeadores do mundo</h2>
      </span>
      <button className="btn">Pesquisar Atletas</button>
      <button className="btn">Sobre Nós</button>
    </div>

  );
}

function Button() {
  return (
    <div>
      <button className="btn">Pesquisar Atletas</button>
      <button className="btn">Sobre Nós</button>
    </div>
  );
}

export default Home;

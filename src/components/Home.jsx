import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className='nav'>
      <h1 className='upperCase'>Encontre Grandes Nomes do Box</h1>
      <h2 className='upperCase'>Histórico, estatísticas e curiosidades dos <br /> maiores boxeadores do mundo</h2>
      </nav>
      <button className="btn">Pesquisar Atletas</button>
      <button className="btn">Sobre Nós</button>
    </div>
  );
}

export default Home;

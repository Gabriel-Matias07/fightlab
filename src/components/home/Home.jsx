import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <header className='header-logo'>
        <h1 className='upperCase'>FightLab</h1>
      </header>
      <section className='section-title'>
        <h1 className='titles'>Encontre Grandes Nomes do Box</h1>
        <h2 className='upperCase'>Histórico, estatísticas e curiosidades dos <br /> maiores boxeadores do mundo</h2>
      </section>

        <span className='span-btn'>
          <button className="btn">Pesquisar Atletas</button>
          <button className="btn">Sobre Nós</button>
        </span>
    </div>

  );
}

export default Home;

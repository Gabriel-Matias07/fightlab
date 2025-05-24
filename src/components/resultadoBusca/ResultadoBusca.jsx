import './ResultadoBusca.css';

function ResultadoBusca() {
     const url = 'https://s2.glbimg.com/zm_sSdKEWems13p_-pgXoyO6c2g=/0x0:1877x1280/690x470/s.glbimg.com/es/ge/f/original/2015/01/04/img_3226.jpg';
    return (
        <div>
            <div className="container">
      <header>
        <div className="logo">FIGHTLAB</div>
      </header>

      <main>
        <h2 className="titulo">RESULTADO DA BUSCA</h2>

        <div className="cards">
          <div className="card">
            <img src={url} alt="Lutador" />
            <div className="info">
              <p className="nome">NOME</p>
              <p>Brasil</p>
              <p>Peso Médio</p>
              <p>26V - 3D - 1E</p>
              <button>ver perfil</button>
            </div>
          </div>

          <div className="card">
            <img src={url} alt="Lutador" />
            <div className="info">
              <p className="nome">NOME</p>
              <p>Brasil</p>
              <p>Peso Médio</p>
              <p>26V - 3D - 1E</p>
              <button>ver perfil</button>
            </div>
          </div>


          <div className="card">
            <img src={url} alt="Lutador" />
            <div className="info">
              <p className="nome">NOME</p>
              <p>Brasil</p>
              <p>Peso Médio</p>
              <p>26V - 3D - 1E</p>
              <button>ver perfil</button>
            </div>
          </div>
        </div>
      </main>
    </div>                
        </div>
    );
};

export default ResultadoBusca;
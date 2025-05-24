import "./Favoritos.css";

const Favoritos = () => {
  const favoritos = [
    {
      id: 1,
      nome: "Nome",
      pais: "Brasil",
      categoria: "Peso Médio",
      vitorias: 28,
      derrotas: 3,
      empates: 1,
      imagem: "https://www.ufc.com.br/images/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=VutZvq6g"
    },
    {
      id: 2,
      nome: "Nome",
      pais: "Brasil",
      categoria: "Peso Médio",
      vitorias: 28,
      derrotas: 3,
      empates: 1,
      imagem: "https://www.ufc.com.br/images/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=VutZvq6g"
    },
    {
      id: 3,
      nome: "Nome",
      pais: "Brasil",
      categoria: "Peso Médio",
      vitorias: 28,
      derrotas: 3,
      empates: 1,
      imagem: "https://www.ufc.com.br/images/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=VutZvq6g"
    }
  ];

  return (
    <div className="container">
      <h1 className="titulo">ATLETAS FAVORITOS</h1>
      <div className="linha-vermelha"></div>
      <div className="cards">
        {favoritos.map((atleta) => (
          <div key={atleta.id} className="card-atleta">
            <img src={atleta.imagem} alt={atleta.nome} className="imagem-atleta" />
            <div className="info-atleta">
              <div className="nome-atleta">{atleta.nome}</div>
              <p>{atleta.pais}</p>
              <p>{atleta.categoria}</p>
              <p>{`${atleta.vitorias}V - ${atleta.derrotas}D - ${atleta.empates}E`}</p>
              <button>ver perfil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;

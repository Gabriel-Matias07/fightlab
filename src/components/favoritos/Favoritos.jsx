import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favoritos.css";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">ATLETAS FAVORITOS</h1>
      <div className="linha-vermelha"></div>
      <div className="cards">
        {favoritos.length > 0 ? (
          favoritos.map((atleta) => (
            <div key={atleta.id} className="card-atleta">
              <img src={atleta.photo || 'https://jacksonwink.com/wp-content/uploads/2023/09/642f3a306a28fe28935d27cb_jackson-wink-mma-fighter-profile-image-placeholder-male-01-p-20001-scaled-scaled.webp'} alt={atleta.name} className="imagem-atleta" />
              <div className="info-atleta">
                <div className="nome-atleta">{atleta.name}</div>
                <p>{atleta.country?.name || 'País desconhecido'}</p>
                <p>{atleta.category || 'Categoria desconhecida'}</p>
                <p>{${atleta.wins?.total || 0}V - ${atleta.losses?.total || 0}D - ${atleta.draws || 0}E}</p>
                <button onClick={() => navigate(/atleta/${atleta.id})}>Ver perfil</button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum atleta favorito encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;
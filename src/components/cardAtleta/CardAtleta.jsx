import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './CardAtleta.css'
import marcaPaginas from '../../assets/image/marca-paginas.png';

const CardAtleta = () => {

    function adicionarFavorito(lutador) {
        const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || []
        const jaExiste = favoritosSalvos.find(f => f.id === lutador.id)
        if (!jaExiste) {
            favoritosSalvos.push(lutador)
            localStorage.setItem('favoritos', JSON.stringify(favoritosSalvos))
        }
    }

    const { id } = useParams()
    const [lutador, setLutador] = useState(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const buscarLutador = async () => {
            try {
                const res = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, {
                    headers: {
                        'x-rapidapi-host': 'v1.mma.api-sports.io',
                        'x-rapidapi-key': '36fbea2dfe7f445271aa2be4e39976d6'
                    }
                })

                const data = await res.json()
                setLutador(data.response[0])
            } catch (error) {
                console.error('Erro ao buscar lutador:', error)
            } finally {
                setCarregando(false)
            }
        }

        buscarLutador()
    }, [id])

    if (carregando) return <p>Carregando dados do lutador...</p>
    if (!lutador) return <p>Lutador não encontrado.</p>

    return (
        <div className="container">
            <header>
                <div className="logo">FIGHTLAB</div>
            </header>

            <main>
                <div className="infoIniciais">
                    <div
                        className="imgLutador"
                        style={{
                            backgroundImage: `url(${lutador.photo || 'https://via.placeholder.com/300'})`
                        }}
                    ></div>

                    <div className="nomeLutador">
                        <h1>{lutador.name}</h1>
                        <h2>"{lutador.nickname || 'Sem apelido'}"</h2>
                        <h2>Última atualização: {lutador.last_update || 'Data desconhecida'}</h2>
                    </div>

                    <div className="favButton" onClick={() => adicionarFavorito(lutador)}>
                        <img src={marcaPaginas} alt="Favoritar" />
                    </div>
                </div>

                <div className="infoPrincipais">
                    <div className="infoPrincipal"><h2>Data nascimento</h2><h2>{lutador.birth_date || '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Peso</h2><h2>{lutador.weight || '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Categoria</h2><h2>{lutador.category || '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Gênero</h2><h2>{lutador.gender === 'M' ? 'Masculino' : lutador.gender === 'F' ? 'Feminino' : '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Alcance</h2><h2>{lutador.reach || '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Base</h2><h2>{lutador.stance || '---'}</h2></div>
                    <div className="infoPrincipal"><h2>Altura</h2><h2>{lutador.height || '---'}</h2></div>
                </div>

                <div className="equipe">
                    <div className="cardEquipe">
                        <h1>Equipe</h1>
                        <h2>{lutador.team?.name || '---'}</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CardAtleta

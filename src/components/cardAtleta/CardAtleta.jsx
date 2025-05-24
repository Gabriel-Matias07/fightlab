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

    const {id} = useParams()

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

   
    /* const lutador = {
        nome: "Amanda Nunes",
        nickname: "The Lioness",
        updated: "2024-12-01",
        photo: "https://ufc.usada.org/wp-content/uploads/amanda-nunes-ufc.jpg",
        birth_date: "1988-05-30",
        weight: "61 kg",
        category: "Peso Galo",
        gender: "Feminino",
        reach: "175 cm",
        base: "Boxe / Jiu-Jitsu",
        height: "173 cm",
        team: "American Top Team"
    }
 */
    if (carregando) {
        return <p>Carregando dados do lutador...</p>
    }
      
    if (!lutador) {
        return <p>Lutador não encontrado.</p>
    }

    return (
        <div class="container">
            <header>
                <div class="logo">FIGHTLAB</div>
            </header>
            
            <main>
                <div class="infoIniciais">
                    <div class="imgLutador" style={{ backgroundImage: `url(${lutador.photo || 'https://via.placeholder.com/300'})` }}></div>
                    <div class="nomeLutador">
                        <h1>{lutador.nome}</h1>
                        <h2>"{lutador.nickname || 'Sem apelido'}"</h2>
                        <h2>Última atualização: {lutador.updated || 'Data desconhecida'}</h2>
                    </div>
                    <div class="favButton" onClick={() => adicionarFavorito(lutador)}> <img src={marcaPaginas} alt="" /> </div>
                </div>
                <div class="infoPrincipais">
                    <div class="infoPrincipal">
                        <h2>Data nascimento</h2>
                        <h2>{lutador.birth_date || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Peso</h2>
                        <h2>{lutador.weight || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Categoria</h2>
                        <h2>{lutador.category || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Gênero</h2>
                        <h2>{lutador.gender || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Alcance</h2>
                        <h2>{lutador.reach || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Base</h2>
                        <h2>{lutador.base || '---'}</h2>
                    </div>
                    <div class="infoPrincipal">
                        <h2>Altura</h2>
                        <h2>{lutador.height || '---'}</h2>
                    </div>
                </div>
                <div class="equipe">
                    <div class="cardEquipe">
                        <h1>Equipe</h1>
                        <h2>{lutador.team || '---'}</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CardAtleta
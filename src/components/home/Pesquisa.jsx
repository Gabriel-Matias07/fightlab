// src/components/home/Pesquisa.jsx
import './Pesquisa.css'
import { useState } from 'react'

const Pesquisa = ({ onBuscar, onFechar }) => {
  const [input, setInput] = useState('')
  
  const handleClick = () => {
    if (input.trim() !== '') {
      onBuscar(input.trim())
    }
  }

  return (
    <div className="modal">
      <div className="header">
        <h2>Pesquisar Atletas</h2>
        <hr className="hr" />
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Digite o nome"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="footer">
        <button className='button-pesquisa' onClick={handleClick}>Buscar</button>
        <button className='button-pesquisa' onClick={onFechar}>Cancelar</button>
      </div>
    </div>
  )
}

export default Pesquisa

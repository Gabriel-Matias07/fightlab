import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FightLab</h1>
      <h2>Estrutura Básica do Projeto 'FightLab' Sendo Desenvolvida</h2>

      <div className="contributors">
        <table>
          <tr> 
            <td align="center"> 
              <img src="https://avatars.githubusercontent.com/u/124216130?v=4" width="100px;" alt="Gabriel"/><br /> 
              <strong><a href="https://github.com/Gabriel-Matias07">Gabriel</a></strong> 
            </td> 
            <td align="center"> 
              <img src="https://avatars.githubusercontent.com/u/173968372?v=4" width="100px;" alt="Rayana Lima"/><br /> 
              <strong><a href="https://github.com/Rayanagmss">Rayana Lima</a></strong> 
            </td> 
            <td align="center"> 
              <img src="https://avatars.githubusercontent.com/u/99146426?v=4" width="100px;" alt="Moisés Iatagan"/><br /> 
              <strong><a href="https://github.com/miyatakuun">Moisés Iatagan</a></strong> 
            </td> 
            <td align="center"> 
              <img src="https://avatars.githubusercontent.com/u/124687497?v=4" width="100px;" alt="Victor Anderson"/><br /> 
              <strong><a href="https://github.com/VictorNicolau-coder">Victor Anderson</a></strong> 
            </td> 
          </tr> 
        </table>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

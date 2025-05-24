// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import ResultadoBusca from "./components/resultadoBusca/ResultadoBusca"
import CardAtleta from "./components/cardAtleta/CardAtleta"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resultado" element={<ResultadoBusca />} />
      <Route path="/atleta/:id" element={<CardAtleta />} />
    </Routes>
  )
}

export default App

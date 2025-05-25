import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import ResultadoBusca from "./components/resultadoBusca/ResultadoBusca";
import Favoritos from "./components/favoritos/Favoritos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resultado" element={<ResultadoBusca />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default App;

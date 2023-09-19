import {
  Routes,
  Route,

} from "react-router-dom";
import SitioWebInstitucional from "./pages/SitioWebInstitucional";
import BancaEnLineaRecuperarUsu from "./pages/BancaEnLineaRecuperarUsu";
import BancaEnLineaLogin from "./pages/BancaEnLineaLogin";
import BancaEnLineaExchange from "./pages/BancaEnLineaExchange";
import BancaEnLineaRegistro from "./pages/BancaEnLineaRegistro";
import BancaEnLineaHistorial from "./pages/BancaEnLineaHistorial";
import BancaEnLineaTerceros from "./pages/BancaEnLineaTerceros";
import BancaEnLineaInicio from "./pages/BancaEnLineaInicio";
import BancaEnLineaPerfil from "./pages/BancaEnLineaPerfil";

function App() {


  return (
    <Routes>
      <Route path="/" element={<SitioWebInstitucional />} />
      <Route
        path="/banca-en-linea-recuperar-usuario-o-clave"
        element={<BancaEnLineaRecuperarUsu />}
      />
      <Route path="/banca-en-linea-login" element={<BancaEnLineaLogin />} />
      <Route
        path="/banca-en-linea-inicio1"
        element={<BancaEnLineaExchange />}
      />
      <Route
        path="/banca-en-linea-registro"
        element={<BancaEnLineaRegistro />}
      />
      <Route
        path="/banca-en-linea-terceros1"
        element={<BancaEnLineaHistorial />}
      />
      <Route
        path="/banca-en-linea-terceros"
        element={<BancaEnLineaTerceros />}
      />
      <Route path="/banca-en-linea-inicio" element={<BancaEnLineaInicio />} />
      <Route path="/banca-en-linea-servicio" element={<BancaEnLineaPerfil />} />
    </Routes>
  );
}
export default App;

import {
  Routes,
  Route,
} from "react-router-dom";
import SitioWebInstitucional from "./pages/SitioWebInstitucional";
import BancaEnLineaServicio from "./pages/BancaEnLineaServicio";
import BancaEnLineaInicio from "./pages/BancaEnLineaInicio";
import BancaEnLineaTerceros from "./pages/BancaEnLineaTerceros";
import BancaEnLineaConsultas from "./pages/BancaEnLineaConsultas";
import BancaEnLineaRegistro from "./pages/BancaEnLineaRegistro";
import BancaEnLineaRecuperarUsu from "./pages/BancaEnLineaRecuperarUsu";
import BancaEnLineaMensajes from "./pages/BancaEnLineaMensajes";
import BancaEnLineaLogin from "./pages/BancaEnLineaLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SitioWebInstitucional />} />
      <Route
        path="/banca-en-linea-servicio"
        element={<BancaEnLineaServicio />}
      />
      <Route path="/banca-en-linea-inicio" element={<BancaEnLineaInicio />} />
      <Route
        path="/banca-en-linea-terceros"
        element={<BancaEnLineaTerceros />}
      />
      <Route
        path="/banca-en-linea-consultas"
        element={<BancaEnLineaConsultas />}
      />
      <Route
        path="/banca-en-linea-registro"
        element={<BancaEnLineaRegistro />}
      />
      <Route
        path="/banca-en-linea-recuperar-usuario-o-clave"
        element={<BancaEnLineaRecuperarUsu />}
      />
      <Route
        path="/banca-en-linea-mensajes"
        element={<BancaEnLineaMensajes />}
      />
      <Route path="/banca-en-linea-login" element={<BancaEnLineaLogin />} />
    </Routes>
  );
}
export default App;

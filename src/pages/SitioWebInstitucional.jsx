import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Contacto from "../components/Contacto";
import Titulo from "../components/Titulo";
import Servicio from "../components/Servicio";
import "./SitioWebInstitucional.css";

const SitioWebInstitucional = () => {
  const navigate = useNavigate();

  const onB1Click = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  return (
    <div className="sitio-web-institucional">
      <div className="frame">
        <div className="scroll">
          <img className="s1-icon" alt="" src="/s1@2x.png" />
          <button className="b1" onClick={onB1Click}>
            <div className="b1-child" />
            <div className="digital-wallet">Digital Wallet</div>
          </button>
        </div>
        <Contacto />
        <Titulo />
        <Servicio />
      </div>
    </div>
  );
};

export default SitioWebInstitucional;

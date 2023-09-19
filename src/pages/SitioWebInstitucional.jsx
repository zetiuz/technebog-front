import { useState, useCallback } from "react";
import Presentacin from "../components/Presentacin";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Contacto from "../components/Contacto";
import Servicio from "../components/Servicio";
import "./SitioWebInstitucional.css";

const SitioWebInstitucional = () => {
  const [isPresentacinOpen, setPresentacinOpen] = useState(false);
  const navigate = useNavigate();

  const onB1Click = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  const openPresentacin = useCallback(() => {
    setPresentacinOpen(true);
  }, []);

  const closePresentacin = useCallback(() => {
    setPresentacinOpen(false);
  }, []);

  const onServiciosTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicioContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactoTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="sitio-web-institucional">
        <div className="frame">
          <div className="scroll">
            <img className="s1-icon" alt="" src="/s1@2x.png" />
            <button className="b1" onClick={onB1Click}>
              <div className="b1-child" />
              <div className="digital-wallet1">Digital Wallet</div>
            </button>
          </div>
          <Contacto />
          <div className="barra-superior">
            <img className="logo-icon1" alt="" src="/logo2@2x.png" />
            <div className="titulo">
              <div className="technebog1">{`TechNeBog `}</div>
              <div className="un-aliado-de1">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
            <div className="opciones">
              <div className="nosotros" onClick={openPresentacin}>
                {" "}
                Nosotros
              </div>
              <div className="servicios" onClick={onServiciosTextClick}>
                Servicios
              </div>
              <div className="contacto" onClick={onContactoTextClick}>
                Contacto
              </div>
            </div>
          </div>
          <Servicio />
        </div>
      </div>
      {isPresentacinOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePresentacin}
        >
          <Presentacin onClose={closePresentacin} />
        </PortalPopup>
      )}
    </>
  );
};

export default SitioWebInstitucional;

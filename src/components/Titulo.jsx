import { useState, useCallback } from "react";
import Presentacin from "./Presentacin";
import PortalPopup from "./PortalPopup";
import "./Titulo.css";
const Titulo = () => {
  const [isPresentacinOpen, setPresentacinOpen] = useState(false);

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
      <div className="barra-superior">
        <img className="logo-icon10" alt="" src="/logo2@2x.png" />
        <div className="titulo">
          <div className="technebog10">{`TechNeBog `}</div>
          <div className="un-aliado-de9">
            Un aliado de su Seguridad Financiera
          </div>
        </div>
        <div className="opciones">
          <div className="nosotros" onClick={openPresentacin}>
            {" "}
            nosotros
          </div>
          <div className="servicios6" onClick={onServiciosTextClick}>
            Servicios
          </div>
          <div className="contacto2" onClick={onContactoTextClick}>
            Contacto
          </div>
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

export default Titulo;

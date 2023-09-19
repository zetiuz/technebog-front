import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeCorreo from "../components/MensajeCorreo";
import PortalPopup from "../components/PortalPopup";
import Entrar from "../components/Entrar";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaRecuperarUsu.css";

const BancaEnLineaRecuperarUsu = () => {
  const [isMensajeCorreoOpen, setMensajeCorreoOpen] = useState(false);
  const navigate = useNavigate();

  const openMensajeCorreo = useCallback(() => {
    setMensajeCorreoOpen(true);
  }, []);

  const closeMensajeCorreo = useCallback(() => {
    setMensajeCorreoOpen(false);
  }, []);

  const onVolverContainerClick = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  return (
    <>
      <div className="banca-en-linea-recuperar-usu">
        <img
          className="chica-universitaria-que-trabaj-icon"
          alt=""
          src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
        />
        <div className="banca-en-linea-recuperar-usu-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="digital-wallet">Digital Wallet</div>
        <div className="elija-los-datos">Elija los datos a recuperar</div>
        <div className="ingrese-su-correo">{`Ingrese su correo `}</div>
        <img
          className="banca-en-linea-recuperar-usu-item"
          alt=""
          src="/vector-251.svg"
        />
        <div className="recuperacin">Recuperación</div>
        <div className="banca-en-linea-recuperar-usu-inner" />
        <div className="union">
          <div className="union-child" />
          <div className="union-item" />
        </div>
        <div className="rectangle-div" />
        <Form className="correo-electrnico">
          <Form.Control type="email" id="1" placeholder="Correo Electrónico" />
        </Form>
        <img className="group-icon" alt="" src="/icon7.svg" />
        <Form.Select className="component-5-formselect">
          <option>Seleccione una opción</option>
          <option value="Usuario">Usuario</option>
          <option value="Clave">Clave</option>
        </Form.Select>
        <div className="enviar" onClick={openMensajeCorreo}>
          <Entrar
            loginButtonText="Enviar"
            property1Group19Position="absolute"
            property1Group19Top="0%"
            property1Group19Left="0%"
            property1Group19Cursor="pointer"
            property1Group19Width="100%"
            property1Group19Height="100%"
            property1Group19Right="0%"
            property1Group19Bottom="0%"
            property1Group19Border="none"
            property1Group19Padding="0"
            property1Group19BackgroundColor="transparent"
            entrarCursor="unset"
            entrarBorder="unset"
            entrarPadding="unset"
            entrarBackgroundColor="unset"
          />
        </div>
        <div className="volver" onClick={onVolverContainerClick}>
          <div className="volver1">Volver</div>
        </div>
        <div className="component-22">
          <div className="logo-parent">
            <img className="logo-icon" alt="" src="/logo@2x.png" />
            <div className="technebog-parent">
              <div className="technebog">{`TechNeBog `}</div>
              <div className="un-aliado-de">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMensajeCorreoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMensajeCorreo}
        >
          <MensajeCorreo onClose={closeMensajeCorreo} />
        </PortalPopup>
      )}
    </>
  );
};

export default BancaEnLineaRecuperarUsu;

import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeCorreo from "../components/MensajeCorreo";
import PortalPopup from "../components/PortalPopup";
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
          className="chica-universitaria-que-trabaj-icon1"
          alt=""
          src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
        />
        <div className="banca-en-linea-recuperar-usu-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="digital-wallet2">Digital Wallet</div>
        <div className="elija-los-datos">Elija los datos a recuperar</div>
        <div className="ingrese-su-correo">{`Ingrese su correo `}</div>
        <img
          className="banca-en-linea-recuperar-usu-item"
          alt=""
          src="/vector-251.svg"
        />
        <div className="recuperacin">Recuperación</div>
        <div className="banca-en-linea-recuperar-usu-inner" />
        <div className="union9">
          <div className="union-child16" />
          <div className="union-child17" />
        </div>
        <div className="banca-en-linea-recuperar-usu-child1" />
        <input
          className="correo-electrnico2"
          placeholder="Correo Electrónico"
          type="text"
        />
        <img className="group-icon" alt="" src="/icon2.svg" />
        <Form.Select className="component-5-formselect">
          <option>Seleccione una opción</option>
          <option value="Usuario">Usuario</option>
          <option value="Clave">Clave</option>
        </Form.Select>
        <div className="enviar" onClick={openMensajeCorreo}>
          <button className="component-75">
            <div className="component-7-child3" />
            <div className="entrar8">Enviar</div>
          </button>
        </div>
        <div className="volver" onClick={onVolverContainerClick}>
          <div className="volver1">Volver</div>
        </div>
        <div className="component-221">
          <div className="logo-parent3">
            <img className="logo-icon6" alt="" src="/logo1@2x.png" />
            <div className="technebog-parent4">
              <div className="technebog6">{`TechNeBog `}</div>
              <div className="un-aliado-de6">
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

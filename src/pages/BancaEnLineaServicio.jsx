import { useState, useCallback } from "react";
import MensajeActualizar from "../components/MensajeActualizar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaServicio.css";

const BancaEnLineaServicio = () => {
  const [isMensajeActualizarOpen, setMensajeActualizarOpen] = useState(false);
  const navigate = useNavigate();

  const onComponent16ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-inicio");
  }, [navigate]);

  const onComponent10ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-consultas");
  }, [navigate]);

  const onComponent18ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-terceros");
  }, [navigate]);

  const onComponent18Container1Click = useCallback(() => {
    navigate("/banca-en-linea-servicio");
  }, [navigate]);

  const onComponent17ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMensajeActualizar = useCallback(() => {
    setMensajeActualizarOpen(true);
  }, []);

  const closeMensajeActualizar = useCallback(() => {
    setMensajeActualizarOpen(false);
  }, []);

  return (
    <>
      <div className="banca-en-linea-servicio">
        <img
          className="mesa-de-trabajo-1-12"
          alt=""
          src="/5126945-mesa-de-trabajo-1-1@2x.png"
        />
        <div className="banca-en-linea-servicio-child" />
        <div className="banca-en-linea-servicio-item" />
        <div className="acualizar-datos">Acualizar Datos</div>
        <div className="bienvenidoa-josefina-mara-container4">
          <span className="bienvenidoa-josefina-mara-container5">
            <span className="bienvenidoa2">{`Bienvenido(a): `}</span>
            <b>Josefina María</b>
          </span>
        </div>
        <div className="ultima-conexin-2">
          Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
        </div>
        <div className="div4"> 01/07/2023</div>
        <div className="la-informacin-mostrada2">
          La información mostrada en esta página es confidencial
        </div>
        <div className="rectangle-parent3">
          <div className="group-child5" />
          <div className="component-162" onClick={onComponent16ContainerClick}>
            <div className="component-16-inner" />
            <div className="exchange3">Exchange</div>
          </div>
          <div className="component-102" onClick={onComponent10ContainerClick}>
            <div className="component-16-inner" />
            <div className="consultas-parent1">
              <div className="consultas3">{`Consultas `}</div>
              <img className="icon14" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="component-184" onClick={onComponent18ContainerClick}>
            <div className="component-16-inner" />
            <div className="transferencias-parent1">
              <div className="transferencias3">Transferencias</div>
              <img className="icon15" alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className="component-185" onClick={onComponent18Container1Click}>
            <div className="component-16-inner" />
            <div className="servicios-parent1">
              <div className="transferencias3">Servicios</div>
              <img className="icon16" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="component-172" onClick={onComponent17ContainerClick}>
            <div className="component-16-inner" />
            <div className="salir3">Salir</div>
          </div>
        </div>
        <div className="correo">
          <div className="union">
            <div className="union-child" />
            <div className="union-item" />
          </div>
          <input
            className="correo-electrnico"
            placeholder="Correo Electrónico"
            type="text"
          />
          <img className="icon17" alt="" src="/icon2.svg" />
        </div>
        <div className="clave">
          <div className="union">
            <div className="union-child" />
            <div className="union-item" />
          </div>
          <input
            className="correo-electrnico"
            placeholder="Clave"
            type="text"
          />
          <img className="icon18" alt="" src="/icon3.svg" />
        </div>
        <div className="procesar2" onClick={openMensajeActualizar}>
          <div className="component-74">
            <div className="component-7-child2" />
            <button className="entrar6">Procesar</button>
          </div>
        </div>
        <div className="telefono">
          <div className="union">
            <div className="union-child" />
            <div className="union-item" />
          </div>
          <input
            className="correo-electrnico"
            placeholder="Teléfono"
            type="text"
          />
          <img className="icon19" alt="" src="/icon4.svg" />
        </div>
        <div className="direccion">
          <div className="union">
            <div className="union-child" />
            <div className="union-item" />
          </div>
          <input
            className="correo-electrnico"
            placeholder="Dirección"
            type="text"
          />
          <img className="icon20" alt="" src="/icon5.svg" />
        </div>
        <div className="component-211">
          <div className="frame-div">
            <img className="logo-icon3" alt="" src="/logo1@2x.png" />
            <div className="technebog-parent1">
              <div className="technebog3">{`TechNeBog `}</div>
              <div className="un-aliado-de3">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMensajeActualizarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMensajeActualizar}
        >
          <MensajeActualizar onClose={closeMensajeActualizar} />
        </PortalPopup>
      )}
    </>
  );
};

export default BancaEnLineaServicio;

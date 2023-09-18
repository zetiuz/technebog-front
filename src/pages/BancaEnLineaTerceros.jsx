import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeTransferencia from "../components/MensajeTransferencia";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaTerceros.css";

const BancaEnLineaTerceros = () => {
  const [isMensajeTransferenciaOpen, setMensajeTransferenciaOpen] =
    useState(false);
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

  const openMensajeTransferencia = useCallback(() => {
    setMensajeTransferenciaOpen(true);
  }, []);

  const closeMensajeTransferencia = useCallback(() => {
    setMensajeTransferenciaOpen(false);
  }, []);

  return (
    <>
      <div className="banca-en-linea-terceros">
        <img
          className="mesa-de-trabajo-1-1"
          alt=""
          src="/5126945-mesa-de-trabajo-1-1@2x.png"
        />
        <div className="banca-en-linea-terceros-child" />
        <div className="banca-en-linea-terceros-item" />
        <div className="tranferencias-a-terceros">Tranferencias a Terceros</div>
        <div className="bienvenidoa-josefina-mara-container">
          <span className="bienvenidoa-josefina-mara-container1">
            <span className="bienvenidoa">{`Bienvenido(a): `}</span>
            <b>Josefina María</b>
          </span>
        </div>
        <div className="ultima-conexin-">
          Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
        </div>
        <div className="div"> 01/07/2023</div>
        <div className="la-informacin-mostrada">
          La información mostrada en esta página es confidencial
        </div>
        <div className="activos">Activos</div>
        <div className="beca">Beca</div>
        <img className="icon3" alt="" src="/icon7.svg" />
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="component-16" onClick={onComponent16ContainerClick}>
            <div className="component-16-child" />
            <div className="exchange1">Exchange</div>
          </div>
          <div className="component-10" onClick={onComponent10ContainerClick}>
            <div className="component-16-child" />
            <div className="consultas-group">
              <div className="consultas1">{`Consultas `}</div>
              <img className="icon4" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="component-18" onClick={onComponent18ContainerClick}>
            <div className="component-16-child" />
            <div className="transferencias-group">
              <div className="transferencias1">Transferencias</div>
              <img className="icon5" alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className="component-181" onClick={onComponent18Container1Click}>
            <div className="component-16-child" />
            <div className="servicios-group">
              <div className="transferencias1">Servicios</div>
              <img className="icon6" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="component-17" onClick={onComponent17ContainerClick}>
            <div className="component-16-child" />
            <div className="salir1">Salir</div>
          </div>
        </div>
        <Form.Select className="activo-a-debitar-parent">
          <option>Activo a Debitar</option>
          <option value="Bolivares">Bolivares</option>
          <option value="USDT">USDT</option>
          <option value="BNB">BNB</option>
          <option value="BTC">BTC</option>
        </Form.Select>
        <Form.Select className="cuenta-destino-parent">
          <option>Cuenta Destino</option>
          <option value="Daniel Garcia">Daniel Garcia</option>
          <option value="Maria Rodriguez">Maria Rodriguez</option>
          <option value="Alfonso Pereira">Alfonso Pereira</option>
          <option value="José  Diaz">José Diaz</option>
        </Form.Select>
        <div className="rectangle-group">
          <div className="group-item" />
          <input className="monto" placeholder="Monto" type="text" />
        </div>
        <div className="rectangle-container">
          <div className="group-item" />
          <input className="concepto" placeholder="Concepto" type="text" />
        </div>
        <img className="icon7" alt="" src="/icon.svg" />
        <img className="icon8" alt="" src="/icon.svg" />
        <button className="procesar" onClick={openMensajeTransferencia}>
          <div className="component-71">
            <div className="component-7-item" />
            <div className="entrar2">Transferir</div>
          </div>
        </button>
        <div className="component-19">
          <div className="component-19-child" />
        </div>
        <div className="cuenta-no-registrada">Cuenta no Registrada</div>
        <div className="component-201">
          <div className="logo-group">
            <img className="logo-icon1" alt="" src="/logo1@2x.png" />
            <div className="technebog-group">
              <div className="technebog1">{`TechNeBog `}</div>
              <div className="un-aliado-de1">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMensajeTransferenciaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMensajeTransferencia}
        >
          <MensajeTransferencia onClose={closeMensajeTransferencia} />
        </PortalPopup>
      )}
    </>
  );
};

export default BancaEnLineaTerceros;

import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeTransferencia from "../components/MensajeTransferencia";
import PortalPopup from "../components/PortalPopup";
import Entrar from "../components/Entrar";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaTerceros.css";

const BancaEnLineaTerceros = () => {
  const [isMensajeTransferenciaOpen, setMensajeTransferenciaOpen] =
    useState(false);
  const navigate = useNavigate();

  const openMensajeTransferencia = useCallback(() => {
    setMensajeTransferenciaOpen(true);
  }, []);

  const closeMensajeTransferencia = useCallback(() => {
    setMensajeTransferenciaOpen(false);
  }, []);

  const onComponent16ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-inicio");
  }, [navigate]);

  const onComponent18ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-terceros");
  }, [navigate]);

  const onComponent18Container1Click = useCallback(() => {
    navigate("/banca-en-linea-servicio");
  }, [navigate]);

  const onComponent17ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  const onComponent19Container1Click = useCallback(() => {
    navigate("/banca-en-linea-inicio1");
  }, [navigate]);

  const onComponent18Container2Click = useCallback(() => {
    navigate("/banca-en-linea-terceros1");
  }, [navigate]);

  return (
    <>
      <div className="banca-en-linea-terceros">
        <img
          className="mesa-de-trabajo-1-12"
          alt=""
          src="/5126945-mesa-de-trabajo-1-1@2x.png"
        />
        <div className="banca-en-linea-terceros-child" />
        <div className="banca-en-linea-terceros-item" />
        <div className="tranferencias-a-terceros">Tranferencias a Terceros</div>
        <div className="bienvenidoa-josefina-mara-container4">
          <span className="bienvenidoa-josefina-mara-container5">
            <span className="bienvenidoa2">{`Bienvenido(a): `}</span>
            <b>Josefina María</b>
          </span>
        </div>
        <div className="ultima-conexin-2">
          Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
        </div>
        <div className="div16"> 01/07/2023</div>
        <div className="la-informacin-mostrada2">
          La información mostrada en esta página es confidencial
        </div>
        <div className="activos">Activos</div>
        <div className="beca">Beca</div>
        <img className="icon24" alt="" src="/icon16.svg" />
        <Form.Select className="activo-a-debitar-parent">
          <option>Activo a Debitar</option>
          <option value="Bolivares">Bolivares</option>
          <option value="USDT">USDT</option>
          <option value="BNB">BNB</option>
          <option value="BTC">BTC</option>
          <option value="TC">TC</option>
          <option value="ADA">ADA</option>
          <option value="DOT">DOT</option>
          <option value="SOL">SOL</option>
        </Form.Select>
        <Form.Select className="cuenta-destino-parent">
          <option>Cuenta Destino</option>
          <option value="Daniel Garcia">Daniel Garcia</option>
          <option value="Maria Rodriguez">Maria Rodriguez</option>
          <option value="Alfonso Pereira">Alfonso Pereira</option>
          <option value="José  Diaz">José Diaz</option>
        </Form.Select>
        <div className="rectangle-container">
          <div className="group-child2" />
          <Form className="monto">
            <Form.Control type="number" placeholder="Monto" />
          </Form>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child2" />
          <Form className="concepto">
            <Form.Control type="text" placeholder="Concepto" />
          </Form>
        </div>
        <button className="procesar2" onClick={openMensajeTransferencia}>
          <Entrar
            loginButtonText="Transferir"
            property1Group19Position="absolute"
            property1Group19Top="0%"
            property1Group19Left="0%"
            property1Group19Cursor="unset"
            property1Group19Width="100%"
            property1Group19Height="100%"
            property1Group19Right="0%"
            property1Group19Bottom="0%"
            property1Group19Border="unset"
            property1Group19Padding="unset"
            property1Group19BackgroundColor="unset"
            entrarCursor="unset"
            entrarBorder="unset"
            entrarPadding="unset"
            entrarBackgroundColor="unset"
          />
        </button>
        <div className="component-194">
          <div className="component-19-child2" />
        </div>
        <div className="cuenta-no-registrada">Cuenta no Registrada</div>
        <div className="component-201">
          <div className="logo-parent3">
            <img className="logo-icon7" alt="" src="/logo@2x.png" />
            <div className="technebog-parent4">
              <div className="technebog7">{`TechNeBog `}</div>
              <div className="un-aliado-de7">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
        <div className="barra-de-opciones7">
          <div className="barra-de-opciones8">
            <div className="barra-de-opciones-child2" />
            <div
              className="component-164"
              onClick={onComponent16ContainerClick}
            >
              <div className="component-16-child2" />
              <div className="inicio9">Inicio</div>
            </div>
            <div
              className="component-1811"
              onClick={onComponent18ContainerClick}
            >
              <div className="component-16-child2" />
              <div className="transferencias-parent5">
                <div className="transferencias8">Transferencias</div>
                <img className="icon25" alt="" src="/icon17.svg" />
              </div>
            </div>
            <div
              className="component-1812"
              onClick={onComponent18Container1Click}
            >
              <div className="component-16-child2" />
              <div className="perfil-parent3">
                <div className="perfil5">Perfil</div>
                <img className="icon26" alt="" src="/icon5.svg" />
              </div>
            </div>
            <div
              className="component-174"
              onClick={onComponent17ContainerClick}
            >
              <div className="component-16-child2" />
              <div className="salir5">Salir</div>
            </div>
            <div
              className="component-195"
              onClick={onComponent19Container1Click}
            >
              <div className="component-16-child2" />
              <div className="inicio9">Exchange</div>
            </div>
          </div>
          <div
            className="component-1813"
            onClick={onComponent18Container2Click}
          >
            <div className="component-16-child2" />
            <div className="transferencias-parent5">
              <div className="transferencias9">Historial</div>
              <img className="icon27" alt="" src="/icon18.svg" />
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

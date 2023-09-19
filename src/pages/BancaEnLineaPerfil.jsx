import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeActualizar from "../components/MensajeActualizar";
import PortalPopup from "../components/PortalPopup";
import Entrar from "../components/Entrar";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaPerfil.css";

const BancaEnLineaPerfil = () => {
  const [isMensajeActualizarOpen, setMensajeActualizarOpen] = useState(false);
  const navigate = useNavigate();

  const openMensajeActualizar = useCallback(() => {
    setMensajeActualizarOpen(true);
  }, []);

  const closeMensajeActualizar = useCallback(() => {
    setMensajeActualizarOpen(false);
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

  const onComponent19ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-inicio1");
  }, [navigate]);

  const onComponent18Container2Click = useCallback(() => {
    navigate("/banca-en-linea-terceros1");
  }, [navigate]);

  return (
    <>
      <div className="banca-en-linea-perfil">
        <img
          className="mesa-de-trabajo-1-14"
          alt=""
          src="/5126945-mesa-de-trabajo-1-1@2x.png"
        />
        <div className="banca-en-linea-perfil-child" />
        <div className="banca-en-linea-perfil-item" />
        <div className="acualizar-datos">Acualizar Datos</div>
        <div className="bienvenidoa-josefina-mara-container8">
          <span className="bienvenidoa-josefina-mara-container9">
            <span className="bienvenidoa4">{`Bienvenido(a): `}</span>
            <b>Josefina María</b>
          </span>
        </div>
        <div className="ultima-conexin-4">
          Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
        </div>
        <div className="div28"> 01/07/2023</div>
        <div className="la-informacin-mostrada4">
          La información mostrada en esta página es confidencial
        </div>
        <div className="correo1">
          <div className="union8">
            <div className="union-child14" />
          </div>
          <Form className="correo-electrnico2">
            <Form.Control type="email" placeholder="Correo Electrónico" />
          </Form>
          <img className="icon32" alt="" src="/icon7.svg" />
        </div>
        <div className="clave2">
          <div className="union8">
            <div className="union-child15" />
            <div className="union-child16" />
          </div>
          <Form className="clave3">
            <Form.Control type="password" placeholder="Clave" />
          </Form>
          <img className="icon33" alt="" src="/icon8.svg" />
        </div>
        <div className="procesar3" onClick={openMensajeActualizar}>
          <Entrar
            loginButtonText="Procesar"
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
            entrarCursor="pointer"
            entrarBorder="none"
            entrarPadding="0"
            entrarBackgroundColor="transparent"
          />
        </div>
        <div className="telefono">
          <div className="union8">
            <div className="union-child15" />
            <div className="union-child16" />
          </div>
          <Form className="telfono">
            <Form.Control type="number" placeholder="Teléfono" />
          </Form>
          <img className="icon34" alt="" src="/icon9.svg" />
        </div>
        <div className="direccion">
          <div className="union8">
            <div className="union-child15" />
            <div className="union-child16" />
          </div>
          <Form className="direccin">
            <Form.Control type="text" placeholder="Dirección" />
          </Form>
          <img className="icon35" alt="" src="/icon10.svg" />
        </div>
        <div className="component-214">
          <div className="logo-parent5">
            <img className="logo-icon9" alt="" src="/logo@2x.png" />
            <div className="technebog-parent6">
              <div className="technebog9">{`TechNeBog `}</div>
              <div className="un-aliado-de9">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
        <div className="barra-de-opciones11">
          <div className="barra-de-opciones12">
            <div className="barra-de-opciones-child4" />
            <div
              className="component-166"
              onClick={onComponent16ContainerClick}
            >
              <div className="component-16-child4" />
              <div className="inicio13">Inicio</div>
            </div>
            <div
              className="component-1817"
              onClick={onComponent18ContainerClick}
            >
              <div className="component-16-child4" />
              <div className="transferencias-parent9">
                <div className="transferencias12">Transferencias</div>
                <img className="icon36" alt="" src="/icon11.svg" />
              </div>
            </div>
            <div
              className="component-1818"
              onClick={onComponent18Container1Click}
            >
              <div className="component-16-child4" />
              <div className="perfil-parent5">
                <div className="perfil7">Perfil</div>
                <img className="icon37" alt="" src="/icon5.svg" />
              </div>
            </div>
            <div
              className="component-176"
              onClick={onComponent17ContainerClick}
            >
              <div className="component-16-child4" />
              <div className="salir7">Salir</div>
            </div>
            <div
              className="component-197"
              onClick={onComponent19ContainerClick}
            >
              <div className="component-16-child4" />
              <div className="inicio13">Exchange</div>
            </div>
          </div>
          <div
            className="component-1819"
            onClick={onComponent18Container2Click}
          >
            <div className="component-16-child4" />
            <div className="transferencias-parent9">
              <div className="transferencias13">Historial</div>
              <img className="icon38" alt="" src="/icon12.svg" />
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

export default BancaEnLineaPerfil;

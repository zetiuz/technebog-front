import { useState, useCallback } from "react";
import PortalExchange from "../components/PortalExchange";
import PortalPopup from "../components/PortalPopup";
import Entrar from "../components/Entrar";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaExchange.css";

const BancaEnLineaExchange = () => {
  const [isPortalExchangeOpen, setPortalExchangeOpen] = useState(false);
  const navigate = useNavigate();

  const openPortalExchange = useCallback(() => {
    setPortalExchangeOpen(true);
  }, []);

  const closePortalExchange = useCallback(() => {
    setPortalExchangeOpen(false);
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
      <div className="banca-en-linea-exchange">
        <img
          className="mesa-de-trabajo-1-1"
          alt=""
          src="/5126945-mesa-de-trabajo-1-1@2x.png"
        />
        <div className="banca-en-linea-exchange-child" />
        <div className="tron-parent">
          <div className="tron">Tron</div>
          <div className="div">$107</div>
          <div className="div1">-0,2%</div>
        </div>
        <div className="banca-en-linea-exchange-item" />
        <div className="exchange">Exchange</div>
        <div className="bienvenidoa-josefina-mara-container">
          <span className="bienvenidoa-josefina-mara-container1">
            <span className="bienvenidoa">{`Bienvenido(a): `}</span>
            <b>Josefina María</b>
          </span>
        </div>
        <div className="ultima-conexin-">
          Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
        </div>
        <div className="div2"> 01/07/2023</div>
        <div className="la-informacin-mostrada">
          La información mostrada en esta página es confidencial
        </div>
        <div className="banca-en-linea-exchange-inner" />
        <div className="banca-en-linea-exchange-child1" />
        <div className="banca-en-linea-exchange-child2" />
        <div className="banca-en-linea-exchange-child3" />
        <div className="banca-en-linea-exchange-child4" />
        <div className="component-211">
          <div className="frame-div">
            <img className="logo-icon4" alt="" src="/logo@2x.png" />
            <div className="technebog-parent1">
              <div className="technebog4">{`TechNeBog `}</div>
              <div className="un-aliado-de4">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
        <div className="nombre-del-activo-parent">
          <b className="nombre-del-activo">Nombre del activo</b>
          <b className="ltimo-precio">Último precio</b>
          <b className="cambio-en">Cambio % en 24H</b>
        </div>
        <div className="tron-parent">
          <div className="tron">DOT</div>
          <div className="div">$5.324</div>
          <div className="div1">+2,64%</div>
        </div>
        <div className="ltc-parent">
          <div className="tron">LTC</div>
          <div className="div">$107</div>
          <div className="div1">-0,2%</div>
        </div>
        <div className="ada-parent">
          <div className="tron">ADA</div>
          <div className="div">$0,2910</div>
          <div className="div1">+1,04%</div>
        </div>
        <div className="sol-parent">
          <div className="tron">SOL</div>
          <div className="div">$18,78</div>
          <div className="div1">-1,53%</div>
        </div>
        <div className="bnb-parent">
          <div className="tron">BNB</div>
          <div className="div">$247</div>
          <div className="div1">+1,35%</div>
        </div>
        <img className="icon10" alt="" src="/icon13.svg" />
        <button className="procesar" onClick={openPortalExchange}>
          <Entrar
            loginButtonText="Convertir Monedas"
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
        <div className="barra-de-opciones3">
          <div className="barra-de-opciones4">
            <div className="barra-de-opciones-inner" />
            <div
              className="component-162"
              onClick={onComponent16ContainerClick}
            >
              <div className="component-16-inner" />
              <div className="inicio5">Inicio</div>
            </div>
            <div
              className="component-185"
              onClick={onComponent18ContainerClick}
            >
              <div className="component-16-inner" />
              <div className="transferencias-parent1">
                <div className="transferencias4">Transferencias</div>
                <img className="icon11" alt="" src="/icon17.svg" />
              </div>
            </div>
            <div
              className="component-186"
              onClick={onComponent18Container1Click}
            >
              <div className="component-16-inner" />
              <div className="perfil-parent1">
                <div className="perfil3">Perfil</div>
                <img className="icon12" alt="" src="/icon5.svg" />
              </div>
            </div>
            <div
              className="component-172"
              onClick={onComponent17ContainerClick}
            >
              <div className="component-16-inner" />
              <div className="salir3">Salir</div>
            </div>
            <div
              className="component-192"
              onClick={onComponent19ContainerClick}
            >
              <div className="component-16-inner" />
              <div className="inicio5">Exchange</div>
            </div>
          </div>
          <div className="component-187" onClick={onComponent18Container2Click}>
            <div className="component-16-inner" />
            <div className="transferencias-parent1">
              <div className="transferencias5">Historial</div>
              <img className="icon13" alt="" src="/icon23.svg" />
            </div>
          </div>
        </div>
      </div>
      {isPortalExchangeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePortalExchange}
        >
          <PortalExchange onClose={closePortalExchange} />
        </PortalPopup>
      )}
    </>
  );
};

export default BancaEnLineaExchange;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaInicio.css";
const BancaEnLineaInicio = () => {
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

  return (
    <div className="banca-en-linea-inicio">
      <img
        className="mesa-de-trabajo-1-11"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-inicio-child" />
      <div className="banca-en-linea-inicio-item" />
      <div className="div1">0%</div>
      <div className="div2">+0,19%</div>
      <div className="div3">-0,77%</div>
      <div className="posicin-consolidada">Posición Consolidada</div>
      <div className="bienvenidoa-josefina-mara-container2">
        <span className="bienvenidoa-josefina-mara-container3">
          <span className="bienvenidoa1">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-1">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="div4"> 01/07/2023</div>
      <div className="la-informacin-mostrada1">
        La información mostrada en esta página es confidencial
      </div>
      <div className="nombre-de-la-cuenta-parent">
        <b className="nombre-de-la">Nombre de la Cuenta</b>
        <b className="nmero-de-la">Número de la Cuenta</b>
        <b className="movimientos">Movimientos</b>
        <b className="saldo-disponible">Saldo Disponible</b>
      </div>
      <div className="nombre-del-activo-parent">
        <b className="nombre-de-la">Nombre del activo</b>
        <b className="nmero-de-la">Último precio</b>
        <b className="cambio-en">Cambio % en 24H</b>
        <b className="saldo-disponible">Saldo Disponible</b>
      </div>
      <div className="cuenta-corriente-parent">
        <div className="cuenta-corriente">Cuenta Corriente</div>
        <div className="div5">0000*0000</div>
        <div className="bs">100,00 Bs.</div>
      </div>
      <div className="usdt-parent">
        <div className="cuenta-corriente">Usdt</div>
        <div className="div5">$1</div>
        <div className="bs">10</div>
      </div>
      <div className="btc-parent">
        <div className="cuenta-corriente">BTC</div>
        <div className="div5">$30.560</div>
        <div className="bs">0,00001</div>
      </div>
      <div className="eth-parent">
        <div className="cuenta-corriente">ETH</div>
        <div className="div5">$1.920</div>
        <div className="bs">0,0001</div>
      </div>
      <div className="banca-en-linea-inicio-inner" />
      <div className="activos-nacionales">Activos Nacionales</div>
      <div className="banca-en-linea-inicio-child1" />
      <div className="activos-extranjeros">Activos Extranjeros</div>
      <img className="icon10" alt="" src="/icon6.svg" />
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="component-161" onClick={onComponent16ContainerClick}>
          <div className="component-16-item" />
          <div className="exchange2">Exchange</div>
        </div>
        <div className="component-101" onClick={onComponent10ContainerClick}>
          <div className="component-16-item" />
          <div className="consultas-container">
            <div className="consultas2">{`Consultas `}</div>
            <img className="icon11" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-182" onClick={onComponent18ContainerClick}>
          <div className="component-16-item" />
          <div className="transferencias-container">
            <div className="transferencias2">Transferencias</div>
            <img className="icon12" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-183" onClick={onComponent18Container1Click}>
          <div className="component-16-item" />
          <div className="servicios-container">
            <div className="transferencias2">Servicios</div>
            <img className="icon13" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-171" onClick={onComponent17ContainerClick}>
          <div className="component-16-item" />
          <div className="salir2">Salir</div>
        </div>
      </div>
      <div className="component-211">
        <div className="logo-container">
          <img className="logo-icon2" alt="" src="/logo1@2x.png" />
          <div className="technebog-container">
            <div className="technebog2">{`TechNeBog `}</div>
            <div className="un-aliado-de2">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaInicio;

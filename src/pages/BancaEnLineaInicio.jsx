import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaInicio.css";

const BancaEnLineaInicio = () => {
  const navigate = useNavigate();

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
    <div className="banca-en-linea-inicio">
      <img
        className="mesa-de-trabajo-1-13"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-inicio-child" />
      <div className="banca-en-linea-inicio-item" />
      <div className="div17">0%</div>
      <div className="div18">+0,19%</div>
      <div className="div19">-0,77%</div>
      <div className="posicin-consolidada">Posición Consolidada</div>
      <div className="bienvenidoa-josefina-mara-container6">
        <span className="bienvenidoa-josefina-mara-container7">
          <span className="bienvenidoa3">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-3">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="div20"> 01/07/2023</div>
      <div className="la-informacin-mostrada3">
        La información mostrada en esta página es confidencial
      </div>
      <div className="nombre-de-la-cuenta-parent">
        <b className="nombre-de-la">Nombre de la Cuenta</b>
        <b className="nmero-de-la">Número de la Cuenta</b>
        <b className="movimientos">Movimientos</b>
        <b className="saldo-disponible">Saldo Disponible</b>
      </div>
      <div className="nombre-del-activo-group">
        <b className="nombre-de-la">Nombre del activo</b>
        <b className="nmero-de-la">Último precio</b>
        <b className="cambio-en1">Cambio % en 24H</b>
        <b className="saldo-disponible">Saldo Disponible</b>
      </div>
      <div className="cuenta-corriente-parent">
        <div className="cuenta-corriente">Cuenta Corriente</div>
        <div className="div21">0000*0000</div>
        <div className="bs">100,00 Bs.</div>
      </div>
      <div className="usdt-parent">
        <div className="cuenta-corriente">Usdt</div>
        <div className="div21">$1</div>
        <div className="bs">10</div>
      </div>
      <div className="btc-parent">
        <div className="cuenta-corriente">BTC</div>
        <div className="div21">$30.560</div>
        <div className="bs">0,00001</div>
      </div>
      <div className="eth-parent">
        <div className="cuenta-corriente">ETH</div>
        <div className="div21">$1.920</div>
        <div className="bs">0,0001</div>
      </div>
      <div className="banca-en-linea-inicio-inner" />
      <div className="activos-nacionales">Activos Nacionales</div>
      <div className="banca-en-linea-inicio-child1" />
      <div className="activos-extranjeros">Activos Extranjeros</div>
      <img className="icon28" alt="" src="/icon13.svg" />
      <div className="component-213">
        <div className="logo-parent4">
          <img className="logo-icon8" alt="" src="/logo@2x.png" />
          <div className="technebog-parent5">
            <div className="technebog8">{`TechNeBog `}</div>
            <div className="un-aliado-de8">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
      <div className="barra-de-opciones9">
        <div className="barra-de-opciones10">
          <div className="barra-de-opciones-child3" />
          <div className="component-165" onClick={onComponent16ContainerClick}>
            <div className="component-16-child3" />
            <div className="inicio11">Inicio</div>
          </div>
          <div className="component-1814" onClick={onComponent18ContainerClick}>
            <div className="component-16-child3" />
            <div className="transferencias-parent7">
              <div className="transferencias10">Transferencias</div>
              <img className="icon29" alt="" src="/icon14.svg" />
            </div>
          </div>
          <div
            className="component-1815"
            onClick={onComponent18Container1Click}
          >
            <div className="component-16-child3" />
            <div className="perfil-parent4">
              <div className="perfil6">Perfil</div>
              <img className="icon30" alt="" src="/icon5.svg" />
            </div>
          </div>
          <div className="component-175" onClick={onComponent17ContainerClick}>
            <div className="component-16-child3" />
            <div className="salir6">Salir</div>
          </div>
          <div className="component-196" onClick={onComponent19ContainerClick}>
            <div className="component-16-child3" />
            <div className="inicio11">Exchange</div>
          </div>
        </div>
        <div className="component-1816" onClick={onComponent18Container2Click}>
          <div className="component-16-child3" />
          <div className="transferencias-parent7">
            <div className="transferencias11">Historial</div>
            <img className="icon31" alt="" src="/icon15.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaInicio;

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
        className="mesa-de-trabajo-1-13"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-inicio-child" />
      <div className="banca-en-linea-inicio-item" />
      <div className="div5">0%</div>
      <div className="div6">+0,19%</div>
      <div className="div7">-0,77%</div>
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
      <div className="div8"> 01/07/2023</div>
      <div className="la-informacin-mostrada3">
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
        <div className="div9">0000*0000</div>
        <div className="bs">100,00 Bs.</div>
      </div>
      <div className="usdt-parent">
        <div className="cuenta-corriente">Usdt</div>
        <div className="div9">$1</div>
        <div className="bs">10</div>
      </div>
      <div className="btc-parent">
        <div className="cuenta-corriente">BTC</div>
        <div className="div9">$30.560</div>
        <div className="bs">0,00001</div>
      </div>
      <div className="eth-parent">
        <div className="cuenta-corriente">ETH</div>
        <div className="div9">$1.920</div>
        <div className="bs">0,0001</div>
      </div>
      <div className="banca-en-linea-inicio-inner" />
      <div className="activos-nacionales">Activos Nacionales</div>
      <div className="banca-en-linea-inicio-child1" />
      <div className="activos-extranjeros">Activos Extranjeros</div>
      <img className="icon21" alt="" src="/icon6.svg" />
      <div className="rectangle-parent4">
        <div className="group-child6" />
        <div className="component-163" onClick={onComponent16ContainerClick}>
          <div className="component-16-child1" />
          <div className="exchange4">Exchange</div>
        </div>
        <div className="component-103" onClick={onComponent10ContainerClick}>
          <div className="component-16-child1" />
          <div className="consultas-parent2">
            <div className="consultas4">{`Consultas `}</div>
            <img className="icon22" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-186" onClick={onComponent18ContainerClick}>
          <div className="component-16-child1" />
          <div className="transferencias-parent2">
            <div className="transferencias4">Transferencias</div>
            <img className="icon23" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-187" onClick={onComponent18Container1Click}>
          <div className="component-16-child1" />
          <div className="servicios-parent2">
            <div className="transferencias4">Servicios</div>
            <img className="icon24" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-173" onClick={onComponent17ContainerClick}>
          <div className="component-16-child1" />
          <div className="salir4">Salir</div>
        </div>
      </div>
      <div className="component-212">
        <div className="logo-parent1">
          <img className="logo-icon4" alt="" src="/logo1@2x.png" />
          <div className="technebog-parent2">
            <div className="technebog4">{`TechNeBog `}</div>
            <div className="un-aliado-de4">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaInicio;

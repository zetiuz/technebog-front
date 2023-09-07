import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaMensajes.css";
const BancaEnLineaMensajes = () => {
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
    <div className="banca-en-linea-mensajes">
      <img
        className="mesa-de-trabajo-1-14"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-mensajes-child" />
      <div className="tron-parent">
        <div className="tron">Tron</div>
        <div className="div16">$107</div>
        <div className="div17">-0,2%</div>
      </div>
      <div className="banca-en-linea-mensajes-item" />
      <div className="exchange5">Exchange</div>
      <div className="bienvenidoa-josefina-mara-container8">
        <span className="bienvenidoa-josefina-mara-container9">
          <span className="bienvenidoa4">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-4">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="div18"> 01/07/2023</div>
      <div className="la-informacin-mostrada4">
        La información mostrada en esta página es confidencial
      </div>
      <div className="banca-en-linea-mensajes-inner" />
      <div className="banca-en-linea-mensajes-child1" />
      <div className="banca-en-linea-mensajes-child2" />
      <div className="banca-en-linea-mensajes-child3" />
      <div className="banca-en-linea-mensajes-child4" />
      <div className="rectangle-parent8">
        <div className="group-child10" />
        <div className="component-164" onClick={onComponent16ContainerClick}>
          <div className="component-16-child2" />
          <div className="exchange6">Exchange</div>
        </div>
        <div className="component-104" onClick={onComponent10ContainerClick}>
          <div className="component-16-child2" />
          <div className="consultas-parent2">
            <div className="consultas5">{`Consultas `}</div>
            <img className="icon30" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-188" onClick={onComponent18ContainerClick}>
          <div className="component-16-child2" />
          <div className="transferencias-parent3">
            <div className="transferencias5">Transferencias</div>
            <img className="icon31" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-189" onClick={onComponent18Container1Click}>
          <div className="component-16-child2" />
          <div className="servicios-parent3">
            <div className="transferencias5">Servicios</div>
            <img className="icon32" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-174" onClick={onComponent17ContainerClick}>
          <div className="component-16-child2" />
          <div className="salir5">Salir</div>
        </div>
      </div>
      <div className="component-213">
        <div className="logo-parent4">
          <img className="logo-icon7" alt="" src="/logo1@2x.png" />
          <div className="technebog-parent5">
            <div className="technebog7">{`TechNeBog `}</div>
            <div className="un-aliado-de7">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
      <div className="nombre-del-activo-group">
        <b className="nombre-del-activo1">Nombre del activo</b>
        <b className="ltimo-precio1">Último precio</b>
        <b className="cambio-en1">Cambio % en 24H</b>
      </div>
      <div className="tron-parent">
        <div className="tron">DOT</div>
        <div className="div16">$5.324</div>
        <div className="div17">+2,64%</div>
      </div>
      <div className="ltc-parent">
        <div className="tron">LTC</div>
        <div className="div16">$107</div>
        <div className="div17">-0,2%</div>
      </div>
      <div className="ada-parent">
        <div className="tron">ADA</div>
        <div className="div16">$0,2910</div>
        <div className="div17">+1,04%</div>
      </div>
      <div className="sol-parent">
        <div className="tron">SOL</div>
        <div className="div16">$18,78</div>
        <div className="div17">-1,53%</div>
      </div>
      <div className="bnb-parent">
        <div className="tron">BNB</div>
        <div className="div16">$247</div>
        <div className="div17">+1,35%</div>
      </div>
      <img className="icon33" alt="" src="/icon6.svg" />
    </div>
  );
};

export default BancaEnLineaMensajes;

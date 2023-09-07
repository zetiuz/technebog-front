import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaTerceros.css";
const BancaEnLineaTerceros = () => {
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
      <div className="div12"> 01/07/2023</div>
      <div className="la-informacin-mostrada2">
        La información mostrada en esta página es confidencial
      </div>
      <div className="activos">Activos</div>
      <div className="beca">Beca</div>
      <img className="icon14" alt="" src="/icon7.svg" />
      <div className="rectangle-container">
        <div className="group-inner" />
        <div className="component-162" onClick={onComponent16ContainerClick}>
          <div className="component-16-inner" />
          <div className="exchange3">Exchange</div>
        </div>
        <div className="component-102" onClick={onComponent10ContainerClick}>
          <div className="component-16-inner" />
          <div className="group-div">
            <div className="consultas3">{`Consultas `}</div>
            <img className="icon15" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-184" onClick={onComponent18ContainerClick}>
          <div className="component-16-inner" />
          <div className="transferencias-parent1">
            <div className="transferencias3">Transferencias</div>
            <img className="icon16" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-185" onClick={onComponent18Container1Click}>
          <div className="component-16-inner" />
          <div className="servicios-parent1">
            <div className="transferencias3">Servicios</div>
            <img className="icon17" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-172" onClick={onComponent17ContainerClick}>
          <div className="component-16-inner" />
          <div className="salir3">Salir</div>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child1" />
        <div className="activo-a-debitar">Activo a Debitar</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child1" />
        <div className="cuenta-destino">Cuenta Destino</div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child1" />
        <div className="activo-a-debitar">Monto</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child1" />
        <div className="cuenta-destino">Concepto</div>
      </div>
      <img className="icon18" alt="" src="/icon.svg" />
      <img className="icon19" alt="" src="/icon.svg" />
      <div className="procesar1">
        <div className="component-73">
          <div className="component-7-child1" />
          <div className="entrar5">Transferir</div>
        </div>
      </div>
      <div className="component-19">
        <div className="component-19-child" />
      </div>
      <div className="cuenta-no-registrada">Cuenta no Registrada</div>
      <div className="component-201">
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
  );
};

export default BancaEnLineaTerceros;

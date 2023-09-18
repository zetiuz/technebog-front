import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaConsultas.css";

const BancaEnLineaConsultas = () => {
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

  const onProcesarClick = useCallback(() => {
    navigate("/banca-en-linea-mensajes");
  }, [navigate]);

  return (
    <div className="banca-en-linea-consultas">
      <img
        className="mesa-de-trabajo-1-11"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-consultas-child" />
      <div className="banca-en-linea-consultas-item" />
      <div className="historial-de-transacciones">
        Historial de Transacciones
      </div>
      <div className="bienvenidoa-josefina-mara-container2">
        <span className="bienvenidoa-josefina-mara-container3">
          <span className="bienvenidoa1">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-1">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="la-informacin-mostrada1">
        La información mostrada en esta página es confidencial
      </div>
      <div className="periodo-de-consulta">Periodo de consulta</div>
      <div className="group-div">
        <div className="rectangle-div" />
        <div className="component-161" onClick={onComponent16ContainerClick}>
          <div className="component-16-item" />
          <div className="exchange2">Exchange</div>
        </div>
        <div className="component-101" onClick={onComponent10ContainerClick}>
          <div className="component-16-item" />
          <div className="consultas-container">
            <div className="consultas2">{`Consultas `}</div>
            <img className="icon9" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-182" onClick={onComponent18ContainerClick}>
          <div className="component-16-item" />
          <div className="transferencias-container">
            <div className="transferencias2">Transferencias</div>
            <img className="icon10" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-183" onClick={onComponent18Container1Click}>
          <div className="component-16-item" />
          <div className="servicios-container">
            <div className="transferencias2">Servicios</div>
            <img className="icon11" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-171" onClick={onComponent17ContainerClick}>
          <div className="component-16-item" />
          <div className="salir2">Salir</div>
        </div>
      </div>
      <div className="div1"> 01/07/2023</div>
      <div className="rectangle-parent1">
        <div className="group-child1" />
        <div className="div2"> 11/06/2023</div>
        <img className="icon12" alt="" src="/icon8.svg" />
      </div>
      <div className="rectangle-parent2">
        <div className="group-child1" />
        <div className="div2"> 18/06/2023</div>
        <img className="icon12" alt="" src="/icon8.svg" />
      </div>
      <button className="procesar1" onClick={onProcesarClick}>
        <div className="component-72">
          <div className="component-7-inner" />
          <div className="entrar3">Procesar</div>
        </div>
      </button>
      <div className="mximo-30-das">Máximo 30 días atrás</div>
      <div className="mximo-fecha-actual">Máximo fecha actual</div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <div className="group-child3" />
        <div className="group-child4" />
        <div className="dia">1 Dia</div>
        <div className="dias">7 Dias</div>
        <div className="ult-mes">Ult. Mes</div>
      </div>
      <div className="component-21">
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

export default BancaEnLineaConsultas;

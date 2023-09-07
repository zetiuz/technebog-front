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

  const onProcesarContainerClick = useCallback(() => {
    navigate("/banca-en-linea-mensajes");
  }, [navigate]);

  return (
    <div className="banca-en-linea-consultas">
      <img
        className="mesa-de-trabajo-1-13"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-consultas-child" />
      <div className="banca-en-linea-consultas-item" />
      <div className="historial-de-transacciones">
        Historial de Transacciones
      </div>
      <div className="bienvenidoa-josefina-mara-container6">
        <span className="bienvenidoa-josefina-mara-container7">
          <span className="bienvenidoa3">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-3">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="la-informacin-mostrada3">
        La información mostrada en esta página es confidencial
      </div>
      <div className="periodo-de-consulta">Periodo de consulta</div>
      <div className="rectangle-parent5">
        <div className="group-child5" />
        <div className="component-163" onClick={onComponent16ContainerClick}>
          <div className="component-16-child1" />
          <div className="exchange4">Exchange</div>
        </div>
        <div className="component-103" onClick={onComponent10ContainerClick}>
          <div className="component-16-child1" />
          <div className="consultas-parent1">
            <div className="consultas4">{`Consultas `}</div>
            <img className="icon20" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-186" onClick={onComponent18ContainerClick}>
          <div className="component-16-child1" />
          <div className="transferencias-parent2">
            <div className="transferencias4">Transferencias</div>
            <img className="icon21" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-187" onClick={onComponent18Container1Click}>
          <div className="component-16-child1" />
          <div className="servicios-parent2">
            <div className="transferencias4">Servicios</div>
            <img className="icon22" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-173" onClick={onComponent17ContainerClick}>
          <div className="component-16-child1" />
          <div className="salir4">Salir</div>
        </div>
      </div>
      <div className="div13"> 01/07/2023</div>
      <div className="rectangle-parent6">
        <div className="group-child6" />
        <div className="div14"> 11/06/2023</div>
        <img className="icon23" alt="" src="/icon8.svg" />
      </div>
      <div className="rectangle-parent7">
        <div className="group-child6" />
        <div className="div14"> 18/06/2023</div>
        <img className="icon23" alt="" src="/icon8.svg" />
      </div>
      <div className="procesar2" onClick={onProcesarContainerClick}>
        <div className="component-74">
          <div className="component-7-child2" />
          <div className="entrar6">Procesar</div>
        </div>
      </div>
      <div className="mximo-30-das">Máximo 30 días atrás</div>
      <div className="mximo-fecha-actual">Máximo fecha actual</div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <div className="group-child8" />
        <div className="group-child9" />
        <div className="dia">1 Dia</div>
        <div className="dias">7 Dias</div>
        <div className="ult-mes">Ult. Mes</div>
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

export default BancaEnLineaConsultas;

import { useCallback } from "react";
import Entrar from "../components/Entrar";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaHistorial.css";

const BancaEnLineaHistorial = () => {
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
    <div className="banca-en-linea-historial">
      <img
        className="mesa-de-trabajo-1-11"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-historial-child" />
      <div className="banca-en-linea-historial-item" />
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
      <div className="div13"> 01/07/2023</div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="div14"> 11/06/2023</div>
        <img className="icon19" alt="" src="/icon19.svg" />
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="div14"> 18/06/2023</div>
        <img className="icon19" alt="" src="/icon19.svg" />
      </div>
      <button className="procesar1">
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
          entrarCursor="unset"
          entrarBorder="unset"
          entrarPadding="unset"
          entrarBackgroundColor="unset"
        />
      </button>
      <div className="mximo-30-das">Máximo 30 días atrás</div>
      <div className="mximo-fecha-actual">Máximo fecha actual</div>
      <div className="ellipse-parent">
        <div className="group-inner" />
        <div className="ellipse-div" />
        <div className="group-child1" />
        <div className="dia">1 Dia</div>
        <div className="dias">7 Dias</div>
        <div className="ult-mes">Ult. Mes</div>
      </div>
      <div className="component-212">
        <div className="logo-parent2">
          <img className="logo-icon6" alt="" src="/logo@2x.png" />
          <div className="technebog-parent3">
            <div className="technebog6">{`TechNeBog `}</div>
            <div className="un-aliado-de6">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
      <div className="barra-de-opciones5">
        <div className="barra-de-opciones6">
          <div className="barra-de-opciones-child1" />
          <div className="component-163" onClick={onComponent16ContainerClick}>
            <div className="component-16-child1" />
            <div className="inicio7">Inicio</div>
          </div>
          <div className="component-188" onClick={onComponent18ContainerClick}>
            <div className="component-16-child1" />
            <div className="transferencias-parent3">
              <div className="transferencias6">Transferencias</div>
              <img className="icon21" alt="" src="/icon17.svg" />
            </div>
          </div>
          <div className="component-189" onClick={onComponent18Container1Click}>
            <div className="component-16-child1" />
            <div className="perfil-parent2">
              <div className="perfil4">Perfil</div>
              <img className="icon22" alt="" src="/icon5.svg" />
            </div>
          </div>
          <div className="component-173" onClick={onComponent17ContainerClick}>
            <div className="component-16-child1" />
            <div className="salir4">Salir</div>
          </div>
          <div className="component-193" onClick={onComponent19ContainerClick}>
            <div className="component-16-child1" />
            <div className="inicio7">Exchange</div>
          </div>
        </div>
        <div className="component-1810" onClick={onComponent18Container2Click}>
          <div className="component-16-child1" />
          <div className="transferencias-parent3">
            <div className="transferencias7">Historial</div>
            <img className="icon23" alt="" src="/icon18.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaHistorial;

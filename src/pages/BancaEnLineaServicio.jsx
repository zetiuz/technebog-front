import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaServicio.css";
const BancaEnLineaServicio = () => {
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
    <div className="banca-en-linea-servicio">
      <img
        className="mesa-de-trabajo-1-1"
        alt=""
        src="/5126945-mesa-de-trabajo-1-1@2x.png"
      />
      <div className="banca-en-linea-servicio-child" />
      <div className="banca-en-linea-servicio-item" />
      <div className="acualizar-datos">Acualizar Datos</div>
      <div className="bienvenidoa-josefina-mara-container">
        <span className="bienvenidoa-josefina-mara-container1">
          <span className="bienvenidoa">{`Bienvenido(a): `}</span>
          <b>Josefina María</b>
        </span>
      </div>
      <div className="ultima-conexin-">
        Ultima Conexión - 01/07/2023 - 08:30:30 a.m.
      </div>
      <div className="div"> 01/07/2023</div>
      <div className="la-informacin-mostrada">
        La información mostrada en esta página es confidencial
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="component-16" onClick={onComponent16ContainerClick}>
          <div className="component-16-child" />
          <div className="exchange1">Exchange</div>
        </div>
        <div className="component-10" onClick={onComponent10ContainerClick}>
          <div className="component-16-child" />
          <div className="consultas-group">
            <div className="consultas1">{`Consultas `}</div>
            <img className="icon3" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-18" onClick={onComponent18ContainerClick}>
          <div className="component-16-child" />
          <div className="transferencias-group">
            <div className="transferencias1">Transferencias</div>
            <img className="icon4" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="component-181" onClick={onComponent18Container1Click}>
          <div className="component-16-child" />
          <div className="servicios-group">
            <div className="transferencias1">Servicios</div>
            <img className="icon5" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="component-17" onClick={onComponent17ContainerClick}>
          <div className="component-16-child" />
          <div className="salir1">Salir</div>
        </div>
      </div>
      <div className="correo">
        <div className="union">
          <div className="union-child" />
          <div className="union-item" />
        </div>
        <div className="correo-electrnico">Correo Electrónico</div>
        <img className="icon6" alt="" src="/icon2.svg" />
      </div>
      <div className="clave">
        <div className="union">
          <div className="union-child" />
          <div className="union-item" />
        </div>
        <div className="correo-electrnico">Clave</div>
        <img className="icon7" alt="" src="/icon3.svg" />
      </div>
      <div className="procesar">
        <div className="component-72">
          <div className="component-7-inner" />
          <div className="entrar4">Procesar</div>
        </div>
      </div>
      <div className="telefono">
        <div className="union">
          <div className="union-child" />
          <div className="union-item" />
        </div>
        <div className="correo-electrnico">Teléfono</div>
        <img className="icon8" alt="" src="/icon4.svg" />
      </div>
      <div className="direccion">
        <div className="union">
          <div className="union-child" />
          <div className="union-item" />
        </div>
        <div className="correo-electrnico">Dirección</div>
        <img className="icon9" alt="" src="/icon5.svg" />
      </div>
      <div className="component-21">
        <div className="logo-group">
          <img className="logo-icon1" alt="" src="/logo1@2x.png" />
          <div className="technebog-group">
            <div className="technebog1">{`TechNeBog `}</div>
            <div className="un-aliado-de1">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaServicio;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaRecuperarUsu.css";
const BancaEnLineaRecuperarUsu = () => {
  const navigate = useNavigate();

  const onVolverContainerClick = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  return (
    <div className="banca-en-linea-recuperar-usu">
      <img
        className="chica-universitaria-que-trabaj-icon1"
        alt=""
        src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
      />
      <div className="banca-en-linea-recuperar-usu-child" />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <div className="digital-wallet2">Digital Wallet</div>
      <div className="elija-los-datos">Elija los datos a recuperar</div>
      <div className="ingrese-su-correo">{`Ingrese su correo `}</div>
      <img
        className="banca-en-linea-recuperar-usu-item"
        alt=""
        src="/vector-251.svg"
      />
      <div className="recuperacin">Recuperación</div>
      <div className="banca-en-linea-recuperar-usu-inner" />
      <div className="union9">
        <div className="union-child15" />
        <div className="union-child16" />
      </div>
      <div className="banca-en-linea-recuperar-usu-child1" />
      <div className="correo-electrnico2">Correo Electrónico</div>
      <img className="group-icon" alt="" src="/icon2.svg" />
      <select className="component-5" autoFocus id="1" tabIndex={0}>
        <option value="1">Usuario</option>
        <option value="2">Clave</option>
      </select>
      <div className="enviar">
        <div className="component-75">
          <div className="component-7-child3" />
          <div className="entrar8">Enviar</div>
        </div>
      </div>
      <div className="volver" onClick={onVolverContainerClick}>
        <div className="volver1">Volver</div>
      </div>
      <div className="component-221">
        <div className="logo-parent3">
          <img className="logo-icon6" alt="" src="/logo1@2x.png" />
          <div className="technebog-parent4">
            <div className="technebog6">{`TechNeBog `}</div>
            <div className="un-aliado-de6">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaRecuperarUsu;

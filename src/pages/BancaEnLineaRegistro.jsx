import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaRegistro.css";
const BancaEnLineaRegistro = () => {
  const navigate = useNavigate();

  const onComponent4ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  return (
    <div className="banca-en-linea-registro">
      <img
        className="chica-universitaria-que-trabaj-icon"
        alt=""
        src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
      />
      <div className="cuadro-info">
        <div className="cuadro-info-child" />
      </div>
      <div className="regstrate-en-technebog-container">
        <span className="regstrate-en-technebog-container1">
          <p className="regstrate-en">Regístrate en</p>
          <p className="technebog-digital-wallet">
            <span className="span">{` `}</span>
            <span className="technebog-digital-wallet1">{`TechNeBog Digital Wallet `}</span>
          </p>
        </span>
      </div>
      <img
        className="banca-en-linea-registro-child"
        alt=""
        src="/vector-25.svg"
      />
      <div className="introduzca-los-datos-container">
        <span className="regstrate-en-technebog-container1">
          <p className="technebog-digital-wallet">{`Introduzca los datos para completar `}</p>
          <p className="technebog-digital-wallet">su registro.</p>
        </span>
      </div>
      <div className="banca-en-linea-registro-item" />
      <div className="usuario">
        <div className="union4">
          <div className="union-child5" />
          <div className="union-child6" />
        </div>
        <div className="usuario1">Usuario</div>
        <img className="icon25" alt="" src="/icon9.svg" />
      </div>
      <div className="correo1">
        <div className="union4">
          <div className="union-child5" />
          <div className="union-child6" />
        </div>
        <div className="usuario1">Correo Electrónico</div>
        <img className="icon26" alt="" src="/icon2.svg" />
      </div>
      <div className="clave2">
        <div className="union4">
          <div className="union-child5" />
          <div className="union-child6" />
        </div>
        <div className="usuario1">Clave</div>
        <img className="icon27" alt="" src="/icon3.svg" />
      </div>
      <div className="confirmar">
        <div className="union4">
          <div className="union-child5" />
          <div className="union-child6" />
        </div>
        <div className="confirme-la-clave">{`Confirme la Clave `}</div>
        <img className="icon28" alt="" src="/icon10.svg" />
      </div>
      <div className="cedula">
        <div className="union4">
          <div className="union-child5" />
          <div className="union-child6" />
        </div>
        <div className="cedula1">Cedula</div>
        <img className="icon29" alt="" src="/icon11.svg" />
      </div>
      <div className="component-4" onClick={onComponent4ContainerClick}>
        <div className="component-22">
          <div className="component-2-item" />
          <div className="entrar7">Continuar</div>
        </div>
      </div>
      <div className="component-23">
        <div className="logo-parent2">
          <img className="logo-icon5" alt="" src="/logo1@2x.png" />
          <div className="technebog-parent3">
            <div className="technebog5">{`TechNeBog `}</div>
            <div className="un-aliado-de5">
              Un aliado de su Seguridad Financiera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BancaEnLineaRegistro;

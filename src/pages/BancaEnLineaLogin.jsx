import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BancaEnLineaLogin.css";

const BancaEnLineaLogin = () => {
  const navigate = useNavigate();

  const onOlvidasteTuUsuarioClick = useCallback(() => {
    navigate("/banca-en-linea-recuperar-usuario-o-clave");
  }, [navigate]);

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-inicio");
  }, [navigate]);

  const onAquiContainerClick = useCallback(() => {
    navigate("/banca-en-linea-registro");
  }, [navigate]);

  const onVolverContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="banca-en-linea-login">
      <img
        className="chica-universitaria-que-trabaj-icon2"
        alt=""
        src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
      />
      <div className="banca-en-linea-login-child" />
      <div className="mask-group">
        <img className="icon34" alt="" src="/489094201-1@2x.png" />
      </div>
      <div className="technebog-digital-wallet-container">
        <span className="technebog-digital-wallet-container1">
          <span>{` `}</span>
          <span className="technebog-digital-wallet2">{`TechNeBog Digital Wallet `}</span>
        </span>
      </div>
      <img className="banca-en-linea-login-item" alt="" src="/vector-251.svg" />
      <div className="introduzca-usuario-y-container">
        <span className="technebog-digital-wallet-container1">
          <p className="introduzca-usuario-y">{`Introduzca Usuario y Clave `}</p>
          <p className="introduzca-usuario-y">de Internet.</p>
        </span>
      </div>
      <div
        className="olvidaste-tu-usuario-container"
        onClick={onOlvidasteTuUsuarioClick}
      >
        <span className="technebog-digital-wallet-container1">
          <span>{` `}</span>
          <span className="olvidaste-tu-usuario">
            ¿Olvidaste tu Usuario o Clave?
          </span>
        </span>
      </div>
      <div className="quieres-ingresar-por">
        ¿Quieres ingresar por primera vez?
      </div>
      <div className="regstrate">{`Regístrate `}</div>
      <div className="banca-en-linea-login-inner" />
      <div className="frame-parent">
        <div className="union-parent">
          <div className="union10">
            <div className="union-child18" />
            <div className="union-child19" />
          </div>
          <input className="usuario2" placeholder="Usuario" type="text" />
          <img className="icon35" alt="" src="/icon9.svg" />
        </div>
        <div className="union-group">
          <div className="union10">
            <div className="union-child18" />
            <div className="union-child19" />
          </div>
          <input
            className="clave-de-internet"
            placeholder="Clave de internet"
            type="text"
          />
          <img className="icon36" alt="" src="/icon3.svg" />
        </div>
      </div>
      <div className="component-1" onClick={onComponent1ContainerClick}>
        <div className="component-1-child" />
        <div className="entrar9">Entrar</div>
      </div>
      <div className="component-21-wrapper">
        <div className="component-214">
          <div className="logo-parent5">
            <img className="logo-icon8" alt="" src="/logo1@2x.png" />
            <div className="technebog-parent6">
              <div className="technebog8">{`TechNeBog `}</div>
              <div className="un-aliado-de8">
                Un aliado de su Seguridad Financiera
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aqui" onClick={onAquiContainerClick}>
        <div className="aqui1">Aqui</div>
      </div>
      <div className="volver2" onClick={onVolverContainerClick}>
        <div className="aqui1">Volver</div>
      </div>
    </div>
  );
};

export default BancaEnLineaLogin;

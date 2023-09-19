import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Entrar from "../components/Entrar";
import "./BancaEnLineaLogin.css";

const BancaEnLineaLogin = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-inicio");
  }, [navigate]);

  const onOlvidasteTuUsuarioClick = useCallback(() => {
    navigate("/banca-en-linea-recuperar-usuario-o-clave");
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
        className="chica-universitaria-que-trabaj-icon1"
        alt=""
        src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
      />
      <div className="banca-en-linea-login-child" />
      <div className="mask-group">
        <img className="icon7" alt="" src="/489094201-1@2x.png" />
      </div>
      <div className="technebog-digital-wallet-container">
        <span className="technebog-digital-wallet-container1">
          <span>{` `}</span>
          <span className="technebog-digital-wallet">{`TechNeBog Digital Wallet `}</span>
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
          <div className="union1">
            <div className="union-inner" />
            <div className="union-child1" />
          </div>
          <Form className="usuario">
            <Form.Control type="text" id="1" placeholder="Usuario" />
          </Form>
          <img className="icon8" alt="" src="/icon20.svg" />
        </div>
        <div className="union-group">
          <div className="union1">
            <div className="union-inner" />
            <div className="union-child1" />
          </div>
          <Form className="usuario">
            <Form.Control
              type="password"
              id="1"
              placeholder="Clave de Intenet"
            />
          </Form>
          <img className="icon9" alt="" src="/icon8.svg" />
        </div>
      </div>
      <Entrar
        loginButtonText="Entrar"
        property1Group19Position="absolute"
        property1Group19Top="464px"
        property1Group19Left="139px"
        property1Group19Cursor="pointer"
        property1Group19Width="290.12px"
        property1Group19Height="44.63px"
        property1Group19Right="unset"
        property1Group19Bottom="unset"
        property1Group19Border="unset"
        property1Group19Padding="unset"
        property1Group19BackgroundColor="unset"
        entrarCursor="unset"
        entrarBorder="unset"
        entrarPadding="unset"
        entrarBackgroundColor="unset"
        onComponent1ContainerClick={onComponent1ContainerClick}
      />
      <div className="component-21-wrapper">
        <div className="component-21">
          <div className="logo-container">
            <img className="logo-icon3" alt="" src="/logo@2x.png" />
            <div className="technebog-container">
              <div className="technebog3">{`TechNeBog `}</div>
              <div className="un-aliado-de3">
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

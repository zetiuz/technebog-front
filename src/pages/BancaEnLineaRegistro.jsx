import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Entrar from "../components/Entrar";
import "./BancaEnLineaRegistro.css";

const BancaEnLineaRegistro = () => {
  const navigate = useNavigate();

  const onComponent4ContainerClick = useCallback(() => {
    navigate("/banca-en-linea-login");
  }, [navigate]);

  return (
    <div className="banca-en-linea-registro">
      <img
        className="chica-universitaria-que-trabaj-icon2"
        alt=""
        src="/chicauniversitariaquetrabajacomputadoraportatildespueslecciones-1@2x.png"
      />
      <div className="cuadro-info">
        <div className="cuadro-info-child" />
      </div>
      <div className="regstrate-en-technebog-container">
        <span className="regstrate-en-technebog-container1">
          <p className="regstrate-en">Regístrate en</p>
          <p className="introduzca-los-datos">
            <span className="span">{` `}</span>
            <span className="technebog-digital-wallet2">{`TechNeBog Digital Wallet `}</span>
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
          <p className="introduzca-los-datos">{`Introduzca los datos para completar `}</p>
          <p className="introduzca-los-datos">su registro.</p>
        </span>
      </div>
      <div className="banca-en-linea-registro-item" />
      <div className="usuario1">
        <div className="union3">
          <div className="union-child4" />
          <div className="union-child5" />
        </div>
        <Form className="usuario2">
          <Form.Control type="text" placeholder="Usuario" />
        </Form>
        <img className="icon14" alt="" src="/icon20.svg" />
      </div>
      <div className="correo">
        <div className="union3">
          <div className="union-child4" />
          <div className="union-child5" />
        </div>
        <Form className="correo-electrnico1">
          <Form.Control type="email" placeholder="Correo Electrónico" />
        </Form>
        <img className="icon15" alt="" src="/icon7.svg" />
      </div>
      <div className="clave">
        <div className="union3">
          <div className="union-child4" />
          <div className="union-child5" />
        </div>
        <Form className="clave1">
          <Form.Control type="password" placeholder="Clave" />
        </Form>
        <img className="icon16" alt="" src="/icon8.svg" />
      </div>
      <div className="confirmar">
        <div className="union3">
          <div className="union-child4" />
          <div className="union-child5" />
        </div>
        <Form className="confirme-la-clave-container">
          <Form.Control type="password" placeholder="Confirmar Clave" />
        </Form>
        <img className="icon17" alt="" src="/icon21.svg" />
      </div>
      <div className="cedula">
        <div className="union3">
          <div className="union-child4" />
          <div className="union-child5" />
        </div>
        <Form className="cedula1">
          <Form.Control type="number" id="1" placeholder="Cédula" />
        </Form>
        <img className="icon18" alt="" src="/icon22.svg" />
      </div>
      <div className="component-4" onClick={onComponent4ContainerClick}>
        <Entrar
          loginButtonText="Continuar"
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
      </div>
      <div className="component-23">
        <div className="logo-parent1">
          <img className="logo-icon5" alt="" src="/logo@2x.png" />
          <div className="technebog-parent2">
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

import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MensajeConversin from "./MensajeConversin";
import PortalPopup from "./PortalPopup";
import Entrar from "./Entrar";
import "./PortalExchange.css";

const PortalExchange = () => {
  const [isMensajeConversinOpen, setMensajeConversinOpen] = useState(false);

  const openMensajeConversin = useCallback(() => {
    setMensajeConversinOpen(true);
  }, []);

  const closeMensajeConversin = useCallback(() => {
    setMensajeConversinOpen(false);
  }, []);

  return (
    <>
      <div className="portal-exchange">
        <img
          className="portal-exchange-child"
          alt=""
          src="/rectangle-102.svg"
        />
        <Form.Select className="elija-la-moneda-parent">
          <option>Elija la moneda</option>
          <option value="DOT">DOT</option>
          <option value="LTC">LTC</option>
          <option value="ADA">ADA</option>
          <option value="SOL">SOL</option>
          <option value="BNB">BNB</option>
          <option value="BTC">BTC</option>
          <option value="USDT">USDT</option>
        </Form.Select>
        <Form.Select className="elija-la-moneda-group">
          <option>Elija la moneda</option>
          <option value="DOT">DOT</option>
          <option value="LTC">LTC</option>
          <option value="ADA">ADA</option>
          <option value="SOL">SOL</option>
          <option value="BNB">BNB</option>
          <option value="BTC">BTC</option>
          <option value="USDT">USDT</option>
        </Form.Select>
        <div className="conversin-wrapper">
          <input className="conversin" placeholder="Conversión" type="text" />
        </div>
        <div className="a">A:</div>
        <div className="de">De:</div>
        <button className="procesarvariant2" onClick={openMensajeConversin}>
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
        <div className="monto-wrapper">
          <Form className="monto1">
            <Form.Control type="number" placeholder="Monto" />
          </Form>
        </div>
      </div>
      {isMensajeConversinOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMensajeConversin}
        >
          <MensajeConversin onClose={closeMensajeConversin} />
        </PortalPopup>
      )}
    </>
  );
};

export default PortalExchange;

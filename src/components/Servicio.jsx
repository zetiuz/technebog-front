import "./Servicio.css";

const Servicio = () => {
  return (
    <div className="servicio" data-scroll-to="servicioContainer">
      <div className="texto-servicio">
        <div className="frame-group">
          <div className="rectangle-parent2">
            <div className="frame-child" />
            <div className="frame-item" />
          </div>
          <div className="rectangle-parent3">
            <div className="frame-child" />
            <div className="frame-item" />
          </div>
          <div className="servicios1"> Servicios</div>
        </div>
      </div>
      <div className="lista">
        <div className="transacciones">
          <img className="transaccion-icon" alt="" src="/transaccion@2x.png" />
          <div className="texto">
            <div className="transacciones-en-linea">Transacciones en Linea</div>
          </div>
        </div>
        <div className="conversion">
          <img className="transaccion-icon" alt="" src="/transaccion1@2x.png" />
          <div className="texto">
            <div className="transacciones-en-linea">Conversión de Monedas</div>
          </div>
        </div>
        <div className="conversion">
          <img className="transaccion-icon" alt="" src="/transaccion2@2x.png" />
          <div className="texto">
            <div className="almacenar-monedas-internaciona">
              Monedas Internacionales
            </div>
          </div>
        </div>
        <div className="seguridad">
          <img className="transaccion-icon" alt="" src="/transaccion3@2x.png" />
          <div className="texto">
            <div className="transacciones-en-linea">Máxima seguridad</div>
          </div>
        </div>
        <div className="seguridad">
          <img className="transaccion-icon" alt="" src="/transaccion4@2x.png" />
          <div className="texto">
            <div className="transferencias-de-saldo">
              Transferencias de Saldo a Terceros
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;

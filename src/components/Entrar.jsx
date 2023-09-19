import { useMemo } from "react";
import "./Entrar.css";

const Entrar = ({
  loginButtonText,
  property1Group19Position,
  property1Group19Top,
  property1Group19Left,
  property1Group19Cursor,
  property1Group19Width,
  property1Group19Height,
  property1Group19Right,
  property1Group19Bottom,
  property1Group19Border,
  property1Group19Padding,
  property1Group19BackgroundColor,
  entrarCursor,
  entrarBorder,
  entrarPadding,
  entrarBackgroundColor,
  onComponent1ContainerClick,
}) => {
  const property1Group19Style = useMemo(() => {
    return {
      position: property1Group19Position,
      top: property1Group19Top,
      left: property1Group19Left,
      cursor: property1Group19Cursor,
      width: property1Group19Width,
      height: property1Group19Height,
      right: property1Group19Right,
      bottom: property1Group19Bottom,
      border: property1Group19Border,
      padding: property1Group19Padding,
      backgroundColor: property1Group19BackgroundColor,
    };
  }, [
    property1Group19Position,
    property1Group19Top,
    property1Group19Left,
    property1Group19Cursor,
    property1Group19Width,
    property1Group19Height,
    property1Group19Right,
    property1Group19Bottom,
    property1Group19Border,
    property1Group19Padding,
    property1Group19BackgroundColor,
  ]);

  const entrarStyle = useMemo(() => {
    return {
      cursor: entrarCursor,
      border: entrarBorder,
      padding: entrarPadding,
      backgroundColor: entrarBackgroundColor,
    };
  }, [entrarCursor, entrarBorder, entrarPadding, entrarBackgroundColor]);

  return (
    <div
      className="property-1group-19"
      style={property1Group19Style}
      onClick={onComponent1ContainerClick}
    >
      <div className="property-1group-19-child" />
      <div className="entrar1" style={entrarStyle}>
        {loginButtonText}
      </div>
    </div>
  );
};

export default Entrar;

import React from "react";
export default function ComponenteMultiple(props) {
  const calcularPrecioHotel = () => {
    if (!isNaN(props.datos) && props.datos !== "") {
      return props.datos * 40;
    } else return "";
  };

  const calcularAlquilerCoche = () => {
    if (!isNaN(props.datos) && props.datos !== "") {
      if (props.datos < 3) {
        return props.datos * 40;
      } else if (props.datos < 7) {
        return props.datos * 40 - 20;
      } else {
        return props.datos * 40 - 50;
      }
    } else {
      return "";
    }
  };
  return (
    <React.Fragment>
      <div>
        {props.opcion === 1
          ? "Precio Hotel:" + calcularPrecioHotel()
          : props.opcion === 2
          ? "Alquiler del coche:" + calcularAlquilerCoche()
          : ""}
      </div>
    </React.Fragment>
  );
}

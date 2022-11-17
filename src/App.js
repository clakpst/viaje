import React, { useState } from "react";
import ComponenteMultiple from "./components/ComponenteMultiple";
import "./styles.css";

export default function App() {
  const [datos, setDatos] = new useState();

  return (
    <React.Fragment>
      <input type="text" onChange={(e) => setDatos(e.target.value)} />
      <ComponenteMultiple opcion={1} datos={datos} />
      <ComponenteMultiple opcion={2} datos={datos} />
    </React.Fragment>
  );
}

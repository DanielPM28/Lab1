import React from "react";
import "../Estilos/perfil.css";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <div className="grid-container">
        <img
          className="imagen-perfil"
          src={require(`../img/${props.imagen}.jpg`)}
          alt="Foto de desarrollador"
        />
        <div className="contenedor-texto-perfil">
          <p className="nombre-perfil">
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className="cargo-perfil">
           Con el genero {props.genero} en <strong>{props.origen}</strong>
          </p>
          <p className="texto-perfil">"{props.perfil}" </p>
        </div>
      </div>
     
    </div>
    
  );
}
export default Perfil;

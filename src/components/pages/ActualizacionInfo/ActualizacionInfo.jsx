import React from "react";
import { Formik } from "formik";
import "./actualizacionInfo.css";

const ActualizacionInfo = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre:"",
          apellido:"",
          direccion:"",
          telefono:"",
          correo:"",
        }}
        validate={(datos)=>{
          let errors={}
          if(datos.nombre==""){
            errors.nombre="Debe ingresar un nombre"
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(datos.nombre)){
            errors.nombre="El nombre debe terner más de 4 caracteres y solo puede contener letras y espacios"
          }

          return errors;
        }}
        onSubmit={(obj)=>{
          console.log(obj);
          //e.preventDefault();
          console.log("se evió el form")
        }}
      >
        {({handleSubmit,errors,values,handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="divInputs">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="nombre"
                placeholder="Su nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors && <div>{errors.nombre}</div>}
            </div>
            <div className="divInputs">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Sus apellidos"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="direccion">Direccion:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Su direccion"
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="telefono">Telefono:</label>
              <input
                type="number"
                id="telefono"
                name="telefono"
                placeholder="Su número telefonico"
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="Su correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit">Guardar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ActualizacionInfo;

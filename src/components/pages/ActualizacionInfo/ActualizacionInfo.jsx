import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import AliadoContext from "../../../context/aliado/AliadoContext";
import { getPartner, updatePartner } from "../../../Firebase/functions";
import { Formik } from "formik";
import Header from "../../Header/Header";
import "./actualizacionInfo.css";
import { Link } from "react-router-dom";


const ActualizacionInfo = () => {

  const navigateTo = useNavigate()

  //const {getUser}= useContext(AliadoContext);
  const [usuario, setUsuario]=useState(
    {
      name:"",
      apellido:"",
      institucion:"",
      direccion:"",
      telefono:"",
      email: "",
    }    
  )

  const cargarUsuario = async ()=>{
    const user = await getPartner();
    //console.log(user.data());
    setUsuario(user.data())
    //console.log(usuario);
  }

  useEffect(()=>{
      cargarUsuario()
    },[]
  );
  return (
    <>
      
      <div className="title">
        <h2>Actualice su Información</h2>
      </div>
      <Formik
        initialValues={usuario}
        enableReinitialize={ true }
        validate={(datos)=>{
          let errors={}
          //validación de nombre
          if(!datos.name){
            errors.name="Debe ingresar un nombre"
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(datos.name)){
            errors.nombre="El nombre debe terner más de 4 caracteres y solo puede contener letras y espacios"
          }

          //validación de correo
          if(!datos.email){
            errors.correo="Debe ingresar un correo electronico"
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(datos.email)){
            errors.email="Debe ingresar un correo valido"
          }

          return errors;
        }}
        onSubmit={(obj, {resetForm})=>{
          console.log(obj);
          //e.preventDefault();
          console.log("se evió el form")
          updatePartner(obj);
          resetForm();
          navigateTo("/aliado")
          
        }}
      >
        {({handleSubmit,errors, touched, values,handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="divInputs">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={usuario.name}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <div className="errores">{errors.name}</div>}
            </div>
            <div className="divInputs">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder={usuario.apellido}
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="institucion">Institución:</label>
              <input
                type="text"
                id="institucion"
                name="institucion"
                placeholder={usuario.institucion}
                value={values.institucion}
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
                placeholder={usuario.direccion}
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
                placeholder={usuario.telefono}
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="email">Correo Insitucional:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={usuario.email}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.email && errors.email && <div className="errores">{errors.email}</div>}
            <Link to="/Aliado"><button type="submit">Guardar</button></Link>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ActualizacionInfo;

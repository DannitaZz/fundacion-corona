import { useReducer } from "react";
import  AliadoContext  from "./AliadoContext";
import  AliadoReducer from "./AliadoReducer";

import { getAuth } from "firebase/auth";
import {
  GET_INFO_ALIADO,
  ACTUALIZAR_INFO_ALIADO,
  ELIMINAR_ALIADO
} from "../../Types/index";

import { userRol } from "../../Firebase/auth"; 

import { getPartner } from "../../Firebase/functions";

const AliadoState = (props) => {

  const auth = getAuth();
  const userId = auth.currentUser;

  const initialState = {
      user: null,
      msj: null,
      auth: false
  }
  const [state, dispatch] = useReducer(AliadoReducer, initialState);


  const getUser = async () => {

    const partner = await getPartner();
    console.log(partner);
    return partner;

  }
  const updateUser = async (usuario) => {
    return null
  }
  return (
      <AliadoContext.provider value={{
          currentUser: state.user,
          currentMsj: state.msj,
          currentAuth: state.auth,
          getUser,
          updateUser,
      }}>
          {props.children}
      </AliadoContext.provider>
  )
}

export default AliadoState;
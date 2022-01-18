import { useReducer } from "react";
import { AliadoContext } from "./AliadoContext";
import { AliadoReducer } from "./AliadoReducer";

import {
  GET_INFO_ALIADO,
  ACTUALIZAR_INFO_ALIADO,
  ELIMINAR_ALIADO
} from "../../Types/index";

const AliadoState = (props) => {

  const initialState = {
      user: null,
      msj: null,
      auth: false
  }
  const [state, dispatch] = useReducer(AliadoReducer, initialState);


  const getUser = async () => {
    
  }
  const updateUser = async () => {

  }
  return (
      <AliadoContext.provider value={{
          currentUser: state.user,
          currentMsj: state.msj,
          currentAuth: state.auth
      }}>
          {props.children}
      </AliadoContext.provider>
  )
}

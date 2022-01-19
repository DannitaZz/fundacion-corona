import {
    GET_INFO_ALIADO,
    ACTUALIZAR_INFO_ALIADO,
    ELIMINAR_ALIADO
} from "../../Types/index";

export default (state, action) => {
  switch (action.type) {
      case GET_INFO_ALIADO:
          return {
              ...state,
              user: action.payload,
              auth: true,
              msj: null
          }
      case ACTUALIZAR_INFO_ALIADO:
          return {
              ...state,
              msj: action.payload,
          }
      case ELIMINAR_ALIADO:
          return {
              ...state,
              msj: null,
              auth: false,
              user: null
          }
  }
}
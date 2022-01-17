import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../Types/index.js';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
            return {
                ...state,
                user: action.payload,
                auth: true,
                msj: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                msj: action.payload,
            }
        case CERRAR_SESION:
            return {
                ...state,
                msj: null,
                auth: false,
                user: null
            }
    }
}
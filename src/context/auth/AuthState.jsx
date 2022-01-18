import { useReducer } from "react";
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../Types/index.js';

const AuthState = (props) => {
    const initialState = {
        user: null,
        tipo: null,
        msj: null,
        auth: false
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const Login = async (user) => {

    }
    const SingOut = async () => {

    }
    return (
        <AuthContext.provider value={{
            currentUser: state.user,
            currentMsj: state.msj,
            currentAuth: state.auth
        }}>
            {props.children}
        </AuthContext.provider>
    )
}
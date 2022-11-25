import { createContext, useReducer } from "react"
import { authReducer } from './authReducer';




// Definir que informacion tendre en este context
export interface AuthState {
    isLoggdIn: boolean,
    usrName?: string,
    favoriteIcon?: string,
}

// Estado inicial
export const authInicialstate: AuthState = {
    isLoggdIn: false,
    usrName: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
} 

// Crear el contexto, es el que se va a llamar para obtener las propiedades
export const AuthContext = createContext({} as AuthContextProps);

//Componente que es el proveedor del estado 

export const AuthProvider = ({children}: any) =>{

    const [ authStateReducer, dispatch] = useReducer( authReducer, authInicialstate );
    
    const logIn = () => {
        dispatch({type: 'signIn'})
    }

    return(
        <AuthContext.Provider value={{
            authState:  authStateReducer,
            signIn: logIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


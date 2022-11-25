



import React,{ createContext, useReducer } from "react";
import { authReducer } from './authReducer';

//Definir que informacion tendria aqui
export interface AuthState{
    isLoggedIn: boolean,
    userName?: string,
    favoriteIcon?: string, 
}

// Estado inicial
export const authInicialState: AuthState={
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce lo que expone el context
export interface AuthContextProps {
    authState: AuthState,
    singIn: () => void,
    changeIcon: (iconName: string) => void,
    logOut: () => void,
    changeName: (userName: string) => void,
}
// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer( authReducer, authInicialState );

    const logIn = () =>{
        dispatch({ type: 'signIn' });
    }

    const changeIcon = (iconName: string) =>{
        dispatch({ type: 'changeIcon', payload: iconName });
    }

    const logOut = () => {
        dispatch({type: "logout"});
    }

    const changeName = (userName: string) => {
        dispatch({ type: 'changeUsername', payload: userName })
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            singIn: logIn,
            changeIcon,
            logOut,
            changeName,
        }}>
            {children}
        </AuthContext.Provider>
    )
}



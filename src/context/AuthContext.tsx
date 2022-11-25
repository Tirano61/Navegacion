



import React,{ createContext } from "react";

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
}
// Crear ell contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any ) => {
    return (
        <AuthContext.Provider value={{
            authState: authInicialState,
            singIn: () => {},
        }}>
            {children}
        </AuthContext.Provider>
    )
}



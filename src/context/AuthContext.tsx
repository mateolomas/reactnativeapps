import React, { useReducer, useState } from 'react';
import { createContext } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Usaremos para decirle a react como luce y expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (icon: string) => void;
    signOut: () => void;
    changeUsername: (username: string) => void;
}

//Create context
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor de estado

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }


    const changeFavIcon = (icon: string) => {
        dispatch({ type: 'changeFavIcon', payload: icon });
    }

    const signOut = () => {
        dispatch({ type: 'signOut' });
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    }

    return (
        <AuthContext.Provider
            value={{ authState, signIn, changeFavIcon, signOut, changeUsername }}>
            {children}
        </AuthContext.Provider>
    );
};


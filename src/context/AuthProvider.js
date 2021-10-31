import React, { createContext } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import useFirebase from '../hooks/useFirebase';


initializeAuthentication();

export const AuthContext = createContext();



const AuthProvider = ({ children }) =>
{
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
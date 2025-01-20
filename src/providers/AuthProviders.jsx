import { createContext } from "react";

const AuthContext =createContext(null)
const AuthProviders = () => {
    const authInfo = {name: 'nodi sagor khal bill'}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;

/****
 * 1.create context
 * 2.
 */
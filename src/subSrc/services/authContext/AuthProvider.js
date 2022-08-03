import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth, removeAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth, removeAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
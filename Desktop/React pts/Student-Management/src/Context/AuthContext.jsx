import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLogin, setIsLogin] = useState(
        localStorage.getItem("isLogin") === "true"
    );

    function login() {
        localStorage.setItem("isLogin", "true");
        setIsLogin(true);
    }

    function logout() {
        localStorage.removeItem("isLogin");
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
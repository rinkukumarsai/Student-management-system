import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute({ children }) {

    const { isLogin } = useContext(AuthContext);

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
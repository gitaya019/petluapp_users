import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
    children,
}) {

    const token =
        localStorage.getItem("token");

    /* SI NO HAY TOKEN */

    if (!token) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    /* SI HAY TOKEN */

    return children;
}
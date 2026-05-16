// src/App.jsx

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import Home from "./pages/Home";

import Welcome from "./pages/Welcome";

import ProtectedRoute
from "./routes/ProtectedRoute";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* BIENVENIDA */}

                <Route
                    path="/"
                    element={<Welcome />}
                />

                {/* LOGIN */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* HOME PROTEGIDO */}

                <Route
                    path="/home"
                    element={

                        <ProtectedRoute>

                            <Home />

                        </ProtectedRoute>
                    }
                />

                {/* REDIRECCION */}

                <Route
                    path="*"
                    element={
                        <Navigate to="/" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}
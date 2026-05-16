import { useState } from "react";

import { useNavigate } from "react-router-dom";

import auth from "../services/auth";

export default function Login() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response =
                await auth.post(
                    "/login",
                    {
                        email,
                        password,
                    }
                );

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate("/");

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button type="submit">
                Entrar
            </button>

        </form>
    );
}
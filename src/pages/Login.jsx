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

        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#F2F2F2]
                px-4
            "
        >

            <form
                onSubmit={handleLogin}
                className="
                    bg-white
                    p-10
                    rounded-3xl
                    shadow-xl
                    w-full
                    max-w-md
                "
            >

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-center
                        text-[#6A4C93]
                        mb-2
                    "
                >
                    PetluApp
                </h1>

                <p
                    className="
                        text-center
                        text-gray-500
                        mb-8
                    "
                >
                    Inicia sesión
                </p>

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="
                        w-full
                        border
                        border-gray-200
                        rounded-xl
                        p-4
                        mb-4
                        outline-none
                        focus:border-[#6A4C93]
                    "
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="
                        w-full
                        border
                        border-gray-200
                        rounded-xl
                        p-4
                        mb-6
                        outline-none
                        focus:border-[#6A4C93]
                    "
                />

                <button
                    type="submit"
                    className="
                        w-full
                        bg-[#6A4C93]
                        hover:bg-[#5a3f80]
                        text-white
                        p-4
                        rounded-xl
                        font-bold
                        transition
                        cursor-pointer
                    "
                >
                    Entrar
                </button>

            </form>

        </div>
    );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    PawPrint,
    Eye,
    EyeOff,
    ShieldCheck,
} from "lucide-react";

import auth from "../services/auth";

export default function Login() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const [errors, setErrors] =
        useState({});

    const navigate = useNavigate();

    const validate = () => {

        let newErrors = {};

        if (!email) {

            newErrors.email =
                "El correo es obligatorio";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {

            newErrors.email =
                "Correo inválido";
        }

        if (!password) {

            newErrors.password =
                "La contraseña es obligatoria";

        } else if (password.length < 6) {

            newErrors.password =
                "Mínimo 6 caracteres";
        }

        setErrors(newErrors);

        return Object.keys(newErrors)
            .length === 0;
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        try {

            setLoading(true);

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

            navigate("/home");

        } catch (error) {

            setErrors({
                general:
                    error?.response?.data?.message ||
                    "Credenciales incorrectas",
            });

        } finally {

            setLoading(false);
        }
    };

    return (

        <div
            className="
                min-h-screen
                relative
                overflow-hidden
                bg-[#F2F2F2]
                flex
                items-center
                justify-center
                px-4
            "
        >

            {/* EFECTOS FONDO */}
            <div
                className="
                    absolute
                    w-[450px]
                    h-[450px]
                    bg-[#6A4C93]/25
                    blur-3xl
                    rounded-full
                    -top-40
                    -left-40
                "
            />

            <div
                className="
                    absolute
                    w-[350px]
                    h-[350px]
                    bg-[#2DB7A3]/20
                    blur-3xl
                    rounded-full
                    bottom-0
                    right-0
                "
            />

            {/* CARD */}
            <form
                onSubmit={handleLogin}
                className="
                    relative
                    z-10
                    w-full
                    max-w-md
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-white
                    rounded-[32px]
                    p-8
                    shadow-2xl
                "
            >

                {/* LOGO */}
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        mb-6
                    "
                >

                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            bg-gradient-to-br
                            from-[#6A4C93]
                            to-[#2DB7A3]
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >

                        <PawPrint
                            size={38}
                            className="text-white"
                        />

                    </div>

                </div>

                {/* TITULOS */}
                <h1
                    className="
                        text-4xl
                        font-black
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
                    Gestión veterinaria inteligente
                </p>

                {/* ERROR */}
                {errors.general && (

                    <div
                        className="
                            bg-red-100
                            border
                            border-red-200
                            text-red-500
                            text-sm
                            p-4
                            rounded-2xl
                            mb-5
                        "
                    >
                        {errors.general}
                    </div>
                )}

                {/* EMAIL */}
                <div className="mb-5">

                    <label
                        className="
                            text-sm
                            text-[#6A4C93]
                            font-semibold
                            mb-2
                            block
                        "
                    >
                        Correo electrónico
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            bg-[#F2F2F2]
                            border
                            border-[#DCCDF2]
                            rounded-2xl
                            px-4
                            focus-within:border-[#2DB7A3]
                            focus-within:ring-2
                            focus-within:ring-[#2DB7A3]/20
                            transition
                        "
                    >

                        <Mail
                            size={20}
                            className="
                                text-[#6A4C93]
                            "
                        />

                        <input
                            type="email"
                            placeholder="admin@petluapp.com"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                bg-transparent
                                p-4
                                text-gray-700
                                placeholder:text-gray-400
                                outline-none
                            "
                        />

                    </div>

                    {errors.email && (

                        <p
                            className="
                                text-red-500
                                text-sm
                                mt-2
                            "
                        >
                            {errors.email}
                        </p>
                    )}

                </div>

                {/* PASSWORD */}
                <div className="mb-6">

                    <label
                        className="
                            text-sm
                            text-[#6A4C93]
                            font-semibold
                            mb-2
                            block
                        "
                    >
                        Contraseña
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            bg-[#F2F2F2]
                            border
                            border-[#DCCDF2]
                            rounded-2xl
                            px-4
                            focus-within:border-[#2DB7A3]
                            focus-within:ring-2
                            focus-within:ring-[#2DB7A3]/20
                            transition
                        "
                    >

                        <Lock
                            size={20}
                            className="
                                text-[#6A4C93]
                            "
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                bg-transparent
                                p-4
                                text-gray-700
                                placeholder:text-gray-400
                                outline-none
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="
                                text-[#6A4C93]
                                hover:text-[#2DB7A3]
                                transition
                                cursor-pointer
                            "
                        >

                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}

                        </button>

                    </div>

                    {errors.password && (

                        <p
                            className="
                                text-red-500
                                text-sm
                                mt-2
                            "
                        >
                            {errors.password}
                        </p>
                    )}

                </div>

                {/* BOTON */}
                <button
                    type="submit"
                    disabled={loading}
                    className="
                        w-full
                        bg-gradient-to-r
                        from-[#6A4C93]
                        to-[#2DB7A3]
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        transition
                        text-white
                        font-bold
                        p-4
                        rounded-2xl
                        shadow-lg
                        cursor-pointer
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                    "
                >

                    {loading
                        ? "Ingresando..."
                        : "Entrar al sistema"}

                </button>

                {/* FOOTER */}
                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        text-gray-500
                    "
                >

                    <ShieldCheck size={16} />

                    Plataforma segura y confiable

                </div>

            </form>

        </div>
    );
}
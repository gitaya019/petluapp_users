// src/pages/Welcome.jsx

import { Link } from "react-router-dom";

import {
    PawPrint,
    ShoppingCart,
    CalendarClock,
    HeartPulse,
    BellRing,
    Activity,
    ChevronRight,
} from "lucide-react";

export default function Welcome() {

    return (

        <div
            className="
                min-h-screen
                overflow-hidden
                bg-[#F2F2F2]
                text-[#2B2B2B]
                relative
            "
        >

            {/* GRID FONDO */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-40
                    [background-image:linear-gradient(rgba(106,76,147,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(106,76,147,0.06)_1px,transparent_1px)]
                    [background-size:45px_45px]
                "
            />

            {/* GLOW */}

            <div
                className="
                    absolute
                    top-[-200px]
                    left-[-100px]
                    w-[500px]
                    h-[500px]
                    bg-[#6A4C93]
                    opacity-20
                    blur-[140px]
                    rounded-full
                "
            />

            <div
                className="
                    absolute
                    bottom-[-200px]
                    right-[-100px]
                    w-[500px]
                    h-[500px]
                    bg-[#2DB7A3]
                    opacity-20
                    blur-[140px]
                    rounded-full
                "
            />

            {/* CONTENT */}

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    px-8
                    py-10
                "
            >

                {/* NAVBAR */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-24
                    "
                >

                    <div>

                        <h1
                            className="
                                text-5xl
                                font-black
                                tracking-tight
                                text-[#6A4C93]
                            "
                        >
                            PetluApp
                        </h1>

                        <p
                            className="
                                text-gray-500
                                mt-2
                                text-lg
                            "
                        >
                            Plataforma Inteligente Veterinaria
                        </p>

                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-4
                        "
                    >

                        <Link
                            to="/login"
                            className="
                                bg-white/70
                                border
                                border-[#DCCDF2]
                                hover:bg-white
                                transition
                                px-8
                                py-4
                                rounded-2xl
                                font-semibold
                                backdrop-blur-xl
                                text-[#6A4C93]
                                shadow-lg
                            "
                        >
                            Iniciar Sesión
                        </Link>

                        <Link
                            to="/home"
                            className="
                                bg-gradient-to-r
                                from-[#6A4C93]
                                to-[#2DB7A3]
                                hover:scale-105
                                transition
                                px-8
                                py-4
                                rounded-2xl
                                font-bold
                                shadow-2xl
                                text-white
                            "
                        >
                            Ir al Panel
                        </Link>

                    </div>

                </div>

                {/* HERO */}

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >

                    {/* LEFT */}

                    <div>

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-3
                                bg-white/80
                                border
                                border-[#DCCDF2]
                                rounded-full
                                px-6
                                py-3
                                mb-8
                                backdrop-blur-xl
                                shadow-lg
                            "
                        >

                            <div
                                className="
                                    w-3
                                    h-3
                                    rounded-full
                                    bg-[#2DB7A3]
                                    animate-pulse
                                "
                            />

                            <span
                                className="
                                    text-[#6A4C93]
                                    font-medium
                                "
                            >
                                Plataforma veterinaria moderna
                            </span>

                        </div>

                        <h2
                            className="
                                text-7xl
                                leading-[0.95]
                                font-black
                                tracking-tight
                            "
                        >
                            Todo el control

                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-[#6A4C93]
                                    via-[#8E6AC4]
                                    to-[#2DB7A3]
                                    text-transparent
                                    bg-clip-text
                                "
                            >
                                de tus mascotas
                            </span>

                            en un solo lugar
                        </h2>

                        <p
                            className="
                                mt-10
                                text-xl
                                text-gray-600
                                leading-relaxed
                                max-w-2xl
                            "
                        >
                            Consulta historiales médicos,
                            controla vacunas,
                            revisa compras,
                            administra citas y recibe
                            recordatorios inteligentes
                            desde una plataforma elegante,
                            rápida y segura.
                        </p>

                        {/* FEATURES */}

                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-5
                                mt-12
                            "
                        >

                            <Feature
                                icon={<HeartPulse size={22} />}
                                title="Historial Clínico"
                            />

                            <Feature
                                icon={<ShoppingCart size={22} />}
                                title="Compras"
                            />

                            <Feature
                                icon={<CalendarClock size={22} />}
                                title="Citas"
                            />

                            <Feature
                                icon={<BellRing size={22} />}
                                title="Recordatorios"
                            />

                        </div>

                        {/* BUTTON */}

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-5
                                mt-14
                            "
                        >

                            <Link
                                to="/login"
                                className="
                                    group
                                    bg-gradient-to-r
                                    from-[#6A4C93]
                                    to-[#2DB7A3]
                                    px-10
                                    py-5
                                    rounded-2xl
                                    font-black
                                    text-lg
                                    flex
                                    items-center
                                    gap-3
                                    shadow-[0_0_40px_rgba(106,76,147,0.25)]
                                    hover:scale-105
                                    transition
                                    text-white
                                "
                            >
                                Ingresar al Sistema

                                <ChevronRight
                                    className="
                                        group-hover:translate-x-1
                                        transition
                                    "
                                />

                            </Link>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div
                        className="
                            relative
                        "
                    >

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-[#6A4C93]
                                to-[#2DB7A3]
                                blur-[120px]
                                opacity-20
                                rounded-full
                            "
                        />

                        <div
                            className="
                                relative
                                bg-white/70
                                border
                                border-[#DCCDF2]
                                backdrop-blur-2xl
                                rounded-[40px]
                                p-8
                                shadow-[0_0_80px_rgba(106,76,147,0.15)]
                            "
                        >

                            {/* TOP */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-10
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-gray-500
                                        "
                                    >
                                        Sistema Central
                                    </p>

                                    <h3
                                        className="
                                            text-4xl
                                            font-black
                                            mt-2
                                            text-[#6A4C93]
                                        "
                                    >
                                        Dashboard
                                    </h3>

                                </div>

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
                                        shadow-2xl
                                        text-white
                                    "
                                >

                                    <PawPrint size={36} />

                                </div>

                            </div>

                            {/* CARDS */}

                            <div
                                className="
                                    space-y-6
                                "
                            >

                                <DashboardItem
                                    title="Mascotas"
                                    subtitle="Control total de tus mascotas"
                                />

                                <DashboardItem
                                    title="Historial Médico"
                                    subtitle="Información clínica organizada"
                                />

                                <DashboardItem
                                    title="Vacunas"
                                    subtitle="Seguimiento automatizado"
                                />

                                <DashboardItem
                                    title="Compras"
                                    subtitle="Gestión de productos y pagos"
                                />

                                <div
                                    className="
                                        bg-gradient-to-r
                                        from-[#6A4C93]
                                        to-[#2DB7A3]
                                        rounded-3xl
                                        p-8
                                        mt-8
                                        shadow-2xl
                                        text-white
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <div>

                                            <h4
                                                className="
                                                    text-3xl
                                                    font-black
                                                "
                                            >
                                                Sistema Activo
                                            </h4>

                                            <p
                                                className="
                                                    text-white/80
                                                    mt-2
                                                "
                                            >
                                                Plataforma operativa
                                                correctamente
                                            </p>

                                        </div>

                                        <Activity size={42} />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

/* COMPONENT */

function Feature({
    icon,
    title,
}) {

    return (

        <div
            className="
                bg-white/70
                border
                border-[#DCCDF2]
                rounded-2xl
                p-5
                backdrop-blur-xl
                hover:scale-[1.02]
                hover:bg-white
                transition
                shadow-lg
            "
        >

            <div
                className="
                    text-[#2DB7A3]
                    mb-3
                "
            >
                {icon}
            </div>

            <p
                className="
                    font-semibold
                    text-[#6A4C93]
                "
            >
                {title}
            </p>

        </div>
    );
}

function DashboardItem({
    title,
    subtitle,
}) {

    return (

        <div
            className="
                bg-white/70
                border
                border-[#DCCDF2]
                rounded-3xl
                p-6
                hover:scale-[1.01]
                hover:bg-white
                transition
                shadow-lg
            "
        >

            <h4
                className="
                    text-2xl
                    font-black
                    text-[#6A4C93]
                "
            >
                {title}
            </h4>

            <p
                className="
                    text-gray-500
                    mt-2
                "
            >
                {subtitle}
            </p>

        </div>
    );
}
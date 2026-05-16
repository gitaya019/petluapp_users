// src/components/historiales/HistorialMedicoModal.jsx

import {
    X,
    Stethoscope,
    CalendarDays,
    Building2,
    PawPrint,
} from "lucide-react";

export default function HistorialMedicoModal({

    open,

    onClose,

    historiales = [],
}) {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/50
                backdrop-blur-sm
                p-4
            "
        >

            <div
                className="
                    bg-white
                    w-full
                    max-w-5xl
                    rounded-3xl
                    shadow-2xl
                    overflow-hidden
                    animate-in
                    fade-in
                    zoom-in
                "
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-8
                        py-6
                        border-b
                        border-gray-100
                    "
                >

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-black
                                text-[#6A4C93]
                            "
                        >
                            Historial Médico
                        </h2>

                        <p
                            className="
                                text-gray-500
                                mt-1
                            "
                        >
                            Consulta médica completa
                            de tus mascotas.
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            bg-[#F2F2F2]
                            hover:bg-red-100
                            hover:text-red-600
                            transition
                            rounded-2xl
                            p-3
                            cursor-pointer
                        "
                    >

                        <X size={22} />

                    </button>

                </div>

                {/* CONTENT */}

                <div
                    className="
                        max-h-[75vh]
                        overflow-y-auto
                        p-8
                        space-y-6
                    "
                >

                    {historiales.length === 0 && (

                        <div
                            className="
                                text-center
                                py-20
                                text-gray-400
                            "
                        >
                            No hay historiales médicos.
                        </div>

                    )}

                    {historiales.map((historial) => (

                        <div
                            key={historial.id}
                            className="
                                border
                                border-gray-100
                                rounded-3xl
                                p-6
                                shadow-sm
                                hover:shadow-xl
                                transition
                            "
                        >

                            {/* HEADER CARD */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    lg:flex-row
                                    lg:items-center
                                    lg:justify-between
                                    gap-4
                                "
                            >

                                <div>

                                    <h3
                                        className="
                                            text-2xl
                                            font-black
                                            text-[#6A4C93]
                                        "
                                    >
                                        {historial.mascota?.nombre}
                                    </h3>

                                    <p
                                        className="
                                            text-[#2DB7A3]
                                            font-semibold
                                            mt-1
                                        "
                                    >
                                        {historial.diagnostico}
                                    </p>

                                </div>

                                <span
                                    className="
                                        bg-[#DCCDF2]
                                        text-[#6A4C93]
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-bold
                                        w-fit
                                    "
                                >
                                    Historial #{historial.id}
                                </span>

                            </div>

                            {/* GRID INFO */}

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    gap-5
                                    mt-6
                                "
                            >

                                {/* MASCOTA */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >

                                    <PawPrint
                                        size={20}
                                        className="
                                            text-[#6A4C93]
                                        "
                                    />

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Mascota
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                            "
                                        >
                                            {historial.mascota?.nombre}
                                        </p>

                                    </div>

                                </div>

                                {/* VETERINARIO */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >

                                    <Stethoscope
                                        size={20}
                                        className="
                                            text-[#2DB7A3]
                                        "
                                    />

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Veterinario
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                            "
                                        >
                                            {historial.veterinario?.name}
                                        </p>

                                    </div>

                                </div>

                                {/* FECHA */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >

                                    <CalendarDays
                                        size={20}
                                        className="
                                            text-[#6A4C93]
                                        "
                                    />

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Fecha
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                            "
                                        >
                                            {historial.fecha}
                                        </p>

                                    </div>

                                </div>

                                {/* CLINICA */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >

                                    <Building2
                                        size={20}
                                        className="
                                            text-[#2DB7A3]
                                        "
                                    />

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                text-gray-400
                                            "
                                        >
                                            Clínica
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                            "
                                        >
                                            {historial.clinica?.nombre}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* MOTIVO CONSULTA */}

                            {historial.motivo_consulta && (

                                <div
                                    className="
                                        mt-6
                                        bg-[#F8F8F8]
                                        rounded-2xl
                                        p-5
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            text-gray-400
                                            mb-2
                                        "
                                    >
                                        Motivo de Consulta
                                    </p>

                                    <p
                                        className="
                                            text-gray-700
                                            leading-relaxed
                                        "
                                    >
                                        {historial.motivo_consulta}
                                    </p>

                                </div>

                            )}

                            {/* TRATAMIENTO */}

                            {historial.tratamiento && (

                                <div
                                    className="
                                        mt-4
                                        bg-[#F8F8F8]
                                        rounded-2xl
                                        p-5
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            text-gray-400
                                            mb-2
                                        "
                                    >
                                        Tratamiento
                                    </p>

                                    <p
                                        className="
                                            text-gray-700
                                            leading-relaxed
                                        "
                                    >
                                        {historial.tratamiento}
                                    </p>

                                </div>

                            )}

                            {/* OBSERVACIONES */}

                            {historial.observaciones && (

                                <div
                                    className="
                                        mt-4
                                        bg-[#F8F8F8]
                                        rounded-2xl
                                        p-5
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            text-gray-400
                                            mb-2
                                        "
                                    >
                                        Observaciones
                                    </p>

                                    <p
                                        className="
                                            text-gray-700
                                            leading-relaxed
                                        "
                                    >
                                        {historial.observaciones}
                                    </p>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}
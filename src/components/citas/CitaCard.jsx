// src/components/citas/CitaCard.jsx

import {
    CalendarDays,
    Clock3,
    Stethoscope,
} from "lucide-react";

export default function CitaCard({
    cita,
}) {

    const fechaFormateada =
        new Date(
            cita.fecha
        ).toLocaleDateString(
            "es-CO",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            }
        );

    return (

        <div
            className="
                bg-white
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                transition
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-5
                "
            >

                <div
                    className="
                        bg-[#DCCDF2]
                        p-3
                        rounded-2xl
                    "
                >

                    <CalendarDays
                        className="
                            text-[#6A4C93]
                        "
                    />

                </div>

                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold

                        ${
                            cita.estado ===
                            "confirmada"

                            ? `
                                bg-green-100
                                text-green-700
                            `

                            : `
                                bg-red-100
                                text-red-700
                            `
                        }
                    `}
                >
                    {cita.estado}
                </span>

            </div>

            <h3
                className="
                    text-2xl
                    font-black
                    text-[#6A4C93]
                "
            >
                {cita.mascota?.nombre}
            </h3>

            <p
                className="
                    text-[#2DB7A3]
                    font-semibold
                    mt-2
                "
            >
                {
                    cita.motivo ||
                    "Consulta veterinaria"
                }
            </p>

            <div
                className="
                    mt-5
                    space-y-3
                    text-gray-600
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <CalendarDays
                        size={18}
                    />

                    <span>
                        {fechaFormateada}
                    </span>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <Clock3 size={18} />

                    <span>
                        {cita.hora}
                    </span>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <Stethoscope
                        size={18}
                    />

                    <span>
                        Dr(a).{" "}
                        {
                            cita.veterinario
                                ?.name
                        }
                    </span>

                </div>

            </div>

            {cita.observaciones && (

                <div
                    className="
                        mt-5
                        bg-[#F2F2F2]
                        rounded-2xl
                        p-4
                        text-sm
                        text-gray-600
                    "
                >

                    {cita.observaciones}

                </div>

            )}

        </div>
    );
}
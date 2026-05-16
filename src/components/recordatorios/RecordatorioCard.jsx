// src/components/recordatorios/RecordatorioCard.jsx

import {
    BellRing,
    CalendarClock,
    Mail,
    PawPrint,
    Syringe,
} from "lucide-react";

export default function RecordatorioCard({
    recordatorio,
}) {

    const fecha =
        new Date(
            recordatorio.fecha_programada
        ).toLocaleDateString(
            "es-CO",
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
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
                        bg-[#2DB7A3]/10
                        p-3
                        rounded-2xl
                    "
                >

                    <BellRing
                        className="
                            text-[#2DB7A3]
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
                            recordatorio.estado ===
                            "enviado"

                            ? `
                                bg-green-100
                                text-green-700
                            `

                            : `
                                bg-yellow-100
                                text-yellow-700
                            `
                        }
                    `}
                >
                    {recordatorio.estado}
                </span>

            </div>

            <h3
                className="
                    text-xl
                    font-black
                    text-[#6A4C93]
                    capitalize
                "
            >
                {recordatorio.tipo
                    ?.replaceAll("_", " ")}
            </h3>

            <p
                className="
                    text-gray-600
                    mt-4
                    leading-relaxed
                "
            >
                {recordatorio.mensaje}
            </p>

            <div
                className="
                    mt-5
                    space-y-3
                    text-sm
                    text-gray-500
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <CalendarClock
                        size={18}
                    />

                    <span>
                        {fecha}
                    </span>

                </div>

                {recordatorio.mascota && (

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <PawPrint size={18} />

                        <span>
                            {
                                recordatorio
                                    .mascota
                                    .nombre
                            }
                        </span>

                    </div>

                )}

                {recordatorio.vacuna && (

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <Syringe size={18} />

                        <span>
                            {
                                recordatorio
                                    .vacuna
                                    .nombre
                            }
                        </span>

                    </div>

                )}

                {recordatorio.correo_destino && (

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <Mail size={18} />

                        <span>
                            {
                                recordatorio
                                    .correo_destino
                            }
                        </span>

                    </div>

                )}

            </div>

        </div>
    );
}
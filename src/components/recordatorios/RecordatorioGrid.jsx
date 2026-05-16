// src/components/recordatorios/RecordatorioGrid.jsx

import { useMemo, useState }
from "react";

import RecordatorioCard
from "./RecordatorioCard";

import HorizontalScroll
from "../ui/HorizontalScroll";

export default function RecordatorioGrid({
    recordatorios,
}) {

    const [estado, setEstado] =
        useState("todos");

    const recordatoriosFiltrados =
        useMemo(() => {

            if (estado === "todos") {
                return recordatorios;
            }

            return recordatorios.filter(
                (recordatorio) =>
                    recordatorio.estado ===
                    estado
            );

        }, [
            recordatorios,
            estado,
        ]);

    const tabs = [

        {
            label: "Todos",
            value: "todos",
        },

        {
            label: "Pendientes",
            value: "pendiente",
        },

        {
            label: "Enviados",
            value: "enviado",
        },
    ];

    return (

        <section className="mt-14">

            <div
                className="
                    mb-6
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-4
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
                        Recordatorios
                    </h2>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Vacunas, controles y pendientes.
                    </p>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-white
                        p-2
                        rounded-2xl
                        shadow-sm
                        border
                        border-gray-100
                        w-fit
                    "
                >

                    {tabs.map((tab) => (

                        <button
                            key={tab.value}
                            onClick={() =>
                                setEstado(
                                    tab.value
                                )
                            }
                            className={`
                                px-5
                                py-2.5
                                rounded-xl
                                font-semibold
                                transition
                                cursor-pointer

                                ${
                                    estado ===
                                    tab.value

                                    ? `
                                        bg-[#6A4C93]
                                        text-white
                                        shadow-md
                                    `

                                    : `
                                        text-gray-500
                                        hover:bg-[#F2F2F2]
                                    `
                                }
                            `}
                        >

                            {tab.label}

                        </button>

                    ))}

                </div>

            </div>

            <HorizontalScroll>

                {recordatoriosFiltrados.map(
                    (recordatorio) => (

                    <div
                        key={recordatorio.id}
                        className="
                            min-w-[360px]
                            max-w-[360px]
                            flex-shrink-0
                        "
                    >

                        <RecordatorioCard
                            recordatorio={
                                recordatorio
                            }
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
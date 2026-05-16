// src/components/compras/CompraGrid.jsx

import { useMemo, useState }
from "react";

import CompraCard
from "./CompraCard";

import HorizontalScroll
from "../ui/HorizontalScroll";

export default function CompraGrid({
    compras,
}) {

    const [estadoFiltro,
        setEstadoFiltro] =
        useState("todos");

    const filtros = [

        {
            label: "Todas",
            value: "todos",
        },

        {
            label: "Pendientes",
            value: "pendiente",
        },

        {
            label: "Pagadas",
            value: "pagado",
        },

        {
            label: "Canceladas",
            value: "cancelado",
        },
    ];

    const comprasFiltradas =
        useMemo(() => {

            if (
                estadoFiltro ===
                "todos"
            ) {
                return compras;
            }

            return compras.filter(
                (compra) =>
                    compra.estado ===
                    estadoFiltro
            );

        }, [
            compras,
            estadoFiltro,
        ]);

    return (

        <section className="mt-14">

            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-5
                    mb-6
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
                        Mis Compras
                    </h2>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Historial de compras y pagos.
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

                    {filtros.map((filtro) => (

                        <button
                            key={filtro.value}
                            onClick={() =>
                                setEstadoFiltro(
                                    filtro.value
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
                                    estadoFiltro ===
                                    filtro.value

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

                            {filtro.label}

                        </button>

                    ))}

                </div>

            </div>

            <HorizontalScroll>

                {comprasFiltradas.map(
                    (compra) => (

                    <div
                        key={compra.id}
                        className="
                            min-w-[340px]
                            max-w-[340px]
                            flex-shrink-0
                        "
                    >

                        <CompraCard
                            compra={compra}
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
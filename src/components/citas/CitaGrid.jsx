import { useMemo, useState }
from "react";

import CitaCard from "./CitaCard";

import HorizontalScroll
from "../ui/HorizontalScroll";

import StatusFilter
from "../ui/StatusFilter";

export default function CitaGrid({
    citas,
}) {

    const [estado, setEstado] =
        useState("");

    const citasFiltradas =
        useMemo(() => {

            if (!estado) {
                return citas;
            }

            return citas.filter(
                (cita) =>
                    cita.estado === estado
            );

        }, [citas, estado]);

    return (

        <section className="mt-14">

            <div
                className="
                    mb-6
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
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
                        Mis Citas
                    </h2>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Próximas consultas veterinarias.
                    </p>

                </div>

                <StatusFilter
                    value={estado}
                    onChange={setEstado}
                    placeholder="Todas las citas"
                    options={[
                        {
                            value: "pendiente",
                            label: "Pendiente",
                        },
                        {
                            value: "confirmada",
                            label: "Confirmada",
                        },
                        {
                            value: "completada",
                            label: "Completada",
                        },
                        {
                            value: "cancelada",
                            label: "Cancelada",
                        },
                        {
                            value: "no_asistio",
                            label: "No asistió",
                        },
                    ]}
                />

            </div>

            <HorizontalScroll>

                {citasFiltradas.map(
                    (cita) => (

                    <div
                        key={cita.id}
                        className="
                            min-w-[360px]
                            max-w-[360px]
                            flex-shrink-0
                        "
                    >

                        <CitaCard
                            cita={cita}
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
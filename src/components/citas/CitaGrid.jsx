// src/components/citas/CitaGrid.jsx

import CitaCard from "./CitaCard";

import HorizontalScroll
    from "../ui/HorizontalScroll";

export default function CitaGrid({
    citas,
}) {

    return (

        <section className="mt-14">

            <div className="mb-6">

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

            <HorizontalScroll>

                {citas.map((cita) => (

                    <div
                        key={cita.id}
                        className="
                            min-w-[360px]
                            max-w-[360px]
                            flex-shrink-0
                        "
                    >

                        <CitaCard cita={cita} />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
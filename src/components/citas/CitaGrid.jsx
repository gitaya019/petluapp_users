// src/components/citas/CitaGrid.jsx

import CitaCard from "./CitaCard";

export default function CitaGrid({
    citas,
}) {

    return (

        <section
            className="
                mt-14
            "
        >

            <div
                className="
                    mb-6
                "
            >

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

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >

                {citas.map((cita) => (

                    <CitaCard
                        key={cita.id}
                        cita={cita}
                    />

                ))}

            </div>

        </section>
    );
}
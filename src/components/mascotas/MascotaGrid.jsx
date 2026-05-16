// src/components/mascotas/MascotaGrid.jsx

import MascotaCard from "./MascotaCard";

export default function MascotaGrid({
    mascotas,
}) {

    return (

        <div>

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
                    Mis Mascotas
                </h2>

                <p
                    className="
                        text-gray-500
                        mt-2
                    "
                >
                    Información general de
                    tus mascotas registradas.
                </p>

            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                "
            >

                {mascotas.map((mascota) => (

                    <MascotaCard
                        key={mascota.id}
                        mascota={mascota}
                    />

                ))}

            </div>

        </div>
    );
}
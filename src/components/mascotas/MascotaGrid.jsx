// src/components/mascotas/MascotaGrid.jsx

import MascotaCard from "./MascotaCard";

import HorizontalScroll
    from "../ui/HorizontalScroll";

export default function MascotaGrid({
    mascotas,
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

            <HorizontalScroll>

                {mascotas.map((mascota) => (

                    <div
                        key={mascota.id}
                        className="
                            min-w-[340px]
                            max-w-[340px]
                            flex-shrink-0
                        "
                    >

                        <MascotaCard
                            mascota={mascota}
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
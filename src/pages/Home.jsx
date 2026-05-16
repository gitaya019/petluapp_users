import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import api from "../services/api";

export default function Home() {

    const [mascotas, setMascotas] =
        useState([]);

    useEffect(() => {

        const loadMascotas = async () => {

            try {

                const response =
                    await api.get(
                        "/mascotas"
                    );

                setMascotas(
                    response.data.data
                );

            } catch (error) {

                console.log(error);
            }
        };

        loadMascotas();

    }, []);

    return (

        <MainLayout>

            <div
                className="
                    mb-8
                "
            >

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-[#6A4C93]
                    "
                >
                    Mis Mascotas
                </h1>

                <p
                    className="
                        text-gray-500
                        mt-2
                    "
                >
                    Administra toda la información
                    de tus mascotas.
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

                {mascotas.map((mascota) => (

                    <div
                        key={mascota.id}
                        className="
                            bg-white
                            rounded-3xl
                            p-6
                            shadow-md
                            hover:shadow-xl
                            transition
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-[#6A4C93]
                            "
                        >
                            {mascota.nombre}
                        </h2>

                        <p
                            className="
                                text-[#2DB7A3]
                                font-medium
                                mt-2
                            "
                        >
                            {mascota.especie}
                        </p>

                        <p
                            className="
                                text-gray-500
                                mt-1
                            "
                        >
                            {mascota.raza}
                        </p>

                    </div>

                ))}

            </div>

        </MainLayout>
    );
}
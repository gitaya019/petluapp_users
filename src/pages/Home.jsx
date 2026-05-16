import { useEffect, useState } from "react";

import api from "../services/api";

export default function Home() {

    const [mascotas, setMascotas] =
        useState([]);

    useEffect(() => {

        const loadMascotas = async () => {

            try {

                const response =
                    await api.get(
                        "system/mascotas"
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

        <div>

            <h1>Mascotas</h1>

            {mascotas.map((mascota) => (

                <div key={mascota.id}>
                    {mascota.nombre}
                </div>

            ))}

        </div>
    );
}
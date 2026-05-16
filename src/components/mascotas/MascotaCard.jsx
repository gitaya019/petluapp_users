// src/components/mascotas/MascotaCard.jsx

export default function MascotaCard({
    mascota,
}) {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <div>

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-[#6A4C93]
                        "
                    >
                        {mascota.nombre}
                    </h2>

                    <p
                        className="
                            text-[#2DB7A3]
                            font-semibold
                            mt-2
                        "
                    >
                        {mascota.especie}
                    </p>

                </div>

            </div>

            <div
                className="
                    mt-5
                    space-y-2
                "
            >

                <p
                    className="
                        text-gray-500
                    "
                >
                    <span
                        className="
                            font-semibold
                            text-gray-700
                        "
                    >
                        Raza:
                    </span>

                    {" "}
                    {mascota.raza || "No registrada"}
                </p>

                <p
                    className="
                        text-gray-500
                    "
                >
                    <span
                        className="
                            font-semibold
                            text-gray-700
                        "
                    >
                        Sexo:
                    </span>

                    {" "}
                    {mascota.sexo || "No registrado"}
                </p>

                <p
                    className="
                        text-gray-500
                    "
                >
                    <span
                        className="
                            font-semibold
                            text-gray-700
                        "
                    >
                        Color:
                    </span>

                    {" "}
                    {mascota.color || "No registrado"}
                </p>

            </div>

        </div>
    );
}
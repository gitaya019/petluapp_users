// src/components/recordatorios/RecordatorioGrid.jsx

import RecordatorioCard from "./RecordatorioCard";

export default function RecordatorioGrid({
    recordatorios,
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
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >

                {recordatorios.map(
                    (recordatorio) => (

                    <RecordatorioCard
                        key={recordatorio.id}
                        recordatorio={
                            recordatorio
                        }
                    />

                ))}

            </div>

        </section>
    );
}
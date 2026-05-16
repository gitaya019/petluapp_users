// src/components/recordatorios/RecordatorioGrid.jsx

import RecordatorioCard
    from "./RecordatorioCard";

import HorizontalScroll
    from "../ui/HorizontalScroll";

export default function RecordatorioGrid({
    recordatorios,
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

            <HorizontalScroll>

                {recordatorios.map(
                    (recordatorio) => (

                    <div
                        key={recordatorio.id}
                        className="
                            min-w-[360px]
                            max-w-[360px]
                            flex-shrink-0
                        "
                    >

                        <RecordatorioCard
                            recordatorio={
                                recordatorio
                            }
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
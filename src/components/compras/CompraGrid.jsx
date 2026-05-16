// src/components/compras/CompraGrid.jsx

import CompraCard from "./CompraCard";

export default function CompraGrid({
    compras,
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
                    Mis Compras
                </h2>

                <p
                    className="
                        text-gray-500
                        mt-2
                    "
                >
                    Historial de compras y pagos.
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

                {compras.map((compra) => (

                    <CompraCard
                        key={compra.id}
                        compra={compra}
                    />

                ))}

            </div>

        </section>
    );
}
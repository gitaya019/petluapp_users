// src/components/compras/CompraGrid.jsx

import CompraCard from "./CompraCard";

import HorizontalScroll
    from "../ui/HorizontalScroll";

export default function CompraGrid({
    compras,
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

            <HorizontalScroll>

                {compras.map((compra) => (

                    <div
                        key={compra.id}
                        className="
                            min-w-[340px]
                            max-w-[340px]
                            flex-shrink-0
                        "
                    >

                        <CompraCard
                            compra={compra}
                        />

                    </div>

                ))}

            </HorizontalScroll>

        </section>
    );
}
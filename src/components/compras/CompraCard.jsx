// src/components/compras/CompraCard.jsx

import {
    ShoppingBag,
    DollarSign,
    Building2,
    CalendarDays,
    BadgeDollarSign,
} from "lucide-react";

export default function CompraCard({
    compra,
}) {

    const total =
        Number(compra.total)
            .toLocaleString(
                "es-CO",
                {
                    style: "currency",
                    currency: "COP",
                }
            );

    const fecha =
        new Date(
            compra.created_at
        ).toLocaleDateString(
            "es-CO",
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }
        );

    const estadoClasses = {

        pendiente: `
            bg-yellow-100
            text-yellow-700
        `,

        pagado: `
            bg-green-100
            text-green-700
        `,

        cancelado: `
            bg-red-100
            text-red-700
        `,
    };

    return (

        <div
            className="
                bg-white
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                transition
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-5
                "
            >

                <div
                    className="
                        bg-[#6A4C93]/10
                        p-3
                        rounded-2xl
                    "
                >

                    <ShoppingBag
                        className="
                            text-[#6A4C93]
                        "
                    />

                </div>

                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        capitalize

                        ${
                            estadoClasses[
                                compra.estado
                            ] ||
                            `
                                bg-gray-100
                                text-gray-700
                            `
                        }
                    `}
                >
                    {compra.estado}
                </span>

            </div>

            <h3
                className="
                    text-2xl
                    font-black
                    text-[#6A4C93]
                "
            >
                Compra #{compra.id}
            </h3>

            <div
                className="
                    mt-5
                    space-y-4
                    text-gray-600
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <DollarSign
                        size={18}
                    />

                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                            "
                        >
                            Total
                        </p>

                        <p
                            className="
                                font-bold
                                text-[#2DB7A3]
                                text-lg
                            "
                        >
                            {total}
                        </p>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <Building2
                        size={18}
                    />

                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                            "
                        >
                            Clínica
                        </p>

                        <p
                            className="
                                font-semibold
                            "
                        >
                            {
                                compra
                                    .clinica
                                    ?.nombre
                            }
                        </p>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <CalendarDays
                        size={18}
                    />

                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                            "
                        >
                            Fecha
                        </p>

                        <p
                            className="
                                font-semibold
                            "
                        >
                            {fecha}
                        </p>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <BadgeDollarSign
                        size={18}
                    />

                    <div>

                        <p
                            className="
                                text-xs
                                text-gray-400
                            "
                        >
                            Estado del pago
                        </p>

                        <p
                            className="
                                font-semibold
                                capitalize
                            "
                        >
                            {compra.estado}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}
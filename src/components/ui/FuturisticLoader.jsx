export default function FuturisticLoader({
    title = "Cargando información...",
}) {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                py-24
            "
        >

            {/* CIRCULO */}

            <div
                className="
                    relative
                    w-24
                    h-24
                "
            >

                <div
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border-4
                        border-[#DCCDF2]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border-4
                        border-t-[#6A4C93]
                        border-r-[#2DB7A3]
                        border-b-transparent
                        border-l-transparent
                        animate-spin
                    "
                />

                <div
                    className="
                        absolute
                        inset-3
                        rounded-full
                        bg-gradient-to-br
                        from-[#6A4C93]
                        to-[#2DB7A3]
                        animate-pulse
                    "
                />

            </div>

            <h2
                className="
                    mt-8
                    text-2xl
                    font-black
                    text-[#6A4C93]
                "
            >
                {title}
            </h2>

            <p
                className="
                    text-gray-500
                    mt-2
                "
            >
                Obteniendo recursos del sistema...
            </p>

        </div>
    );
}
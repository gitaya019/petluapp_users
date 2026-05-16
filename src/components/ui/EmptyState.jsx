export default function EmptyState({

    title = "Sin información",

    message = "No hay datos para mostrar.",
}) {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-md
                p-16
                text-center
            "
        >

            <h2
                className="
                    text-3xl
                    font-black
                    text-[#6A4C93]
                "
            >
                {title}
            </h2>

            <p
                className="
                    text-gray-500
                    mt-4
                    max-w-xl
                    mx-auto
                "
            >
                {message}
            </p>

        </div>
    );
}
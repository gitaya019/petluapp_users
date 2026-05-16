// src/components/dashboard/DashboardCard.jsx

export default function DashboardCard({
    title,
    value,
    icon,
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

                    <p
                        className="
                            text-gray-400
                            font-medium
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-black
                            text-[#6A4C93]
                            mt-2
                        "
                    >
                        {value}
                    </h2>

                </div>

                <div
                    className="
                        bg-[#2DB7A3]
                        text-white
                        p-4
                        rounded-2xl
                    "
                >
                    {icon}
                </div>

            </div>

        </div>
    );
}
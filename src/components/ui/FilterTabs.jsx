// src/components/ui/FilterTabs.jsx

export default function FilterTabs({

    options = [],

    value,

    onChange,
}) {

    return (

        <div
            className="
                flex
                items-center
                gap-3
                overflow-x-auto
                pb-1

                [&::-webkit-scrollbar]:hidden
            "
        >

            {options.map((option) => (

                <button
                    key={option.value}
                    onClick={() =>
                        onChange(
                            option.value
                        )
                    }
                    className={`
                        px-5
                        py-2.5
                        rounded-2xl
                        text-sm
                        font-bold
                        whitespace-nowrap
                        transition-all
                        duration-300
                        cursor-pointer
                        border

                        ${
                            value ===
                            option.value

                            ? `
                                bg-[#6A4C93]
                                text-white
                                border-[#6A4C93]
                                shadow-lg
                                scale-105
                            `

                            : `
                                bg-white
                                text-gray-600
                                border-gray-200
                                hover:border-[#6A4C93]
                                hover:text-[#6A4C93]
                                hover:shadow-md
                            `
                        }
                    `}
                >
                    {option.label}
                </button>

            ))}

        </div>
    );
}
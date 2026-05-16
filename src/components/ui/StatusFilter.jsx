export default function StatusFilter({
    value,
    onChange,
    options = [],
    placeholder = "Filtrar",
}) {

    return (

        <div
            className="
                relative
                inline-block
            "
        >

            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="
                    appearance-none
                    bg-white
                    border
                    border-[#DCCDF2]
                    text-[#6A4C93]
                    font-semibold
                    rounded-2xl
                    px-5
                    py-3
                    pr-12
                    shadow-sm
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-[#2DB7A3]
                    focus:border-[#2DB7A3]
                    hover:border-[#6A4C93]
                    cursor-pointer
                "
            >

                <option value="">
                    {placeholder}
                </option>

                {options.map((option) => (

                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>

                ))}

            </select>

            <div
                className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#6A4C93]
                "
            >
                ▼
            </div>

        </div>
    );
}
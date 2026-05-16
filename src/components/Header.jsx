import { PawPrint } from "lucide-react";

export default function Header() {

    return (

        <header
            className="
                bg-[#6A4C93]
                text-white
                shadow-lg
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-4
                    flex
                    items-center
                    justify-between
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <div
                        className="
                            bg-[#2DB7A3]
                            p-2
                            rounded-xl
                        "
                    >

                        <PawPrint size={24} />

                    </div>

                    <div>

                        <h1
                            className="
                                text-2xl
                                font-bold
                            "
                        >
                            PetluApp
                        </h1>

                        <p
                            className="
                                text-sm
                                text-[#DCCDF2]
                            "
                        >
                            Gestión veterinaria inteligente
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}
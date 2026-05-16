import { LogOut } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        navigate("/login");
    };

    return (

        <button
            onClick={handleLogout}
            className="
                flex
                items-center
                gap-2
                bg-white/10
                hover:bg-white/20
                px-4
                py-2
                rounded-xl
                transition
                cursor-pointer
            "
        >

            <LogOut size={18} />

            Salir

        </button>
    );
}
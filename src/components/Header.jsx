import logo from "../assets/logo_ruby.svg";

import useAuth from "../hooks/useAuth";

import UserInfo from "./UserInfo";

import LogoutButton from "./LogoutButton";

export default function Header() {
  const { user, loading } = useAuth();

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
        {/* Logo */}

        <div
          className="
                        flex
                        items-center
                        gap-3
                    "
        >
          <div
            className="
        bg-[#ffffff]
        p-2
        rounded-xl
    "
          >
            <img
              src={logo}
              alt="PetluApp"
              className="
            w-12
            h-12
            object-contain
        "
            />
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

        {/* Usuario */}

        {!loading && (
          <div
            className="
                            flex
                            items-center
                            gap-4
                        "
          >
            <UserInfo user={user} />

            <LogoutButton />
          </div>
        )}
      </div>
    </header>
  );
}

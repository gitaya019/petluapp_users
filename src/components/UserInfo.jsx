export default function UserInfo({
    user
}) {

    if (!user) return null;

    return (

        <div
            className="
                text-right
            "
        >

            <h2
                className="
                    font-bold
                    text-lg
                "
            >
                {user.name}
            </h2>

            <p
                className="
                    text-sm
                    text-[#DCCDF2]
                "
            >
                {
                  user.clinicas?.[0]
                        ?.nombre ||
                    "Sin clínica"
                }
            </p>

        </div>
    );
}
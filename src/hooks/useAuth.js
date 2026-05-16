import { useEffect, useState } from "react";

import api from "../services/api";

export default function useAuth() {

    const [user, setUser] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const loadUser = async () => {

            try {

                const response =
                    await api.get("/me");

                setUser(
                    response.data.user
                );

            } catch (error) {

                console.log(error);
            }

            setLoading(false);
        };

        loadUser();

    }, []);

    return {
        user,
        loading,
    };
}
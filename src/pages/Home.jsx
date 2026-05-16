import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import api from "../services/api";

import DashboardCards
from "../components/dashboard/DashboardCards";

import MascotaGrid
from "../components/mascotas/MascotaGrid";

import CitaGrid
from "../components/citas/CitaGrid";

import RecordatorioGrid
from "../components/recordatorios/RecordatorioGrid";

import CompraGrid
from "../components/compras/CompraGrid";

import FuturisticLoader
from "../components/ui/FuturisticLoader";

import SectionWrapper
from "../components/ui/SectionWrapper";

export default function Home() {

    const [loading, setLoading] =
        useState(true);

    const [mascotas, setMascotas] =
        useState([]);

    const [citas, setCitas] =
        useState([]);

    const [recordatorios, setRecordatorios] =
        useState([]);

    const [compras, setCompras] =
        useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const [
                    mascotasResponse,
                    citasResponse,
                    recordatoriosResponse,
                    ventasResponse,
                ] = await Promise.all([

                    api.get("/mascotas"),

                    api.get("/citas"),

                    api.get("/recordatorios"),

                    api.get("/ventas"),
                ]);

                setMascotas(
                    mascotasResponse.data.data
                );

                setCitas(
                    citasResponse.data.data
                );

                setRecordatorios(
                    recordatoriosResponse.data.data
                );

                setCompras(
                    ventasResponse.data.data
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        fetchData();

    }, []);

    if (loading) {

        return (

            <MainLayout>

                <FuturisticLoader
                    title="Cargando panel de consultas ..."
                />

            </MainLayout>
        );
    }

    return (

        <MainLayout>

            <div className="mb-10">

                <h1
                    className="
                        text-4xl
                        font-black
                        text-[#6A4C93]
                    "
                >
                    Panel Principal
                </h1>

                <p
                    className="
                        text-gray-500
                        mt-2
                    "
                >
                    Gestiona mascotas, citas,
                    compras y recordatorios.
                </p>

            </div>

            <DashboardCards
                mascotas={mascotas}
                citas={citas}
                recordatorios={recordatorios}
                ventas={compras}
            />

            <SectionWrapper
                data={mascotas}
                emptyTitle="No tienes mascotas"
                emptyMessage="
                    Aún no has registrado mascotas.
                "
            >

                <MascotaGrid
                    mascotas={mascotas}
                />

            </SectionWrapper>

            <SectionWrapper
                data={citas}
                emptyTitle="No tienes citas"
                emptyMessage="
                    No hay citas programadas.
                "
            >

                <CitaGrid
                    citas={citas}
                />

            </SectionWrapper>

            <SectionWrapper
                data={recordatorios}
                emptyTitle="No tienes recordatorios"
                emptyMessage="
                    No hay recordatorios pendientes.
                "
            >

                <RecordatorioGrid
                    recordatorios={recordatorios}
                />

            </SectionWrapper>

            <SectionWrapper
                data={compras}
                emptyTitle="No tienes compras"
                emptyMessage="
                    No existen compras registradas.
                "
            >

                <CompraGrid
                    compras={compras}
                />

            </SectionWrapper>

        </MainLayout>
    );
}
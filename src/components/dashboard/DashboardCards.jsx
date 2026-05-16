// src/components/dashboard/DashboardCards.jsx

import {
    PawPrint,
    CalendarDays,
    Bell,
    Wallet,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function DashboardCards({
    mascotas,
    citas,
    recordatorios,
    ventas,
}) {

    return (

        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
                mb-10
            "
        >

            <DashboardCard
                title="Mascotas"
                value={mascotas.length}
                icon={
                    <PawPrint size={28} />
                }
            />

            <DashboardCard
                title="Citas"
                value={citas.length}
                icon={
                    <CalendarDays size={28} />
                }
            />

            <DashboardCard
                title="Recordatorios"
                value={recordatorios.length}
                icon={
                    <Bell size={28} />
                }
            />

            <DashboardCard
                title="Compras"
                value={ventas.length}
                icon={
                    <Wallet size={28} />
                }
            />

        </div>
    );
}
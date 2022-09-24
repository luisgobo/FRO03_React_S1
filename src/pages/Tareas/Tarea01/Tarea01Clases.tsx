import Icon from "awesome-react-icons";
import React from "react";
import { DashboardLayout } from "../../../components/Layout";
import '../../../styles/tarea01.css'


export type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const Tarea01Clases = () => {
    return (
        <DashboardLayout>
            <h2>Pendiente</h2>
        </DashboardLayout>
    )
}

export default Tarea01Clases;
import React from "react";
import { DashboardLayout } from "../../../components/dashboard/Layout";
import { CardIfo } from "../../../components/general/CardInfo";
import { ITask } from "../../../models/ITask";
import { IUsuario } from "../../../models/IUsuario";
import '../../../styles/common.css'


export const Tarea01Funciones: React.FC = () => {

    const [listaTodos, setListaTodos] = React.useState<ITask[] | undefined>(undefined);
    const [listaUsuarios, setListaUsuarios] = React.useState<IUsuario[] | undefined>(undefined);

    async function getData() {

        try {

            const [respuestaTodos, respuestaUsuarios] = await Promise.all([
                await fetch("https://jsonplaceholder.typicode.com/todos"),
                await fetch("https://jsonplaceholder.typicode.com/users"),
            ]);

            const [datosTodos, datosUsuarios] = await Promise.all([
                respuestaTodos.json(),
                respuestaUsuarios.json()
            ]);

            setListaTodos(datosTodos);
            setListaUsuarios(datosUsuarios);

        } catch (error) {

        }
    }

    const onChange = (value: ITask, indice: number) => {
        if (listaTodos) {
            const backupList = [...listaTodos];
            const tarea = {
                ...backupList[indice],
                body: value,
            };
            backupList[indice] = tarea;

            setListaTodos(backupList);
        }
    };

    const getUsuarioPorId = (id: number) => {
        return listaUsuarios?.find((usuario) => usuario.id === id);
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <DashboardLayout>
            <h1 className="title">Lista de Datos con funciones</h1>
            <ul className="formato">                
                {listaTodos &&
                    listaTodos.map((task, index) => (
                        <CardIfo
                            key={task.id}
                            taskInfo={task}
                            userInfo={getUsuarioPorId(task.userId)}
                            onChange={(event: ITask) =>
                                onChange(event, index)
                            }
                        />
                    ))
                }
            </ul>
        </DashboardLayout>
    )
}
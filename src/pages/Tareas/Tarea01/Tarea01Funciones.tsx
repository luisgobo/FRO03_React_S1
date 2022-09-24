import Icon from "awesome-react-icons";
import React from "react";
import { DashboardLayout } from "../../../components/dashboard/Layout";
import '../../../styles/tarea01.css'


export type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const Tarea01Funciones: React.FC = () => {

    const [data, setData] = React.useState<Data[] | undefined>(undefined);
    async function getData() {
        const resultList: Array<Data> = [];

        const result = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                return response.json();
            })
            .then(res => res);

        result.forEach(function (item: Data) {
            const tempItem: Data = {
                userId: item.userId,
                id: item.id,
                title: item.title,
                completed: item.completed
            }
            resultList.push(tempItem);
        });
        setData(resultList);
    }

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <DashboardLayout>
            <h1 className="titulo">Lista de Datos con funciones</h1>
            <ul className="formato">
                {data?.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="card">
                                <div className="container">
                                    <div className="divWrapper">
                                        <div className="divLeft">
                                            <h4><b>ID: {item.id}</b></h4>
                                        </div>
                                        <div className="divCenter">
                                            <div className="divLeft">Completed:</div>
                                            <div className="divRight">
                                                {item.completed ? <Icon name="check" className="green-icon" /> : <Icon name="x" className="red-icon" />}
                                            </div>
                                        </div>
                                    </div>
                                    <p>Dexscription:  {item.title}</p>
                                </div>                                
                            </div>
                        </li>
                    )
                })}
            </ul>
        </DashboardLayout>
    )
}
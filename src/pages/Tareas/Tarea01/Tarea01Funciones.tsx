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
            <h1>Lista de Datos</h1>
            <ul>
                {data?.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="card">
                                <div className="container">
                                    <h4><b>ID: {item.id}</b></h4>
                                    <p>{item.title}</p>
                                    <div className="divWrapper">
                                        <div className="Left">Completed:</div>
                                        <div className="divRight">{item.completed ? <Icon name="check" /> : <Icon name="x" />}</div>
                                    </div>
                                    <p> </p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </DashboardLayout>
    )
}
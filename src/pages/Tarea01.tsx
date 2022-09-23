import React from "react";
import { DashboardLayout } from "../components/Layout";


export type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const Tarea01: React.FC = () => {

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
                        <li key={index}> {item.id} =&gt; {item.userId} =&gt; {item.title} =&gt; {item.completed ? "true" : "false"} </li>
                    )
                })}
            </ul>
        </DashboardLayout>
    )
}
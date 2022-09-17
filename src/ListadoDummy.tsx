import React from "react";


interface TareaPorHacer {
    titulo: string,
    descripcion?: string
}

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export const ListadoDummy: React.FC = () => {
    const [data, setData] = React.useState<Todo[] | undefined> (undefined);

    async function getTodos() {
        const resultList: Array<Todo> = [];

        const result = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                return response.json();
            })
            .then(res => res);

        result.forEach(function (item: Todo) {
            const tempItem: Todo = {
                userId: item.userId,
                id: item.id,
                title: item.title,
                completed: item.completed
            }
            resultList.push(tempItem);
        });
        //console.log(resultList);
        setData(resultList);
    }

    React.useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <h1>Lista de Datos</h1>
            <ul>
                {data?.map((item, index) => {
                    console.log(item);
                    return (
                        <li key={index}> {item.id} =&gt; {item.userId} =&gt; {item.title} =&gt; {item.completed? "true": "false"} </li>
                    )
                })}
            </ul>
        </>
    )
}
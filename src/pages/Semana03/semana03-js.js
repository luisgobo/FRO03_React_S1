import react from "react"

export const ListaPublicaciones = () => {
    async function getData() {
        try {
            const horaInicial = new Date();
            // const respuestaPublicaciones = await fetch(
            //   "https://jsonplaceholder.typicode.com/posts"
            // );
            // const respuestaUsuarios = await fetch(
            //   "https://jsonplaceholder.typicode.com/users"
            // );

            const [respuestaPublicaciones, respuestaUsuarios] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/users"),
            ]);

            const [datosPublicaciones, datosUsuarios] = await Promise.all([
                respuestaPublicaciones.json(),
                respuestaUsuarios.json(),
            ]);

            // const datosPublicaciones = await respuestaPublicaciones.json();
            // const datosUsuarios = await respuestaUsuarios.json();

            const horaFinal = new Date();
            const tiempo = horaFinal - horaInicial;
            console.log(`Tiempo de respuesta: ${tiempo} ms`);

            console.log(datosPublicaciones);
            console.log(datosUsuarios);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData();
    }, []);
    return <div>ListaPublicaciones</div>;

}
import React from "react";


interface TareaPorHacer{
    titulo: string,
    descripcion? : string
}

export const FuncionPrueba: React.FC = () => {
    const [nombre, setNombre] = React.useState<string | undefined>(undefined)
    const [apellido, setApellido] = React.useState<string>("");
    

    React.useEffect(()=>{
        setTimeout(() => {
            setNombre("Luis");
            setApellido("Gonzalez")
        }, 5000);
    });

    console.log("Estoy en el render F");

    return <div>Mi nombre es: {nombre} {apellido} ***</div>
}
import React from 'react';

import { DashboardLayout } from '../components/dashboard/Layout';

const HomePage = () => {
    return (
        <DashboardLayout>
            <h1 className='title'>Página de inicio</h1>            
            <h2 className='subtitle'>Catálogo de ejercicios</h2>        
            <p className='contenido'>Aquí se irán regitrando los ejercicios que se vayan realizando durante el desarrollo del curso de React, para ir a un ejercicio específico seleccione la opcion del menu  de la izquierda y vea los resultados</p>
        </DashboardLayout>
    )
}

export default HomePage;
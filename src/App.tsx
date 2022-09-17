import React from 'react';
import logo from './logo.svg';
import './App.css';
import { escapeLeadingUnderscores } from 'typescript';
import ClasePrueba from './ClasePrueba';
import { FuncionPrueba } from './FuncionPrueba';
import { ListadoDummy } from './ListadoDummy';

interface Egreso {
  descripcion: string;
  valor: number;
}


function App() {

  const listaEgresos: Egreso[] = [];

  listaEgresos.push({ descripcion: 'Supermercado', valor: 5000 })
  listaEgresos.push({ descripcion: 'Panaderia', valor: 2500 })
  listaEgresos.push({ descripcion: 'Compras en Linea', valor: 45000 })
  listaEgresos.push({ descripcion: 'Agua', valor: 3000 })
  listaEgresos.push({ descripcion: 'Electricidad', valor: 10000 })



  return (
    <>
      <div className="App">
        <h1>Lista de Gastos</h1>
        <ul>
          {listaEgresos.map((egreso, index) => {
            return (
              <li key={index}> {egreso.descripcion} =&gt; {egreso.valor} </li>
            )
          })}
        </ul>
      </div>

      <ClasePrueba />
      <FuncionPrueba/>
      <ListadoDummy/>
    </>
  );
}

export default App;

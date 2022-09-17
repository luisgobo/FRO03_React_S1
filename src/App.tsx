import React from 'react';
import logo from './logo.svg';
import './App.css';
import { escapeLeadingUnderscores } from 'typescript';

interface Egreso {
  descripcion: string;
  valor: number;
}


function App() {

  const listaEgresos : Egreso[] = [];

  listaEgresos.push({descripcion: 'Supermercado', valor: 5000})
  listaEgresos.push({descripcion: 'Panaderia', valor: 2500})
  listaEgresos.push({descripcion: 'Compras en Linea', valor: 45000})
  listaEgresos.push({descripcion: 'Agua', valor: 3000})
  listaEgresos.push({descripcion: 'Electricidad', valor: 10000})



  return (
    <div className="App">
      <h1>Lista de Gastos</h1>
        <ul>
          {listaEgresos.map((egreso) => {
          return (  
          <li> {egreso.descripcion} =&gt; {egreso.valor} </li>
          )
          })}          
        </ul>
    </div>
  );
}

export default App;

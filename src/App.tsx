import React from 'react';
import './App.css';
import { escapeLeadingUnderscores } from 'typescript';
import ClasePrueba from './pages/Semana02/ClasePrueba';
import { FuncionPrueba } from './pages/Semana02/FuncionPrueba';
import RouterLinks from './pages/RouterLinks';


interface Egreso {
  descripcion: string;
  valor: number;
}


function App() {





  return (    
      <RouterLinks />    
  );
}

export default App;

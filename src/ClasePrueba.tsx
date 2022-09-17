import { Console } from 'console';
import React, { Component } from 'react'

interface State{
  nombre: string,
  apellido : string
}
interface Props{}

export default class ClasePrueba extends Component<Props, State> {
  
  constructor(props: Props ) {
    super(props);
    console.log("Estoy en el constructor");
    this.state = {
      apellido : "",
      nombre : ""
    }
  }
  componentDidMount(): void {
      setTimeout(() => {
        this.setState({nombre: "Luis", apellido: "Gonzalez"})
      }, 5000);
      console.log("Estoy en el componentDidMount");
  }
  
  render() {
    console.log("Estoy en el render")
    return (
      <div>
        Mi nombre es: {this.state.nombre} {this.state.apellido}
      </div>
    )
  }
}

import Icon from 'awesome-react-icons';
import React, { Component } from 'react'
import { DashboardLayout } from '../../../components/dashboard/Layout';

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type DataArray= {
  dataList : Data[]
}

interface Props { }

export default class Tarea01Clases extends Component<Props, DataArray> {

  constructor(props: Props) {
    super(props);

    this.state = {
      dataList: []
    } 
  }

  componentDidMount(): void {

    const getData = async () => {
      const resultList: Array<Data> = [];

      const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          return response.json();
        })
        .then(res => res);

        result.slice(0,10).forEach(function (item: Data) {
        const tempItem: Data = {
          userId: item.userId,
          id: item.id,
          title: item.title,
          completed: item.completed
        }
        resultList.push(tempItem);
      });

      this.setState( {dataList :resultList});      

    }

    getData();    

  }

  render() {
    return (
      <DashboardLayout>
        <h1 className="title">Lista de Datos con Clases</h1>

        <ul className="formato">
          {this.state.dataList?.map((item: Data) => {
            return (
              <li key={item.id}>
                <div className="card">
                  <div className="container">
                    <div className="divWrapper">
                      <div className="divLeft">
                        <h4><b>ID: {item.id}</b></h4>
                      </div>
                      <div className="divCenter">
                        <div className="divLeft">Completed:</div>
                        <div className="divRight">
                          {item.completed ? <Icon name="check" className="green-icon" /> : <Icon name="x" className="red-icon" />}
                        </div>
                      </div>
                    </div>
                    <p>Dexscription:  {item.title}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </DashboardLayout>
    )
  }
}
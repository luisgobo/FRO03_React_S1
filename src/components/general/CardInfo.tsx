import Icon from 'awesome-react-icons';
import React from 'react'
import { ITask } from '../../models/ITask';
import { IUsuario } from '../../models/IUsuario';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';


export interface ItemTaskProps {
    taskInfo: ITask;
    userInfo?: IUsuario;
    onChange: any;
}

export const CardIfo: React.FC<ItemTaskProps> = ({
    taskInfo,
    userInfo,
    onChange,
}) => {
    
    const handleChange = (taskState: boolean) => {
        taskInfo.completed = !taskState;
        return onChange(taskInfo);
    }

    return (
        <li key={taskInfo.id}>
            <div className="card">
                <div className="container">
                    <div className="divWrapper">
                        <div className="divLeft">
                            <h4><b>Task ID: {taskInfo.id} </b> </h4>
                            <h4><b>Asigned to: {userInfo && `${userInfo.name}`}</b> (ID: {taskInfo.id}) </h4>
                            <h4>{userInfo && `${userInfo.email}`}</h4>
                        </div>
                        <div className="divRight">                        
                            <div className="divUp">
                                <div className="divBoxLeft">Completed:</div>
                                <div className="divBoxRight">
                                    <div>
                                        {taskInfo.completed ? <Icon name="check" className="green-icon" /> : <Icon name="x" className="red-icon" />}
                                    </div>
                                </div> 
                            </div>
                            <div className="divDown">                                
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={taskInfo.completed === true}
                                                onChange={() => handleChange(taskInfo.completed)}
                                            />
                                        }
                                        label="Change state"
                                        labelPlacement='start' />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <p> <b>Description: </b> {taskInfo.title}</p>
                </div>
            </div>
        </li>
    )
};
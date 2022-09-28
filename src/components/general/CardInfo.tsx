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

    console.log(userInfo);
    console.log();

    return (
        <li key={taskInfo.id}>
            <div className="card">
                <div className="container">
                    <div className="divWrapper">
                        <div className="divLeft">
                            <h4><b>ID: {taskInfo.id} - Asignee: {userInfo && `${userInfo.name}`}</b></h4>
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
                    <p>Description:  {taskInfo.title}</p>
                </div>
            </div>
        </li>
    )
};
import Icon from 'awesome-react-icons';
import React from 'react'
import { IAlbum } from '../../models/IAlbum';
import { IUsuario } from '../../models/IUsuario';


export interface AlbumCardProps {    
    index: number;
    albumInfo: IAlbum;
    userInfo: IUsuario | undefined;
    onChange: any;
}

export const AlbumCardInfo: React.FC<AlbumCardProps> = ({    
    index,
    albumInfo,
    userInfo,
    onChange,
}) => {

    function handleSelection(index: any) {
        onChange(index);
    }

    React.useEffect(() => {
        
    }, [])

    return (
        <li key={`${index}-${albumInfo?.id}`} onClick={() => handleSelection(albumInfo?.id)}>
            <div className="card">
                <div className="container">
                    <div className="divWrapper">
                        <div className="divLeft">
                            <h4> <b>{userInfo && `${userInfo.name}'s Album`}</b> </h4>
                        </div>
                        <div className="divRight">
                            <h4> <b>{albumInfo && `Album # ${albumInfo.id}`}</b> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
};
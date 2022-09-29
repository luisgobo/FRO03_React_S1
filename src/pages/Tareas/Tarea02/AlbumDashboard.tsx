import React from "react";
import { IAlbum } from "../../../models/IAlbum";
import { IPhoto } from "../../../models/IPhoto";
import '../../../styles/tarea01.css'


export interface AlbumDashboardProps {
    albumList: (IAlbum[] | undefined);
    albumPhotos: (IPhoto[] | undefined);
    onSelect: any;
}

export const AlbumDashboard: React.FC<AlbumDashboardProps> = ({
    albumList,
    albumPhotos,
    onSelect,  
}) => {

    return( 
        <>
            <h1 className="title">Photo Album</h1>
                <div className="container">
                    <div className="divWrapper">
                        <div className="divLeft">
                        <h1 className="title">Albums</h1>                            
                        </div>
                        <div className="divRight">       
                            <h1 className="title">Photos</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="title">Selected Photo</h1>
                    </div>
                </div>            
        </>
    );

}
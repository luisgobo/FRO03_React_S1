import React from "react";
import { DashboardLayout } from "../../../components/dashboard/Layout";
import { ErrorPage } from "../../../components/general/ErrorPage";
import { IAlbum } from "../../../models/IAlbum";
import { IPhoto } from "../../../models/IPhoto";
import { AlbumDashboard } from "./AlbumDashboard";


export const Tarea02: React.FC = () => {

    const [isError, setIsError] = React.useState<boolean>(false);
    const [albumList, setAlbumList] = React.useState<IAlbum[] | undefined>(undefined);
    const [photoList, setPhotoList] = React.useState<IPhoto[] | undefined>(undefined);
    const [albumPhotos, setAlbumPhotos] = React.useState<IPhoto[] | undefined>(undefined);
    


    const throwError = () => {        
        throw Error("I'm an error");
    };

    async function getData() {

        try {

            const [albumResponse, photosResponse] = await Promise.all([
                await fetch("https://jsonplaceholder.typicode.com/albums"),
                await fetch("https://jsonplaceholder.typicode.com/photos"),
            ]);

            const [albumData, photosData] = await Promise.all([
                albumResponse.json(),
                photosResponse.json()
            ]);

            setAlbumList(albumData);
            setPhotoList(photosData);

            //throwError();
        } catch (error) {
            setIsError(true);                        
        }
    }

    const onChange = (value: string) => {
        if (albumList && photoList) {
        const backupList = [...photoList];
        //     const tarea = {
        //         ...backupList[indice],
        //         body: value,
        //     };
        //     backupList[indice] = tarea;

             setAlbumPhotos(backupList);
        }
    };

    const getUsuarioPorId = (id: number) => {
        return photoList?.find((usuario) => usuario.id === id);
    };    

    React.useEffect(() => {
        getData();
    }, []);

    return (
        
        

        <>
            {isError? 
                <ErrorPage errorInfo={ { errorCode: 404 ,errorDescription: "Not found"} }/>
                : <DashboardLayout>
                    <AlbumDashboard 
                        albumList={albumList}
                        albumPhotos = {albumPhotos} 
                        onSelect={(event: string) => onChange(event)}
                    />                                        
                </DashboardLayout>
            }
        </>        
        
    )
}


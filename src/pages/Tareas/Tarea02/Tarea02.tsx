import React from "react";
import { DashboardLayout } from "../../../components/dashboard/Layout";
import { ErrorPage } from "../../../components/general/ErrorPage";
import { IAlbum } from "../../../models/IAlbum";
import { IPhoto } from "../../../models/IPhoto";
import { IUsuario } from "../../../models/IUsuario";
import { AlbumDashboard } from "./AlbumDashboard";

export const Tarea02: React.FC = () => {

    const [isError, setIsError] = React.useState<boolean>(false);
    const [albumList, setAlbumList] = React.useState<IAlbum[] | undefined>(undefined);
    const [photoList, setPhotoList] = React.useState<IPhoto[] | undefined>(undefined);    
    const [usrList, setUserList] = React.useState<IUsuario[] | undefined>(undefined);

    const throwError = () => {
        throw Error("I'm an error");
    };

    async function getData() {

        try {

            const [albumResponse, photosResponse, userResponse] = await Promise.all([
                await fetch("https://jsonplaceholder.typicode.com/albums"),
                await fetch("https://jsonplaceholder.typicode.com/photos"),
                await fetch("https://jsonplaceholder.typicode.com/users"),

            ]);

            const [albumData, photosData, userData] = await Promise.all([
                albumResponse.json(),
                photosResponse.json(),
                userResponse.json(),
            ]);

            setAlbumList(albumData);
            setPhotoList(photosData);
            setUserList(userData)

            //throwError();

        } catch (error) {
            setIsError(true);
        }
    }

    const onChange = (value: string) => {
        if (albumList && photoList) {
            const backupList = [...photoList];
            setPhotoList(backupList);
        }
    };

    const getImagesByAlbuId = (id: number) => {
        return photoList?.find((image) => image.id === id);
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (

        <>
            {isError ?
                <ErrorPage errorInfo={{ errorCode: 404, errorDescription: "Not found" }} />
                : <DashboardLayout>
                    <AlbumDashboard
                        albumList={albumList}
                        photoList={photoList}
                        userList = {usrList}
                        onSelect={(event: string) => onChange(event)}
                    />
                </DashboardLayout>
            }
        </>

    )
}


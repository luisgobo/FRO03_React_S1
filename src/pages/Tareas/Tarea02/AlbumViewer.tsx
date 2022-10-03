import React from 'react'
import { AlbumCardInfo } from '../../../components/general/AlbumCardInfo'
import { IAlbum } from '../../../models/IAlbum'
import { IUsuario } from '../../../models/IUsuario'

export interface AlbumViewerProps {
    albumList: IAlbum[] | undefined
    userList: IUsuario[] | undefined
    onSelected: any
}

export const AlbumViewer: React.FC<AlbumViewerProps> = (
    {
        albumList,
        userList,
        onSelected
    }) => {

    const [albumSelectedId, setAlbumSelectedId] = React.useState<number>(-1);

    const onChange = (albumId: number) => {
        onSelected(albumId)
        setAlbumSelectedId(albumId);
    };

    function getUserInfoByAlbum(userId: number): IUsuario | undefined {
        return userList?.find((user) => user.id === userId);
    }

    React.useEffect(() => {    
        
    }, [])    

    return (
        <>
            <ul>
                {albumList && albumList.map((album, index) => (
                    <AlbumCardInfo key={album.id}
                        albumSelected= {albumSelectedId === album.id ? true : false}
                        index = {index}                        
                        albumInfo={album}
                        userInfo={getUserInfoByAlbum(album.userId)}
                        onChange={onChange}
                    />
                ))}
            </ul>
        </>
    )
}
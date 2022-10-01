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

    const onChange = (albumId: number) => {
        onSelected(albumId)
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
                    <AlbumCardInfo
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
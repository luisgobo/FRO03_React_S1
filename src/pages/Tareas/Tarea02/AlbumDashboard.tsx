import React from "react";
import { IAlbum } from "../../../models/IAlbum";
import { IPhoto } from "../../../models/IPhoto";
import { ImageViewer } from "./ImageViewer";
import { Gallery, Image } from "react-grid-gallery";
import { AlbumViewer } from "./AlbumViewer";
import { IUsuario } from "../../../models/IUsuario";
import '../../../styles/common.css'
import '../../../styles/scroll.css';

export interface AlbumDashboardProps {
    albumList: (IAlbum[] | undefined);
    userList?: (IUsuario[] | undefined);
    photoList: (IPhoto[] | undefined);
}

export const AlbumDashboard: React.FC<AlbumDashboardProps> = ({
    albumList,
    userList,
    photoList
}) => {

    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [imageList, setImageList] = React.useState<Image[]>([]);

    function getImageUrl(newImageIndex: number): void {

        const backupList: Image[] = [...imageList];
        const currentActiveIndex = backupList.findIndex((element) => element.isSelected === true)

        const activeElement = {
            ...backupList[currentActiveIndex],
            isSelected: false,
        };

        const elementUpdated = {
            ...backupList[newImageIndex],
            isSelected: true,
        };

        backupList[currentActiveIndex] = activeElement;
        backupList[newImageIndex] = elementUpdated;

        setImageList(backupList);
        setSelectedImageUrl(elementUpdated.src)
    }

    const handleImageList = (albumId: number) => {

        const filteredPhotos: Image[] = []
        photoList?.filter((photo) => photo.albumId === albumId).map((image) => {
            const backupImage: Image = {
                src: image.url,
                height: 200,
                width: 200,
                isSelected: false
            }

            filteredPhotos.push(backupImage);
        });

        setImageList(filteredPhotos);
    };

    React.useEffect(() => {
    }, [])

    return (

        <>
            <h1 className="title">Photo Album</h1>
            <div className="container">
                <div className="divWrapper">
                    <div className="divLeft side-by-side-positioning">
                        <div className="div-side-by-side-title">
                            <h1 className="title ">Albums</h1>
                        </div>
                        <div className="div-side-by-side--vertical-overflow">
                            <AlbumViewer
                                albumList={albumList}
                                userList={userList}
                                onSelected={handleImageList}
                            />
                        </div>
                    </div>
                    <div className="divRight side-by-side-positioning">
                        <div className="div-side-by-side-title">
                            <h1 className="title">Photos</h1>
                        </div>
                        <div className="div-side-by-side--vertical-overflow">
                            <Gallery
                                images={imageList}
                                onClick={(imgIndex) => getImageUrl(imgIndex)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="title div-side-by-side-title">Preview</h1>
                    <ImageViewer url={selectedImageUrl} />
                </div>
            </div>
        </>
    );

}

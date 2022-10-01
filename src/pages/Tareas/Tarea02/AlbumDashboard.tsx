import React from "react";
import { IAlbum } from "../../../models/IAlbum";
import { IPhoto } from "../../../models/IPhoto";
import { ImageViewer } from "./ImageViewer";
import { Gallery, Image } from "react-grid-gallery";
import { AlbumViewer } from "./AlbumViewer";
import { IUsuario } from "../../../models/IUsuario";
import '../../../styles/tarea01.css'

export interface AlbumDashboardProps {
    albumList: (IAlbum[] | undefined);
    userList? : (IUsuario[] |undefined);
    photoList: (IPhoto[] | undefined);
    onSelect: any;
}

export const AlbumDashboard: React.FC<AlbumDashboardProps> = ({
    albumList,
    userList,    
    photoList,
    onSelect,
}) => {

    const [selectedImageUrl, setSelectedImageUrl] =  React.useState('');
    const [imageList, setImageList] =  React.useState<Image[]>([]);
    
    // const images= [
    //     {
    //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //         width: 320,
    //         height: 174,
    //         isSelected: false,
    //         caption: "After Rain (Jeshu John - designerspics.com)",
    //     },
    //     {
    //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //         width: 320,
    //         height: 212,
    //         tags: [
    //             { value: "Ocean", title: "Ocean" },
    //             { value: "People", title: "People" },
    //         ],
    //         alt: "Boats (Jeshu John - designerspics.com)",
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //         width: 320,
    //         height: 212,
    //     },
    // ];

    // function setImageInfo() {
    //     setImageList(images);
    // }

    function getImageUrl(newImageIndex: number): void {        
        
        const backupList: Image[] = [...imageList];                
        const currentActiveIndex = backupList.findIndex((element) => element.isSelected ===true)
        
        if(currentActiveIndex > 0){

            const activeElement = {
                ...backupList[currentActiveIndex],
                isSelected: false,
            };
            
            backupList[currentActiveIndex] = activeElement;
        }
            
        const elementUpdated = {
            ...backupList[newImageIndex],
            isSelected: true,
        };

        backupList[newImageIndex] = elementUpdated;

        setImageList(backupList);
        setSelectedImageUrl(elementUpdated.src)
    }

    const handleImageList = (albumId: number) => {

        const filteredPhotos: Image[] = []
        photoList?.filter((photo) => photo.albumId === albumId).map((image) =>{
            const backupImage: Image ={
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
        //setImageInfo();
    }, [])

    return (

        <>
            <h1 className="title">Photo Album</h1>
            <div className="container">
                <div className="divWrapper">
                    <div className="divLeft">
                        <h1 className="title">Albums</h1>
                        <AlbumViewer 
                            albumList={albumList} 
                            userList={userList}
                            onSelected = {handleImageList}
                        />
                    </div>
                    <div className="divRight">
                        <h1 className="title">Photos</h1>                        
                        <Gallery 
                            images={imageList}
                            onClick = {(imgIndex) => getImageUrl(imgIndex)}
                        />
                    </div>
                </div>
                <div>
                    <h1 className="title">Preview</h1>
                    <ImageViewer url={selectedImageUrl} />
                </div>
            </div>
        </>
    );

}

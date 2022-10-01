import React from 'react'
import notAvailable from '../../../img/Image_not_available.png'

export interface ImageViewerProps {
    url: string
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ url }) => {
    return (<>
        <div className='image-align-center'>
            <img
                src={url !== '' ? url : notAvailable}
                alt={url !== '' ? url : "Not available"}
            />
        </div>    
    </>);
}
import React  from "react";
import { useLoaderData } from 'react-router-dom';
import {Photo} from "./PhotoCarousel"
import PhotoCard from './PhotoCard';

const PhotoGrid: React.FC = () => {
    const { photos } = useLoaderData() as { photos: Photo[] };

    return <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 max-h-screen overflow-y-auto">
        {
          photos.map((photo)=>{
            return <PhotoCard
            key={photo.src}
            src={photo.src}
            data={photo.data}
          />
          })
        }     
  </div>
}

export default PhotoGrid
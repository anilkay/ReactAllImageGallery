import React from 'react';
import PhotoCard from './PhotoCard';
import { useLoaderData } from 'react-router-dom';
import { useDocumentTitle } from "@uidotdev/usehooks";


export interface Photo {
    src: string;
    data: string;
    className?:string
  }
  
 
  
  const PhotoCarousel: React.FC = () => {
    
    useDocumentTitle("Photo Carousel")

    const { photos } = useLoaderData() as { photos: Photo[] };


    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-h-screen overflow-y-auto">
        {photos.map(photo => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            data={photo.data}
          />
        ))}
      </div>
    );
  };

  export default PhotoCarousel
import React from 'react';
import PhotoCard from './PhotoCard';
import { useLoaderData } from 'react-router-dom';


export interface Photo {
    src: string;
    data: string;
  }
  
 
  
  const PhotoCarousel: React.FC = () => {

    const { photos } = useLoaderData() as { photos: Photo[] };


    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
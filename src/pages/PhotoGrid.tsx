import React  from "react";
import { useLoaderData } from 'react-router-dom';
import {Photo} from "./PhotoCarousel"
import PhotoCard from './PhotoCard';
import { useDocumentTitle } from "@uidotdev/usehooks";

const PhotoGrid: React.FC = () => {
  
    useDocumentTitle("Photo Grid")

    const { photos } = useLoaderData() as { photos: Photo[] };
    let i=0;
    return <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {
            
          photos.map((photo)=>{
            let className=""

            if(i==0){
                className="col-span-2 md:col-span-2 sm:col-span-1"
            }

            if(i==3){
                className="col-span-2 md:col-span-2 sm:col-span-1"
            }

        
            
            i++
            
            return <PhotoCard
            key={photo.src}
            src={photo.src}
            data={photo.data}
            className={"min-h-0"+className}
          />
          })
        }     
  </div>
}

export default PhotoGrid
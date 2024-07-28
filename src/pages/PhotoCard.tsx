import React, { useEffect, useState } from 'react';
import {Photo} from './PhotoCarousel'


interface PhotoData {
 prompt:string
}
  
const PhotoCard: React.FC<Photo> = ({ src, data }) => {
    const [promptData,setPromptData]=useState<PhotoData>({prompt:""})
    useEffect(()=>{
        fetch(data).then(async(res)=>{
            setPromptData(await res.json())
        })
    },[data])


    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={src} alt={promptData.prompt} className="w-full h-48 object-contain" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{promptData.prompt}</h2>
          <p className="text-gray-700">{promptData.prompt}</p>
        </div>
      </div>
    );
  };

  export default PhotoCard
import React from 'react';
import PhotoCard from './PhotoCard';
import { useLoaderData } from 'react-router-dom';
import {Photo} from "./PhotoCarousel"

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
const PhotoSplideSlider: React.FC = () => {
    const { photos } = useLoaderData() as { photos: Photo[] };
    return (
    <Splide className="w-full h-1/2 flex justify-center items-center" tag="section" 
    options={ { perPage:1,rewind: true } } aria-label="Photos">
      {
        photos.map(photo=>{
           return <SplideSlide>
                 <PhotoCard
            key={photo.src}
            src={photo.src}
            data={photo.data}
          />
            </SplideSlide>
        })
      }
    </Splide>
    )
}

export default PhotoSplideSlider
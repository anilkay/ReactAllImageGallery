export const photoLoader = async () => {
   
   const imported= await import('../assets/photosData.json')
   const photos = imported.photos
   console.log(photos)
   return { photos };
  };
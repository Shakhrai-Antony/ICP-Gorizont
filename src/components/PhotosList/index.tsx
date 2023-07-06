import React from 'react';

import { IAllPhotos } from '@/components/PhotosList/interface';
import { PhotoFromSlider, PhotosSlider } from '@/components/PhotosList/styles';

const PhotosList = ({ allPhotos, handleClick }: IAllPhotos) => {
  return (
    <PhotosSlider>
      {allPhotos.map(({ id, name, description, image, url }) => (
        <PhotoFromSlider
          key={id}
          src={image}
          alt={name}
          onClick={handleClick({ name, description, image, url })}
        />
      ))}
    </PhotosSlider>
  );
};

export default PhotosList;

import React from 'react';

import { IPhotoFrame } from '@/components/PhotoFrame/interface';
import {
  BigPhoto,
  BigPhotoWrapper,
  Comment,
  PhotoDescription,
  PhotoUrl,
} from '@/components/PhotoFrame/styles';

const PhotoFrame = ({ photo, animation }: IPhotoFrame) => {
  return (
    <>
      {photo && (
        <BigPhotoWrapper animation={animation}>
          <BigPhoto src={photo.image} alt={photo.name} />
          <PhotoDescription>{photo.name}</PhotoDescription>
          <PhotoDescription>{photo.description}</PhotoDescription>
          <PhotoUrl href={photo.url}>url: {photo.url}</PhotoUrl>
        </BigPhotoWrapper>
      )}
      {photo?.newComment &&
        photo.newComment.map(({ comment, id }) => (
          <Comment key={id}>{comment}</Comment>
        ))}
    </>
  );
};

export default PhotoFrame;

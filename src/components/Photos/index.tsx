import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from '@/components/Form';
import PhotoFrame from '@/components/PhotoFrame';
import { config, keys } from '@/components/Photos/config';
import { IPhoto, IPhotos } from '@/components/Photos/interface';
import { PhotosWrapper } from '@/components/Photos/styles';
import PhotosList from '@/components/PhotosList';

const Photos = () => {
  const [photos, searchPhotos] = useState('');
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState<IPhoto | null>(null);
  const [animation, setAnimation] = useState(false);
  const handleClick =
    ({ name, description, image, url }: IPhoto) =>
    async () => {
      const fade = (time: number) =>
        new Promise((resolve) => {
          setTimeout(resolve, time);
        });
      setAnimation(false);
      await fade(1000);
      setPhoto({ ...photo, name, description, image, url });
      setAnimation(true);
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchPhotos(e.target.value);
  };

  const handleFilter = (config: IPhotos[]) => {
    return config.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(photos)),
    );
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = photo?.newComment
      ? [...photo.newComment, { id: uuidv4(), comment }]
      : [{ id: uuidv4(), comment }];
    setPhoto({ ...photo, newComment });
    setComment('');
  };

  return (
    <PhotosWrapper>
      <PhotoFrame photo={photo} animation={animation} />
      <Form
        onSubmit={onSubmit}
        handleChange={handleChange}
        handleChangeComment={handleChangeComment}
        photos={photos}
        comment={comment}
      />
      <PhotosList allPhotos={handleFilter(config)} handleClick={handleClick} />
    </PhotosWrapper>
  );
};

export default Photos;

import { MouseEventHandler } from 'react';

import { IPhoto, IPhotos } from '@/components/Photos/interface';

export interface IAllPhotos {
  allPhotos: IPhotos[];
  handleClick: ({
    name,
    description,
    image,
    url,
  }: IPhoto) => MouseEventHandler<HTMLDivElement>;
}

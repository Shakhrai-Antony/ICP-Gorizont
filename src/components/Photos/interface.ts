export interface IPhotos {
  name: string;
  url: string;
  description: string;
  image: string;
  id?: number;
  newComment?: { id: string; comment: string }[];
}

export type IPhoto = IPhotos;

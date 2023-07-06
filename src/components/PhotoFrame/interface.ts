export interface IPhotoFrame {
  photo: {
    name: string;
    url: string;
    description: string;
    image: string;
    id?: number;
    newComment?: { id: string; comment: string }[];
  };
  animation: boolean;
}

export interface IBigPhotoWrapper {
  animation: boolean;
}

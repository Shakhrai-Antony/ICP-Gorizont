import React from 'react';

export interface IForm {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  comment: string;
  handleChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  photos: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import React from 'react';

import { IForm } from '@/components/Form/interface';
import {
  AddComment,
  CommentButton,
  FormWrapper,
  SearchPhoto,
} from '@/components/Form/styles';

const Form = ({
  onSubmit,
  comment,
  handleChangeComment,
  photos,
  handleChange,
}: IForm) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <AddComment
        type="text"
        placeholder="type a comment..."
        value={comment}
        onChange={handleChangeComment}
      />
      <CommentButton type="submit">add a comment</CommentButton>
      <SearchPhoto
        type="text"
        placeholder="find a photo..."
        value={photos}
        onChange={handleChange}
      />
    </FormWrapper>
  );
};

export default Form;

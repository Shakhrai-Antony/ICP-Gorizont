import styled from 'styled-components';

export const SearchPhoto = styled.input`
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #f3d1bf;
  border-radius: 6px;
  box-sizing: border-box;
  color: #391400;
  font-size: 16px;
  height: 50px;
  line-height: 32px;
  opacity: 64%;
  outline-color: #ef6d58;
  padding: 9px 0 7px 16px;
  width: 370px;
  ::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddComment = styled(SearchPhoto)``;

export const CommentButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 15px;
    background-color:  #ef6d58
    color: #ffffff;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`;

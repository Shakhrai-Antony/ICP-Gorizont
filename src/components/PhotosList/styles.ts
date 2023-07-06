import styled from 'styled-components';

export const PhotosSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const PhotoFromSlider = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    transform: scale(1.1);
  }
`;

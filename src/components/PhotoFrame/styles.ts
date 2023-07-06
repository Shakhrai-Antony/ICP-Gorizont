import styled from 'styled-components';

import { IBigPhotoWrapper } from '@/components/PhotoFrame/interface';

export const BigPhotoWrapper = styled.div<IBigPhotoWrapper>`
  opacity: ${({ animation }) => (animation ? '1' : '0')};
  transition-duration: 0.8s;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PhotoDescription = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  margin-top: 20px;
`;

export const PhotoUrl = styled.a`
  text-decoration: none;
  color: #ffffff;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  white-space: nowrap;
`;

export const Comment = styled(PhotoDescription)``;

export const BigPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
`;

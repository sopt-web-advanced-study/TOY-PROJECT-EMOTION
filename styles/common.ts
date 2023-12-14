import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Title = styled.p`
  ${({ theme }) => theme.font.title01};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.font.subTitle01};
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainButtonContainer = styled.button`
  ${flexCenter}

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.sub02};
  border: 1px solid ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.subTitle02};

  border-radius: 15px;
  box-shadow: 0 0.4rem 0.4rem 0 rgb(0, 0, 0, 0.6);
`;

export const St = {
  Title: Title,
  Subtitle: Subtitle,
  MainButtonContainer: MainButtonContainer,
};

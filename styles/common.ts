import styled from '@emotion/styled';

const Title = styled.p`
  ${({ theme }) => theme.font.title01};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.font.subTitle01};
`;

export const St = {
  Title: Title,
  Subtitle: Subtitle,
};

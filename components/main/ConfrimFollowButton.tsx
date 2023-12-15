import styled from '@emotion/styled';
import { flexCenter } from '../../styles/common';

export default function ConfrimFollowButton() {
  return <Button>나의 맞팔 확인하러 가기</Button>;
}

const Button = styled.button`
  ${flexCenter}

  width: 29.6rem;
  height: 4.5rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.sub01};
  border: 2px solid ${({ theme }) => theme.color.grey02};
  ${({ theme }) => theme.font.title01};

  border-radius: 5px;
`;

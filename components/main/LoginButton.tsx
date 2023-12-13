import styled from '@emotion/styled';
import { St } from '../../styles/common';

export default function LoginButton() {
  return (
    <>
      <Wrapper>
        <St.Title>OR</St.Title>
        <St.Subtitle>깃허브 로그인으로 간단하게 확인하기 ⬇️️</St.Subtitle>
      </Wrapper>
      <ButtonContainer>깃허브 로그인</ButtonContainer>
    </>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;

  width: 19.8rem;
  height: 4.8rem;
`;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 14.1rem;
  height: 3rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.sub02};
  border: 1px solid ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.subTitle02};

  border-radius: 15px;
`;

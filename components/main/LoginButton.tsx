import styled from '@emotion/styled';
import { St, flexCenter } from '../../styles/common';
import Image from 'next/image';

export default function LoginButton() {
  return (
    <>
      <Wrapper>
        <St.Title>OR</St.Title>
        <St.Subtitle>깃허브 로그인으로 간단하게 확인하기 ⬇️️</St.Subtitle>
      </Wrapper>
      <ButtonContainer>
        <GithubImg src="/github_emoji.svg" alt="github이모지" width={20} height={20} />
        깃허브 로그인
      </ButtonContainer>
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

const ButtonContainer = styled(St.MainButtonContainer)`
  width: 14.1rem;
  height: 3rem;
`;

const GithubImg = styled(Image)`
  ${flexCenter}

  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8rem;
`;

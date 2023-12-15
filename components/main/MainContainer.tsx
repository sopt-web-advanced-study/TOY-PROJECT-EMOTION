'use client';
import styled from '@emotion/styled';
import TokenMakeButton from './TokenMakeButton';
import TokenInput from './TokenInput';
import ConfrimFollowButton from './ConfrimFollowButton';
import LoginButton from './LoginButton';
import UserCheckText from './UserCheckText';
import { flexCenter } from '../../styles/common';

export default function MainContainer() {
  return (
    <MainContainerStyle>
      <TokenMakeButton />
      <UserCheckText />
      <TokenInput />
      <ConfrimFollowButton />
      <LoginButton />
    </MainContainerStyle>
  );
}

const MainContainerStyle = styled.section`
  ${flexCenter}

  flex-direction: column;
  gap: 2.4rem;

  width: 34rem;
  height: 45rem;

  background-color: ${({ theme }) => theme.color.main01};
  border-radius: 10px;
`;
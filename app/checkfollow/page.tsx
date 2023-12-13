'use client';
import styled from '@emotion/styled';
import FollowOrNotBtn from '../../components/checkfollow/FollowOrNotBtn';
import Profile from '../../components/checkfollow/profile';

export default function CheckFollow() {
  return (
    <CheckFollowWrapper>
      <Profile />
      <FollowOrNotBtn />
    </CheckFollowWrapper>
  );
}

const CheckFollowWrapper = styled.article`
  width: 100%;
  padding: 3.7rem 4.4rem;
`;

// color: ${({ theme }) => theme.color.red};

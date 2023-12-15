'use client';
import styled from '@emotion/styled';
import FollowList from '../../components/checkfollow/FollowList';
import FollowOrNotBtn from '../../components/checkfollow/FollowOrNotBtn';
import Profile from '../../components/checkfollow/Profile';

export default function CheckFollow() {
  return (
    <CheckFollowWrapper>
      <Profile />
      <FollowOrNotBtn />
      <FollowList />
      <FollowBtn>맞팔하기</FollowBtn>
    </CheckFollowWrapper>
  );
}

const CheckFollowWrapper = styled.article`
  width: 100%;
  padding: 3.7rem 4.4rem;
`;

/** follow button import 후 삭제 예정 */
const FollowBtn = styled.button`
  width: 100%;
  height: 4.5rem;
  margin-top: 3.4rem;

  background: var(--sub01, #b6bbc4);
  border: 2px solid var(--grey02, #82868d);
  border-radius: 0.5rem;
`;

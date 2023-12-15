'use client';

import styled from '@emotion/styled';

interface userInfoTypes {
  id: number;
  userName: string;
  imageUrl: string;
}

export default function ListElement(props: userInfoTypes) {
  const { id, userName, imageUrl } = props;
  return (
    <ListElementWrapper>
      {/* <Image src={imageUrl} alt="팔로우리스트-프로필이미지" width={40} height={40} style={{ borderRadius: '50%' }} /> */}
      <ProfileImage />
      <UserName>{userName}</UserName>
    </ListElementWrapper>
  );
}

const ListElementWrapper = styled.li`
  display: flex;
  gap: 2.7rem;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 4.4rem;
`;

/** API image url 받아온 뒤 삭제 필요 */
const ProfileImage = styled.div`
  flex-shrink: 0;

  width: 4rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.color.grey01};
  border-radius: 50%;
`;

const UserName = styled.span`
  ${({ theme }) => theme.font.title01};
`;

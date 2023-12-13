'use client';
import styled from '@emotion/styled';
import ListElement from './ListElement';

interface userInfoTypes {
  id: number;
  userName: string;
  imageUrl: string;
}

/** dummy data */
const USER_INFO: userInfoTypes[] = [
  { id: 1, userName: 'aaaaaa', imageUrl: '' },
  { id: 2, userName: 'bbbbbb', imageUrl: '' },
  { id: 3, userName: 'cccccc', imageUrl: '' },
  { id: 4, userName: 'dddddd', imageUrl: '' },
  { id: 5, userName: 'eeeeee', imageUrl: '' },
  { id: 6, userName: 'ffffff', imageUrl: '' },
  { id: 7, userName: 'gggggg', imageUrl: '' },
  { id: 8, userName: 'hhhhhhh', imageUrl: '' },
  { id: 9, userName: 'iiiiiii', imageUrl: '' },
  { id: 10, userName: 'jjjjjj', imageUrl: '' },
  { id: 11, userName: 'kkkkkk', imageUrl: '' },
];

export default function FollowList() {
  return (
    <FollowListWrapper>
      <FilterBtnWrapper>
        <SelectBtn>모두 선택</SelectBtn>
        <SelectBtn>모두 해지</SelectBtn>
      </FilterBtnWrapper>
      <ListWrapper>
        {USER_INFO.map((userInfo: userInfoTypes) => {
          const { id, userName, imageUrl } = userInfo;
          return <ListElement key={id} id={id} userName={userName} imageUrl={imageUrl} />;
        })}
      </ListWrapper>
    </FollowListWrapper>
  );
}

const FollowListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 48rem;

  background-color: ${({ theme }) => theme.color.main01};
  border: 3px solid ${({ theme }) => theme.color.black};
  border-radius: 1rem;
`;

const FilterBtnWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: flex-end;
  padding: 2.5rem 1.5rem;
`;

/** button component import 후 삭제 예정 */
const SelectBtn = styled.button`
  flex-shrink: 0;

  width: 6rem;
  height: 2.5rem;

  ${({ theme }) => theme.font.subTitle02};

  background: var(--white, #fff);
  border: 1px solid var(--sub02, #31304d);
  border-radius: 2rem;
`;

const ListWrapper = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 35rem;
  padding: 0.5rem 0;
`;

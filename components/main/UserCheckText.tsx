import { St } from '../../styles/common';
import styled from '@emotion/styled';

export default function UserCheckText() {
  return (
    <>
      <Wrapper>
        <St.Title>토큰 발급시 권한 user를 체크해주세요!</St.Title>
        <St.Subtitle>Update ALL user data</St.Subtitle>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  width: 29.6rem;
  height: 3.9rem;
`;

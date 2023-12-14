import styled from '@emotion/styled';
import { St } from '../../styles/common';

//Github token 만들러가기
export default function TokenMakeButton() {
  return (
    <Wrapper>
      <ButtonContainer>Github Token 만들러 가기</ButtonContainer>
    </Wrapper>
  );
}

const ButtonContainer = styled(St.MainButtonContainer)`
  width: 14.1rem;
  height: 2.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 29.6rem;
`;

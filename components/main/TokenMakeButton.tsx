import styled from '@emotion/styled';

//Github token 만들러가기
export default function TokenMakeButton() {
  return (
    <>
      <ButtonContainer>Github Token 만들러 가기</ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 14.1rem;
  height: 2.5rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.sub02};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 15px;
  box-shadow: 0 4px 4px ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.font.subTitle02};
`;

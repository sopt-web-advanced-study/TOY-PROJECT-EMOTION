import styled from '@emotion/styled';

export default function LoginButton() {
  return (
    <>
      <ButtonContainer>깃허브 로그인</ButtonContainer>
    </>
  );
}

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

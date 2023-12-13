import styled from '@emotion/styled';

export default function TokenInput() {
  return (
    <>
      <InputToken placeholder="Github Token을 입력해주세요" type="text" />
    </>
  );
}

const InputToken = styled.input`
  display: flex;
  align-items: center;

  width: 29.6rem;
  height: 4.5rem;

  border: 1px solid ${({ theme }) => theme.color.grey01};
  border-radius: 5px;
`;

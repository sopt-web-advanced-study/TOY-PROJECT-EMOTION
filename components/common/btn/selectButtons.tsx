import styled from '@emotion/styled';

interface InSelectButtonpropsType {
  children: React.ReactNode;
}

export default function SelectButtons({ children }: InSelectButtonpropsType) {
  return <Select>{children}</Select>;
}

const Select = styled.button<InSelectButtonpropsType>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.7rem 1.1rem;

  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid var(--black, ${({ theme }) => theme.color.black});
  border-radius: 15px;

  ${({ theme }) => theme.font.subTitle02};
`;

import styled from '@emotion/styled';

interface InCategoryButtonpropsType {
  children: React.ReactNode;
}

export default function CategoryButtons({ children }: InCategoryButtonpropsType) {
  return <Category>{children}</Category>;
}

const Category = styled.button<InCategoryButtonpropsType>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  padding: 0.9rem 1.6rem;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  ${({ theme }) => theme.font.subTitle02};
`;

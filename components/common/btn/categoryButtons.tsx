import styled from '@emotion/styled';

interface CategoryBtnProps {
  children: React.ReactNode;
}

const Category = styled.button<CategoryBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  padding: 0.9rem 1.6rem;

  font-size: 1rem;

  background-color: white;
  border-radius: 1rem;
`;

const CategoryBtn = ({ children }: CategoryBtnProps) => {
  return <Category>{children}</Category>;
};

export default CategoryBtn;

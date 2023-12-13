import styled from '@emotion/styled';

interface SelectBtnProps {
  children: React.ReactNode;
}

const Select = styled.button<SelectBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.7rem 1.1rem;

  font-size: 1rem;

  background-color: #fff;
  border: 1px solid var(--black, #000);
  border-radius: 1.5rem;
`;

const SelectBtn = ({ children }: SelectBtnProps) => {
  return <Select>{children}</Select>;
};

export default SelectBtn;

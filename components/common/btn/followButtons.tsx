import styled from '@emotion/styled';
interface InFollowButtonpropsTypes {
  backgroundColor: string;
  children: React.ReactNode;
}

export default function FollowButtons({ children, backgroundColor }: InFollowButtonpropsTypes) {
  return <Follow backgroundColor={backgroundColor}>{children}</Follow>;
}

const Follow = styled.button<InFollowButtonpropsTypes>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.7rem 0.9rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${props => props.backgroundColor};
  border: 1px solid var(--black, ${({ theme }) => theme.color.black});
  border-radius: 15px;

  ${({ theme }) => theme.font.subTitle02};

  box-shadow: 0rem 0.4rem rgba(0, 0, 0, 0.25);
`;

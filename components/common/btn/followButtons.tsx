import styled from '@emotion/styled';
interface InFollowButtonpropsTypes {
  isFollow: boolean;
  children: React.ReactNode;
}

export default function FollowButtons({ children, isFollow }: InFollowButtonpropsTypes) {
  return <Follow isFollow={isFollow}>{children}</Follow>;
}

const Follow = styled.button<InFollowButtonpropsTypes>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.7rem 0.9rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ isFollow, theme }) => (isFollow ? theme.color.red : theme.color.green)};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 15px;

  ${({ theme }) => theme.font.subTitle02};

  box-shadow: 0rem 0.4rem rgba(0, 0, 0, 0.25);
`;

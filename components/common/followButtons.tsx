import styled from '@emotion/styled';

interface FollowBtnProps {
  bgColor: string;
  children: React.ReactNode;
}

const Follow = styled.button<FollowBtnProps>`
  padding: 0.7rem 0.9rem;

  color: white;

  background-color: ${props => props.bgColor};
  border: 1px solid var(--black, #000);
  border-radius: 1.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const FollowBtn = ({ children, bgColor }: FollowBtnProps) => {
  return <Follow bgColor={bgColor}>{children}</Follow>;
};

export default FollowBtn;

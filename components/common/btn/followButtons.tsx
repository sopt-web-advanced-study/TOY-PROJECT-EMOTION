import styled from '@emotion/styled';

interface FollowBtnProps {
  bgColor: string;
  children: React.ReactNode;
}

const Follow = styled.button<FollowBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.7rem 0.9rem;

  font-family: 'SF_HailSnow';
  font-size: 1rem;
  color: white;

  background-color: ${props => props.bgColor};
  border: 1px solid var(--black, #000);
  border-radius: 1.5rem;
  box-shadow: 0rem 0.4rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const FollowBtn = ({ children, bgColor }: FollowBtnProps) => {
  return <Follow bgColor={bgColor}>{children}</Follow>;
};

export default FollowBtn;

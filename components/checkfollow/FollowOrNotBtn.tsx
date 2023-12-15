'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
export default function FollowOrNotBtn() {
  return (
    <section css={FollowOrNotBtnWrapper}>
      <FollowBtn>맞팔한 사람</FollowBtn>
      <FollowBtn>맞팔 아닌 사람</FollowBtn>
    </section>
  );
}
const FollowOrNotBtnWrapper = css`
  display: flex;
  gap: 5rem;
  justify-content: center;
  padding: 1.5rem 6.5rem;
`;

/** 나중에 버튼 컴포넌트 import해 적용할 것 */
const FollowBtn = styled.button`
  flex-shrink: 0;

  width: 8rem;
  height: 3rem;

  background: var(--white, #fff);
  border-radius: 1rem;

  ${({ theme }) => theme.font.subTitle02};
`;

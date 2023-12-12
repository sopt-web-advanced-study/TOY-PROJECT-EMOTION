'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function CheckFollow() {
  return (
    <CheckFollowWrapper>
      <Image
        src="/background.png"
        alt="배경이미지"
        objectFit="cover"
        objectPosition="center"
        width={390}
        height={844}
      />
    </CheckFollowWrapper>
  );
}

const CheckFollowWrapper = styled.section`
  max-width: 39rem;
  max-height: 84.4rem;
`;

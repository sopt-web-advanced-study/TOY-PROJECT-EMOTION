'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function CheckFollow() {
  return (
    <CheckFollowWrapper>
      <Image
        src="/background.png"
        alt="배경이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </CheckFollowWrapper>
  );
}

const CheckFollowWrapper = styled.section`
  width: 39rem;
  height: 84.4rem;
`;

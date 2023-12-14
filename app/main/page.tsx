'use client';

import styled from '@emotion/styled';
import MainContainer from '../../components/main/MainContainer';
import Image from 'next/image';
import { flexCenter } from '../../styles/common';

export default function main() {
  return (
    <Wrapper>
      <SantaHatImg src="/santahat.png" alt="산타모자" width={140} height={186} />
      <MainContainer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${flexCenter}

  flex-direction: column;
  width: 100%;
  height: 844px;
`;

const SantaHatImg = styled(Image)`
  ${flexCenter}

  position: absolute;
  z-index: 1;
  top: 10rem;
  left: 10rem;
`;

'use client';

import styled from '@emotion/styled';
import MainContainer from '../../components/main/MainContainer';
import { flexCenter } from '../../styles/common';

export default function main() {
  return (
    <Wrapper>
      <MainContainer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${flexCenter}

  width:39rem;
  height: 84rem;
`;

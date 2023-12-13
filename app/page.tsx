'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import CategoryBtn from '../components/common/btn/categoryButtons';
import FollowBtn from '../components/common/btn/followButtons';
import SelectBtn from '../components/common/btn/selectButtons';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

interface ButtonProps {
  onClick: () => void;
}

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />

          <FollowBtn bgColor="#2B8D6A">팔로워 10</FollowBtn>
          <FollowBtn bgColor="#E66375">팔로잉 10</FollowBtn>
          <CategoryBtn>맞팔한 사람</CategoryBtn>
          <SelectBtn>모두 선택</SelectBtn>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

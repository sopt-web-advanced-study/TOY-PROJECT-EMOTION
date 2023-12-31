import { Theme } from '@emotion/react';

const color = {
  main01: '#FCF9F2',
  sub01: '#b6bbc4',
  sub02: '#31304D',
  red: '#E66375',
  green: '#2B8D6A',
  grey01: '#CAC5CA',
  grey02: '#82868D',
  black: '#000000',
  white: '#ffffff',
};

function FONT(size: number) {
  return `
    font-family: 'SF_HailSnow';
    font-size: ${size}rem;
    letter-spacing: normal;
    `;
}

const font = {
  title01: FONT(1.5),
  subTitle01: FONT(1.2),
  subTitle02: FONT(1.0),
};

const theme: Theme = {
  color,
  font,
};

export default theme;

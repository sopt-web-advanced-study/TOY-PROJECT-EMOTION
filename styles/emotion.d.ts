import '@emotion/react';
import { theme } from './theme';

type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType<string, any> {
    color: {
      main01: string;
      sub01: string;
      sub02: string;
      red: string;
      green: string;
      grey01: string;
      grey02: string;
      black: string;
      white: string;
    };

    font: {
      title01: string;
      subTitle01: string;
      subTitle02: string;
    };
  }
}

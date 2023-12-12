import { css } from '@emotion/react';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;

    font-size: 62.5%;
    vertical-align: baseline;

    border: 0;
  }

  body {
    background: url('/backgroundImg.png') no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

export const GlobalStyle = css`
  ${reset}
  * {
    /* 글자 선택 방지 */
    user-select: none;
    box-sizing: border-box;
    /* 버튼 음영 제거 */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    /* 링크 터치 금지 */
    -webkit-touch-callout: none;
  }

  /**사파리 웹 뷰 브라우저 상속 스타일 제거 */
  input,
  textarea,
  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
`;

export default GlobalStyle;

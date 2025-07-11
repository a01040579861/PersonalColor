import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
    font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
    /* background: #000; */
    color: #fff;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  body {
    min-height: 100vh;
    background: linear-gradient(120deg, #f7f8fa 0%, #e3e6f3 100%);
    font-family: "Pretendard", "Noto Sans KR", Arial, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #e3e6f3;
  }
  ::-webkit-scrollbar-thumb {
    background: #c1c7d6;
    border-radius: 4px;
  }
`;

export default GlobalStyle;

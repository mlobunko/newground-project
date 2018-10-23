import styled, { injectGlobal } from "styled-components";

import fontRobotoMedium from "../fonts/Roboto-Medium.ttf";
import fontRobotoRegular from "../fonts/Roboto-Regular.ttf";

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
`;

export const StyledMain = styled.div`
  ${"" /* display: flex;
  flex-direction: column; */} font-family: Roboto;
  font-weight: 400;
  min-height: 100vh;

  @font-face {
    font-family: Roboto;
    src: url(${fontRobotoRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: Roboto;
    src: url(${fontRobotoMedium});
    font-weight: 500;
  }
`;
StyledMain.displayName = "StyledMain";

export const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
StyledHeader.displayName = "StyledHeader";

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1366px;
  margin: 0 auto;
`;
StyledContent.displayName = "StyledContent";

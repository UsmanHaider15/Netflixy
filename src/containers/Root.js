import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../store";
import DevTools from "./DevTools";
import StyledContainer from "../components/styledContainer";
import GlobalStyles from "../GlobalStyles";
import theme from "../constants/theme";

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledContainer>
          <DevTools />
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
};
export default Root;

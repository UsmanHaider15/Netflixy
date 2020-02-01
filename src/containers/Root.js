import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import DevTools from "./DevTools";
import StyledContainer from "../components/styledContainer";
import GlobalStyles from "../GlobalStyles";

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <StyledContainer>
        <DevTools />
      </StyledContainer>
    </Provider>
  );
};
export default Root;

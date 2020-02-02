import React from "react";
import { Route } from "react-router-dom";
import StyledMovieContainer from "./StyledMovieContainer";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <React.Fragment>
      <StyledMovieContainer>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies/:id" component={MovieDetails} />
      </StyledMovieContainer>
    </React.Fragment>
  );
};

export default App;

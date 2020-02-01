import styled from "styled-components";

const StyledMovieContainer = styled.section`
  background: ${props => props.theme.secondaryBd};
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 390px;
    border-radius: 15px;
  }
`;

export default StyledMovieContainer;

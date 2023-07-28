import styled, { createGlobalStyle } from "styled-components";
import Calculator from "./calculator";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #0f1626;
    color: #ffffff;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Calculator />
      </AppContainer>
    </>
  );
};

export default App;

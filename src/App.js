import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

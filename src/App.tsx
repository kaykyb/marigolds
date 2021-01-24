import React from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import ThemeProvider from "./components/theme/ThemeProvider";
import { LIGHT_THEME } from "./core/theming/light";

function App() {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <div className="App">
        <Box
          border="thicc"
          fontWeight="bold"
          fontFamily="default"
          p={2}
          m={2}
          fontSize={3}
        >
          abcd
        </Box>
        <Button m={2} size="small">
          Continuar
        </Button>
        <Button m={2} size="default">
          Continuar
        </Button>
        <Button m={2} size="large">
          Continuar
        </Button>
        <Button m={2} size="large" disabled>
          Continuar
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

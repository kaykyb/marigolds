import React from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
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
          display="flex"
          flexDirection="row"
        >
          <Box flex="1">
            <TextBox placeholder="Senha" size="large" />
          </Box>
          <Button variant="primary" marginLeft={2}>
            Continuar
          </Button>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

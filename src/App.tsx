import { ChakraProvider, useColorMode } from "@chakra-ui/react";
// @ts-ignore
import { PioneerProvider } from "@pioneer-sdk/pioneer-react";
import type React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "~/lib/layout";
import Routings from "~/lib/router/Routings";
import { theme } from "~/lib/styles/theme";

const ForceDarkMode = ({ children }: { children: React.ReactNode }) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, [setColorMode]);

  return children;
};

const App = () => (
  <PioneerProvider>
    <ChakraProvider theme={theme}>
      <ForceDarkMode>
        <Router>
          <Layout>
            <Routings />
          </Layout>
        </Router>
      </ForceDarkMode>
    </ChakraProvider>
  </PioneerProvider>
);

export default App;

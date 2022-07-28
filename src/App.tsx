import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CoffeesContextProvider>
          <CheckoutContextProvider>
            <GlobalStyle />
            <Router />
          </CheckoutContextProvider>
        </CoffeesContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

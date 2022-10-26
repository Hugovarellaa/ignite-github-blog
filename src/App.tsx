import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
// import { defaultTheme } from "./styles/theme/defaultTheme";

export function App() {
  return (
    // <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // </ThemeProvider>
  )
}
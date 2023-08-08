import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { ThemeProvider } from "@emotion/react";
import globalTheme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

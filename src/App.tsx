import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { ThemeProvider } from "@emotion/react";
import globalTheme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalDialog } from "./components/GlobalModal";
import { useRef } from "react";
import { AppContext } from "./contexts/appContext";
import { IContextProps, IGlobalModal } from "./interfaces";

const queryClient = new QueryClient();

function App() {
  const globalModal = useRef<IGlobalModal>();
  const contextValue: IContextProps = { globalModal };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={contextValue}>
          <ThemeProvider theme={globalTheme}>
            <RouterProvider router={router} />
            <GlobalDialog ref={globalModal} />
          </ThemeProvider>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

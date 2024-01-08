import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
// import LoginAcc from "./Components/LoginAcc";
// import ConnectingPage from "./Components/ConnectingPage";
import SetupShopStepper from "./Components/SetupShopStepper";
// import ChgAccInfo from "./Components/ChgAccInfo";
// import FBlogin from "./Components/Fblogin";
// import CompleteSetup from "./Components/CompleteSetup";
import StepContextProvider from "./StepContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d3f3f",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StepContextProvider>
          {/* <LoginAcc /> */}
          {/* <ChgAccInfo /> */}
          {/* <FBlogin /> */}
          {/* <ConnectingPage /> */}
          <SetupShopStepper />
          {/* <CompleteSetup /> */}
        </StepContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;

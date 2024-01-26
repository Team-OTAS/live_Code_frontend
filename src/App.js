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
import Dashboard from "./View/Dashboard";
import Navbar from "./Components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d3f3f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    info: {
      main: "#73ff1d",
    },
    plan: {
      main: "#370FC8",
      contrastText: "#fff",
    },
    vaild: {
      main: "#354E8E",
      contrastText: "fff",
    },
    danger: {
      main: "#E81609",
      contrastText: "fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <StepContextProvider>
          {/* <LoginAcc /> */}
          {/* <ChgAccInfo /> */}
          {/* <FBlogin /> */}
          {/* <ConnectingPage /> */}
          {/* <SetupShopStepper /> */}
          {/* <CompleteSetup /> */}
        </StepContextProvider>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

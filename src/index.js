import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Material UI
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// Styled Components
import { ThemeProvider } from "styled-components";
// Theme
import theme from "./styles/theme";

ReactDOM.render(
  <Provider store={store()}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

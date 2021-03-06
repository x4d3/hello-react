// @ts-nocheck

import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Link, LinkProps } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { hydrate, render } from "react-dom";

function AppWithContext() {
  const LinkBehavior = React.forwardRef<
    any,
    Omit<LinkProps, "to"> & { href: LinkProps["to"] }
  >((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <Link ref={ref} to={href} {...other} />;
  });

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<AppWithContext />, rootElement);
} else {
  render(<AppWithContext />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import ReactDOM from "react-dom/client";
import "./index.css";
import "./helpers/axios";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./helpers/customTheme";
import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);

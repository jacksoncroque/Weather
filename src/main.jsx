import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/inter/200.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import { GlobalProvider } from "./contexts/GlobalContext.jsx";

import App from "./App.jsx";

import "./styles/reset.scss";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>,
);

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppcontextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppcontextProvider>
      <App />
    </AppcontextProvider>
  </BrowserRouter>
);

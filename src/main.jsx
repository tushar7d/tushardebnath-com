import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/home.jsx";
import Layout from "./layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>
);

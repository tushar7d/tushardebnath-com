import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/home.jsx";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Test from "./page/test.mdx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mdx" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);

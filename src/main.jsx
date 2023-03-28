import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activity/:id" element={<h1>Pagina delle attività</h1>} />
      <Route path="city/:id" element={<h1>Pagina delle città</h1>} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

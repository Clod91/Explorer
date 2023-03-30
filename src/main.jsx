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
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import MainLayout from "./layouts/mainLayout";
import Attraction from "./pages/attraction/id";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      <Route path="attractions/:id" element={<Attraction />} />
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

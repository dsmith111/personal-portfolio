import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import SimpleReactLightbox from "simple-react-lightbox";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SimpleReactLightbox>
        <Navigation />
      </SimpleReactLightbox>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Display from "./pages/Display";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="display/:imageId" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

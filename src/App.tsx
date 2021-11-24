import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

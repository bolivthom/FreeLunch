import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
//import { routes } from "./nav/routes";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
        </Routes>
      </div>
  );
}

export default App;

import './App.css';
import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";//import { routes } from "./nav/routes";

import { routes } from './nav/routes';

import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<DefaultLayout />} />
          ))}
        </Routes>
      </div>
  );
}

export default App;

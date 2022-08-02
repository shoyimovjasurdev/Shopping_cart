import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./Sections/Home"
import About from "./Sections/About"
import Korzinka from "./Sections/Korzinka"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about/:id" element={<About/>}/>
          <Route path="/korzinka" element={<Korzinka/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Sections/Home"
import About from "./Sections/About"
import Korzinka from "./Sections/Korzinka"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about/:id" element={<About/>}/>
            <Route path="/korzinka" element={<Korzinka/>}/>
        </Routes>
     
    </div>
  );
}

export default App;

import './App.css';
import SideBar from "./Components/SideBar";
import SideSubBlock from "./Components/SideSubBlock";
import {useState} from "react";
function App() {


  return (
    <div className="container">
        <div className="main">
            <SideBar/>
        </div>
    </div>
  );
}

export default App;

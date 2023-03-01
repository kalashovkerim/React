import Auth from "./Components/Auth";
import "./Styles/App.css";
import video from "./resources/video.mp4";
import React from "react";
function App() {
  return (
      <div>
          <div className="voverlay"></div>
          <video src={video} autoPlay loop muted/>
          <div className="container">

              <Auth/>
          </div>
      </div>


  );
}

export default App;

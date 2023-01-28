import React from "react";
import Main from "./containers/Main/Main.jsx"

function App() {
  return (
    <div>
      <div  className="container-fluid" >
        <div className="row">
          <div style={{backgroundColor: "red", color: "white"}} className="col text-center">
            <h1  className="text-center">Cupids Crush</h1>
          </div>
        </div>
        <Main />         
      </div>
    </div>
  );
}

export default App;

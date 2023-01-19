import './App.css';
import Main from "./containers/Main/Main.jsx"

function App() {
  return (
    <div>
      <div  className="container" >
        <div className="row">
          <div style={{backgroundColor: "teal", color: "white"}} className="col text-center">
            <h1  className="text-center">Cupids Crush</h1>
            <h5  className="text-center">Search for Teams by Number, Division, or Name!</h5>
          </div>
        </div>
        <Main />         
      </div>
    </div>
  );
}

export default App;

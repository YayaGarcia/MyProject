import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import DataProvider  from "./page/DataProvider";
import Pages from "./Pages";


function App() {
  return (
    <DataProvider>
      <div className="App"> 
        <Router>
          <Pages />
        </Router>
      </div>
    </DataProvider> 
  );
}

export default App;
import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Souvik", "Nilanjan", "Anirban", "Dipanjan"];
    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;

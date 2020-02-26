import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Stepper from "./Components/Stepper"



class App extends Component {

  state = {
    AMSteps: [
      {
        id: 1,
        title: "Part 1: Via Negativa",
        instructions: ""
      },
      {
        id: 2,
        title: "Part 2: Via Positiva",
        instructions: ""
      }
    ]
  };

  render() {

    const background = {
      backgroundColor: "#DCDCDC",
      paddingBottom: 150,
    }

    return (

      <div style={background}>

        <Navbar />

        <Stepper />

      </div >

    );
  };
};


export default App;

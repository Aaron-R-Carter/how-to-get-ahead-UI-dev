import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Stepper from "./Components/Stepper"



class App extends Component {


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

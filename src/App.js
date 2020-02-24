import React, { Component } from 'react';
import './App.css';
import MyContainer from "./Components/MyContainer";
import Navbar from "./Components/Navbar";


class App extends Component {

  render() {

    const background = {
      backgroundColor: "#DCDCDC",
      paddingBottom: 150 ,
    }

    return (

      <div style={background}>

        <Navbar />
        <MyContainer

        ></MyContainer>
      </div>

    );
  };
};


export default App;

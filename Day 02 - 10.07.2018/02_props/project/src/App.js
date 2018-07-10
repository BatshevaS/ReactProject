import React, { Component } from 'react';
import './App.css';
import Pizza from './Pizza/Pizza';


//class style comonent - state component
class App extends Component {


  //msg is calss member of App class
  msg={
    important:"React is the best!!",
    toString:function(){
      return JSON.stringify(this);
    }
  }

  
  render() {
    return (

       //jsx must return one root element
       //className in jsx == class in html
      <div className="App">
       <h1>{this.props.msg} to Anna's Pizza shop</h1>
       <h2>{this.props.title}</h2>
       <Pizza price="60" slices="4" subTitle={this.msg.toString()}/>
       <Pizza price="65" slices="6" >with two toppings!!</Pizza>
       <Pizza price="100" slices="8" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownCountries from './DropDownCountries';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      selectedCountry: ''
    }

    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag').then((response) => {
      response.json().then((list) => {
        this.setState({
          countries: list
        })
      });
    });

    const countryHandler = (selectedCountry) => {
      this.setState({
        selectedCountry: selectedCountry
      })
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Countries
        </p>
        <DropDownCountries countries={this.state.countries} onChange={this.countryHandler}/>
      </div>
    );
  }
}

export default App;

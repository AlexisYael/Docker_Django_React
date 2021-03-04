import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

if (window.location.origin === "http://localhost:8000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
}
else {
  axios.defaults.baseURL = window.location.origin;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "No hay Inicio",
      listo: false
    }
  }
  post = () => {
    axios.post('/UsuariosApp/login/', { usuario: "alexis", password: "alexis123" })
      .then(res => {
        this.setState({ title: res.data.mensaje.text, listo: true })
      })
      .catch(error => {
        console.log(error);
      })
  }
  usuarios = () => {
    axios.get('/UsuariosApp/get_users/')
      .then(res => {
        console.log(res.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <button
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.post}
            disabled={this.state.listo}
          >
            Click
          </button>
          <button onClick={this.usuarios}>Mostar usuarios</button>
          <h1>{this.state.title}</h1>
        </header>
      </div>
    );
  }

}

export default App;

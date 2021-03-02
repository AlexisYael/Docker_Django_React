import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  if (window.location.origin === "http://localhost:3000") {
    axios.defaults.baseURL = "http://0.0.0.0:8000";
  } else {
    axios.defaults.baseURL = window.location.origin;
  }
  const [user, setUser] = useState("No hay inicio");
  axios.post('/UsuariosApp/login/', { usuario: "alexis", password: "alexis123" }).then(res => {
    setUser(res.data.mensaje.text)
  })
    .catch(error => {
      console.log(error);
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {user}
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState("No hay inicio");
  //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.post('http://0.0.0.0:8000/UsuariosApp/login/',{ usuario: "alexis", password: "alexis123" }).then(res => {
    setUser(res.data.mensaje.text)
  })
    .catch(error => {
      console.log(error);
    })
  /*  axios.get('http://0.0.0.0:8000/UsuariosApp/get_users/').then(res => {
     console.log(res);
   })
     .catch(error => {
       console.log(error)
     }) */
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

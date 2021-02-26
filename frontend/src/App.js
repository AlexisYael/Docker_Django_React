import logo from './logo.svg';
import './App.css';

function App() {
  /* axios.post('http://0.0.0.0:8000/UsuariosApp/login/', { usuario: "alexis", password: "alexis123" }).then(res => {
    console.log(res);
  })
    .catch(error => {
      console.log(error)
    }) */
  axios.get('http://0.0.0.0:8000/UsuariosApp/get_users/').then(res => {
    console.log(res);
  })
    .catch(error => {
      console.log(error)
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
          Learn Reactsdfsdfsdf
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';



function App() { 
  const [login, setLogin] = React.useState();
  return (
    <div className="App">
      {login? <Home login={login} setLogin={setLogin}/> : <Login setLogin={setLogin}/>}
    </div>
  );
}
      
      


export default App;

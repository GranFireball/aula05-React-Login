import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';



function App() {
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();
  const [login, setLogin] = React.useState();


  function verificaLogin(){
    if(usuario === "OI" && senha === "12")
    setLogin({nome:'gran'})
    else
    alert("Login Inválido")

  }
  
  if(login){
  return (
    <div className="App">
      <div className='Home'>
        <h3>
        {login.nome}
        </h3>
        <div>
        <button onClick={() => {setUsuario(''); setSenha(''); setLogin(undefined)} }>Logout</button>
        </div>
      </div>
    </div>
  );
}
else{
  return(
    <div className='Login'>
    Usuário: <input type="text" className='usuario' onChange={(e) => setUsuario(e.target.value)} />
    Senha: <input type="password" className="senha" onChange={(e) => setSenha(e.target.value)} />
    <div className='button'>
    <button onClick={verificaLogin}>Login</button>
    </div>
    </div>
  );
}
      
      
     
      
  
}

export default App;

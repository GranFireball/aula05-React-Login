import React from 'react';
function Home(props){
    const [usuario, setUsuario] = React.useState();
    const [senha, setSenha] = React.useState();
    <>
    <h3>
      {props.usuario}
      </h3>
      <button onClick={() => {props.setUsuario(''); props.setSenha('')} }>Logout</button>
    </>
}

export default Home;
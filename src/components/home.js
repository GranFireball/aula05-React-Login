import React from 'react';

function Home(props){
  return(
      <div className='user'>
        <h3>
        {props.login.nome}
        </h3>
        <div>
        <button onClick={() => {props.setLogin(undefined)} }>Logout</button>
        </div>
      </div>
  )
}

export default Home;
import react from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import './App.css';



const App = () => {
 

//return react.createElement("h1",null,"I dont use JSX");//without JSX
return <div>
  <h1>Welcom To React World!</h1>
  
  <h2 onClick={()=> alert("You clicke")}>My First react component</h2>
  </div>;//Using JSX

  
}



  



export default App;

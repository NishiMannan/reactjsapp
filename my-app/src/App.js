


import react from 'react';


import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ContactCard from './ContactCard';
import './App.css';

<html>

<p id ="root"></p>

</html>



const App = () => {
 
return(
<div>
<ContactCard avatarurl="https://via.placeholder.com/150" name="Rick" email="rick@gmail.com" age={27} />
<ContactCard avatarurl="https://via.placeholder.com/150" name="Nanvy" email="nancyk@gmail.com" age={69}/>
<ContactCard avatarurl="https://via.placeholder.com/150" name="leo" email="leo@gmail.com" age={35}/>
</div>
);
  

}
export default App;







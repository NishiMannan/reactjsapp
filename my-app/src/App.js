


import react from 'react';


import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ContactCard from './ContactCard';
import './App.css';

<html>

<p id ="root"></p>

</html>



const App = () => {
 
    const contacts = [{avatarurl:"https://via.placeholder.com/150", name:"Rick", email:"rick@gmail.com", age:27},
     {avatarurl:"https://via.placeholder.com/150", name:"Nanvy", email:"nancyk@gmail.com", age:69}, 
     {avatarurl:"https://via.placeholder.com/150", name:"leo", email:"leo@gmail.com", age:35}];
return(
<div>
   {contacts.map((contact, index) => { 
return(<ContactCard avatarurl={contact.avatarurl} name={contact.name} email={contact.email} age={contact.age} />
   )})}

</div>);}
/*<ContactCard avatarurl="https://via.placeholder.com/150" name="Nanvy" email="nancyk@gmail.com" age={69} />
<ContactCard avatarurl="https://via.placeholder.com/150" name="leo" email="leo@gmail.com" age={35} />*/


  


export default App;







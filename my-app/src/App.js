


import react, {useState, useEffect} from 'react';


import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ContactCard from './ContactCard';
import './App.css';



const App = () => {
    const [results, setcontacts] = useState([]);
useEffect(()=>{
    fetch("https://randomuser.me/api/?results=5")
    .then(response=>response.json())
    .then(data=>{console.log(data) 
        setcontacts(data.results)});}, [])
 
  
    
return(
<div>
   {results.map((contact, index) => { 
return(<ContactCard avatarurl={contact.picture.large} name={contact.name.first} email={contact.email} age={contact.dob.age} />
   )})}

</div>);}


  


export default App;







import react, {useState} from 'react';

const ContactCard = (props) => {
    const [showage,setshowage] = useState(false);
    return(
      
        <div className="contact-card">
        <img src={props.avatarurl} alt="profile"></img>
        
        
        <div className="">
        <p>Name:{props.name}</p>
        
        <p>{props.email}</p>
        <button onClick = {() => setshowage(!showage)}>ClickMe</button>
        {showage ? props.age : null}
        </div>
        
        </div>
    );

}

export default ContactCard;


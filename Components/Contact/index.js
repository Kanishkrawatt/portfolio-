import React, { useState } from 'react'
import axios from 'axios';
import { ContactForm,ContactLabel, ContactOuterDiv,ContactInnerDiv,ContactInnerDivHalf, ContactPage,ContactInput, ContactTextArea } from './ContactComponents';

function Contact() {
  
  const [FirstName, setFirstName] = useState("");
  const [LastName,setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  function submitfunc(e){
      e.preventDefault();
      let slug = `${FirstName}-${LastName}-${Email}`
      let data = {FirstName,LastName,Email,Message,slug};
      axios.post('/api/contact',data);
      setFirstName("");
      setEmail("");
      setLastName("");
      setMessage("");
}
  
  return (
    <section id='Contact'>
  <ContactPage>
  <ContactForm onSubmit={submitfunc} >
    <ContactOuterDiv >
      <ContactInnerDivHalf >
        <ContactLabel>
          First Name
        </ContactLabel>
        <ContactInput id="grid-first-name" type="text"  value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </ContactInnerDivHalf>
      <ContactInnerDivHalf >
        <ContactLabel>
          Last Name
        </ContactLabel>
        <ContactInput id="grid-last-name" type="text"  value={LastName} onChange={(e)=>setLastName(e.target.value)}/>
      </ContactInnerDivHalf>
    </ContactOuterDiv>
    <ContactOuterDiv>
      <ContactInnerDiv>
        <ContactLabel >
          E-mail
        </ContactLabel>
        <ContactInput id="email" type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
      </ContactInnerDiv>
    </ContactOuterDiv>
    <ContactOuterDiv>
      <ContactInnerDiv>
        <ContactLabel >
          Message
        </ContactLabel>
        <ContactTextArea  id="message" value={Message} onChange={(e)=>setMessage(e.target.value)} />
      </ContactInnerDiv>
    </ContactOuterDiv>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3">
        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white   py-2 px-4 rounded" type="submit">
          Send
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  </ContactForm>
  </ContactPage>
  </section>
)
}

export default Contact;
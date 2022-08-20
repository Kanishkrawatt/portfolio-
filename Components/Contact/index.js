import React, { useState } from "react";
import axios from "axios";
import {
  ContactForm,
  ContactLabel,
  ContactButton,
  ContactOuterDiv,
  ContactInnerDiv,
  ContactInnerDivHalf,
  ContactPage,
  ContactInput,
  ContactTextArea,
  ContactButtonDiv,
} from "./ContactComponents";

function Contact() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  function submitfunc(e) {
    e.preventDefault();
    let slug = `${FirstName}-${LastName}-${Email}`;
    let data = { FirstName, LastName, Email, Message, slug };
    axios.post("/api/contact", data);
    setFirstName("");
    setEmail("");
    setLastName("");
    setMessage("");
  }

  return (
    <section id="Contact">
      <ContactPage>
        <ContactForm onSubmit={submitfunc}>
          <ContactOuterDiv>
            <ContactInnerDivHalf>
              <ContactLabel>First Name</ContactLabel>
              <ContactInput
                id="grid-first-name"
                type="text"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </ContactInnerDivHalf>
            <ContactInnerDivHalf>
              <ContactLabel>Last Name</ContactLabel>
              <ContactInput
                id="grid-last-name"
                type="text"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </ContactInnerDivHalf>
          </ContactOuterDiv>
          <ContactOuterDiv>
            <ContactInnerDiv>
              <ContactLabel>E-mail</ContactLabel>
              <ContactInput
                id="email"
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ContactInnerDiv>
          </ContactOuterDiv>
          <ContactOuterDiv>
            <ContactInnerDiv>
              <ContactLabel>Message</ContactLabel>
              <ContactTextArea
                id="message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </ContactInnerDiv>
          </ContactOuterDiv>
          <ContactOuterDiv>
            <ContactInnerDiv>
              <ContactButton type="submit">Send</ContactButton>
            </ContactInnerDiv>
          </ContactOuterDiv>
        </ContactForm>
      </ContactPage>
    </section>
  );
}

export default Contact;

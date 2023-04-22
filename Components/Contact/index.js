import React, { useRef, useState, useId } from "react";
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

import ScrollAnimation from "../ScollAnimation/ScrollAnimation";
function Contact() {
  const id = useId();
  const FirstName = useRef();
  const LastName = useRef();
  const Email = useRef();
  const Message = useRef();
  function submitfunc(e) {
    e.preventDefault();
    const data = {
      id,
      FirstName: FirstName.current.value,
      LastName: LastName.current.value,
      Email: Email.current.value,
      Message: Message.current.value,
    };
    axios.post("/api/contact", data);
    FirstName.current.value = "";
    LastName.current.value = "";
    Email.current.value = "";
    Message.current.value = "";
  }
  const ScrollElements = [
    "ContactName",
    "ContactEmail",
    "ContactMessage",
    "ContactButton",
  ];
  ScrollAnimation(ScrollElements);
  return (
    <section id="Contact">
      <ContactPage>
        <ContactForm onSubmit={submitfunc}>
          <ContactOuterDiv id="ContactName">
            <ContactInnerDivHalf >
              <ContactLabel>First Name</ContactLabel>
              <ContactInput id="grid-first-name" type="text" ref={FirstName} />
            </ContactInnerDivHalf>
            <ContactInnerDivHalf >
              <ContactLabel>Last Name</ContactLabel>
              <ContactInput id="grid-last-name" type="text" ref={LastName} />
            </ContactInnerDivHalf>
          </ContactOuterDiv>
          <ContactOuterDiv id="ContactEmail">
            <ContactInnerDiv>
              <ContactLabel>E-mail</ContactLabel>
              <ContactInput id="email" type="email" ref={Email} />
            </ContactInnerDiv>
          </ContactOuterDiv>
          <ContactOuterDiv id="ContactMessage">
            <ContactInnerDiv>
              <ContactLabel>Message</ContactLabel>
              <ContactTextArea id="message" ref={Message} />
            </ContactInnerDiv>
          </ContactOuterDiv>
          <ContactOuterDiv id="ContactButton">
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

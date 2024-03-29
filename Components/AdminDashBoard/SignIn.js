import Image from "next/image";
import { useRef, useState } from "react";
import { signInWithGoogle } from "../../db/firebasefunction";
import styled from "styled-components";
import user from "../../public/user.png";
import googleImg from "../../public/google.png";
export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 20%;
  border-radius: 2rem;
  padding: 2rem;
  background: linear-gradient(45deg, #97c4b8 30%, #ccf3ee 70%);
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 1400px) {
    width: 30%;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 800px) {
    width: 60%;
  }
`;
export const InputBox = styled.input`
  padding: 1rem;
  width: 90%;
  border: 1px solid black;
  margin: 10px 0 10px 0;
  border-radius: 1rem;
  &::selection {
    background-color: transparent;
  }
`;
export const Submitbtn = styled.button`
  background: white;
  border-radius: 1rem;
  width: 100%;
  border: 1px solid black;
  padding: 0.75rem;
  color: black;
  width: 100%;
  margin: 2rem;
  &::selection {
    background-color: transparent;
  }
`;
export const MainDiv = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function SigninPage({ SignIn }) {
  const Email = useRef(null);
  const Password = useRef(null);
  const handleSubmit = () => {
    SignIn(Email.current.value, Password.current.value);
    Email.current.value = "";
    Password.current.value = "";
  };
  return (
    <MainDiv>
      <Page>
        <Image
          src={user}
          height="100px"
          width="100px"
          placeholder="blur"
          alt="user"
        />
        <InputBox type="text" ref={Email} placeholder="Username" />
        <InputBox type="Password" ref={Password} placeholder="Password" />
        <Submitbtn
          style={{ marginBottom: "1rem" }}
          onClick={handleSubmit}
          type="button"
          id="button"
        >
          Login
        </Submitbtn>
        {/* <Submitbtn
          type="button"
          id="button"
          style={{
            marginTop: "0",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <Image src={googleImg} alt="img" height="20px" width="20px" />
          {state ? "Sign up" : "Login"} with Google
        </Submitbtn> */}
      </Page>
    </MainDiv>
  );
}

export default SigninPage;

import React, { useEffect, useMemo, useState } from "react";
import {
  CheckUser,
  IsAdmin,
  UserInfo,
  signOutWithGoogle,
} from "../../db/firebasefunction";
import Login from "./Login";
import styled from "styled-components";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
import axios from "axios";
import ChatData from "./Chat/GeneralChat/Chats/ChatData";

export const Messagediv = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: "Rum Raisin", sans-serif;
  font-size: xx-large;
  flex-direction: column;
`;
export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #a5f1e9;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width:1017px){
    flex-direction: column;
    gap: 0;
  }
`;
const Admin = (props) => {
  const user = UserInfo();
  const admin = IsAdmin();
  const data = props.Data;
  return (
    <>
      {user ? (
        admin ? (
          <FlexDiv>
            <Messagediv
              style={{
                width: "100%",
                backgroundImage: "url('./cloud1.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Messages /> */}
              Hello{" "}
              <span
                style={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                {user.displayName}
              </span>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link href={"/"}>
                  <ShowMore color="#E1FFEE" style={{ fontSize: "small" }}>
                    Go Back
                  </ShowMore>
                </Link>
                <ShowMore
                  color="#E1FFEE"
                  style={{ fontSize: "small" }}
                  onClick={() => {
                    signOutWithGoogle();
                  }}
                >
                  LogOut
                </ShowMore>
              </div>
            </Messagediv>
            <ShowMore
              color="#E1FFEE"
              style={{
                display:"flex",
                flexDirection:"column",
                fontSize: "small",
                width:"70vw",
                height: "auto",
                margin:"0",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "large" }}>Messages</p>
              <ChatData data={data}>
                {data &&
                  data.map((item, index) => {
                    return <div key={item.id}>{item.Message}</div>;
                  })}
              </ChatData>
            </ShowMore>
          </FlexDiv>
        ) : (
          <Messagediv style={{ backgroundColor: "#E1FFEE" }}>
            Your are Not admin
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link href={"/"}>
                <ShowMore color="#E1FFEE" style={{ fontSize: "small" }}>
                  Go Back
                </ShowMore>
              </Link>
              <ShowMore
                color="#E1FFEE"
                style={{ fontSize: "small" }}
                onClick={() => {
                  signOutWithGoogle();
                }}
              >
                LogOut
              </ShowMore>
            </div>
          </Messagediv>
        )
      ) : (
        <Login />
      )}
    </>
  );
};

export default Admin;

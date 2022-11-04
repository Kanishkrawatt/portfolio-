import React from "react";
import { CheckUser, IsAdmin, UserInfo ,signOutWithGoogle} from "../../db/firebasefunction";
import Login from "./Login";
import styled from "styled-components";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
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
const index = () => {
  const user = UserInfo();
  const admin = IsAdmin();
  console.log(admin);
  return (
    <>
      {user ? (
        admin ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#c5d8aa",
            }}
          >
            <Messagediv style={{width:"70vw"}}>
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
              <div style={{display:"flex",flexDirection:"row"}}>
                <Link href={"/"}>
                  <ShowMore color="#D9F8C4" style={{ fontSize: "small" }}>
                    Go Back
                  </ShowMore>
                </Link>
                <ShowMore color="#D9F8C4" style={{ fontSize: "small" }} onClick={()=>{signOutWithGoogle()}}>
                  LogOut
                </ShowMore>
              </div>
            </Messagediv>
            <ShowMore
              color="#D9F8C4"
              style={{
                fontSize: "small",
                width: "30vw",
                height: "90vh",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              Messages
            </ShowMore>
          </div>
        ) : (
          <Messagediv style={{backgroundColor:"#c5d8aa"}}>
            Your are Not admin
            <div style={{display:"flex",flexDirection:"row"}}>
                <Link href={"/"}>
                  <ShowMore color="#D9F8C4" style={{ fontSize: "small" }}>
                    Go Back
                  </ShowMore>
                </Link>
                <ShowMore color="#D9F8C4" style={{ fontSize: "small" }} onClick={()=>{signOutWithGoogle()}}>
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

export default index;

import React, { useContext ,useEffect } from "react";
import styled from "styled-components";
import { ShowMore } from "../Project/Task/TaskComponents";
import Link from "next/link";
import ChatData from "./Chat/GeneralChat/Chats/ChatData";
import { auth } from "../../db/";
import db from "../../db/";
import { collection, getDocs } from "firebase/firestore";

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
  @media (max-width: 1017px) {
    flex-direction: column;
    gap: 0;
  }
`;
const Admin = ({ SignOut,Data}) => {
  const user = auth.currentUser;
  const [data, setData] = React.useState(null);
  useEffect(() => {
     const GetData = async () => {
      const DataRef = await getDocs(collection(db, "contact"));
      const Data = DataRef.docs.map((entry) => entry.data());
      console.log(Data);
      setData(Data);
    };
    return () => {
      GetData();
    }
  }, [])

  
  return (
    <>
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
            {user.email}
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
                SignOut()
              }}
            >
              LogOut
            </ShowMore>
          </div>
        </Messagediv>
        <ShowMore
          color="#E1FFEE"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "small",
            width: "70vw",
            height: "auto",
            margin: "0",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "large" }}>Messages</p>
          {data && <ChatData data={data}>
            {data &&
              data.map((item, index) => {
                return <div key={item.id}>{item.Message}</div>;
              })}
          </ChatData>}
        </ShowMore>
      </FlexDiv>
    </>
  );
};

export default Admin;
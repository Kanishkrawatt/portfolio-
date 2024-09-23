import React from "react";
import styled from "styled-components";
import GeneralChat from "./Chat/GeneralChat/GeneralChat";
import Project from "./ProjectContainer/Project";

export const DashboardDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function Dashboard(props) {
  const Data = props.Data;
  return (
    <DashboardDiv>
      {/* <Project/> */}
      <GeneralChat Data={Data} />
    </DashboardDiv>
  );
}

export default Dashboard;

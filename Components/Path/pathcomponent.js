import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const MyPathsContainer = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #afb4ff;
  align-items: center;
  padding-top: 5rem;
`;
export const ChosePath = styled.h1`
  font-family: "Rum Raisin", sans-serif;
  &::selection{
    background-color: transparent;
  }
`;
export const PathHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
`;
export const PathHeader = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #9c9efe;
  background-color: #9c9efe;
  padding: 2rem;
  cursor: pointer;
  justify-content: center;
  &::selection{
    background-color: transparent;
  }
`;

export const Timeline_Line = styled.div`
    display: block;
    height: 10vh;
    width: 5px;
    background-color: white;
    &::after{
        content: " ";
        margin-top: 10vh;
        margin-left:-10px;
        height: 1rem;
        border: 5px solid orange;
        display: block;
        width: 1rem;
        border-radius: 50%;
        background-color: white;
}
` 
export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Timeline_container = styled.div`
    display: block;
    height: 5rem;
    width: 10rem;
    margin-top: -2rem;
    border-radius: 100px;
    margin-right:${props=>props.right?'15rem':'-15rem'};

    background-color: white;
    &::before{
        content: " ";
        display:block;
        width: 0;
        height: 0;
        margin-top: 1.5rem;
        border-top: 1rem solid transparent;
        border-left:${props=>props.right?"2rem solid white":"0rem solid white"};
        border-right:${props=>props.right?"0rem solid white":"2rem solid white"};
        border-bottom: 1rem solid transparent;
        margin-left:${props=>props.right?"9rem":"-1rem"};
    }
`
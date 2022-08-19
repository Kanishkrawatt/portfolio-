import styled from "styled-components";

export const MyPathsContainer = styled.div`
  height: auto;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #afb4ff;
  align-items: center;
  padding-top: 5rem;
`;
export const ChosePath = styled.h1`
  font-family: "Rum Raisin", sans-serif;
  margin-bottom: 5rem;
  &::selection{
    background-color: transparent;
  }
`;
export const PathHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20rem;
  @media (max-width: 480px){
  flex-direction: column;
  gap:5rem;
  }
`;
export const PathHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
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
    margin-top: 1.6rem;
    height: 15vh;
    width: 5px;
    background-color: white;
    &::after{
        content: " ";
        margin-top: 15vh;
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
`

export const Timeline_container = styled.div`
    display: flex;
    position:absolute;
    ${(props) => {
        return `
        margin-top:${(props.pos)*10+22}rem;
        `}};
    height: 5rem;
    width: 10rem;
    border-radius: 100px;
    margin-right:${props=>props.right==1?'15rem':'-15rem'};
    align-items: center;
    justify-content: center;
    background-color: white;
    &::selection{
      background-color: transparent;
    }
`
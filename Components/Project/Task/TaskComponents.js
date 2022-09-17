import styled from "styled-components";
export const TasksDiv = styled.div`
  height: 15rem;
  width: 20rem;
  padding: 0.5rem 2rem;
  transition: 1s all ease;
  display: flex;
  background-color: ${(props) => props.colortheme.main};
  border-radius: 2rem;
  flex-direction: column;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 1102px) {
    width: 90%;
    height: 10rem;

  }
`;
export const Maindiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 1102px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
@media (max-width: 480px) {
  flex-direction: column;

  }
`;
export const TaskContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  transition: 1s all ease;
  width: 70vw;
  gap: 1.2rem;
  height: auto;
  padding: 1rem 0.5rem;
  border-radius:1rem;
  margin: 1rem 2rem;
  margin-top: 3rem;
  
  @media(max-width: 480px){
        height: auto;
    }
`;
export const TaskHeading = styled.div`
  justify-content: center;
  height: auto;
  font-weight: 500;
  font-size: larger;
  @media (max-width: 1102px) {
    font-size: medium;
  }
`;
export const Date = styled.div`
  font-size: small;
`;
export const DateDiv = styled.div`
  display: flex;
  padding: 1rem 0.85rem 1rem 1rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1102px) {
    padding: 0.5rem ;
  }
`;
export const Type = styled.div`
  font-size: x-small;
  @media (max-width: 1102px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: block;
  }
`;
export const Progress = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 2rem 0rem;
  flex-direction: column;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const ProgressBar = styled.div`
  height: 3px;
  display: block;
  width: 100%;
  margin-top: 1rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.colortheme.gradient} ${(props) => props.Score},
    white 20%
  );
`;
export const Buttondiv = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1102px) {
   width: auto;
   padding:0rem;
   flex-direction: column;
  }
  @media (max-width: 480px) {
    padding:1rem 0rem;
   flex-direction: row;  
  }
`;
export const Button = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.colortheme.gradient};
  @media (max-width: 1102px) {
    /* display: ${(props)=>props.left&&'none'}; */
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0rem;
  }
  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;

    margin: 0rem 2rem;
  }

`;
export const ProgressScore = styled.div`
  text-align: end;
`;
export const Anchor = styled.a`
    color: black;
    z-index: 20;
    cursor: pointer;
    
`

export const ShowMore = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem 6rem;
    padding: 1rem 4rem;
    background-color: ${props=>props.color};
  transition: 0.5s all ease;
    cursor: pointer;
    border-radius: 2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  &::selection{
    background-color: transparent;
  }
`

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.5rem 2rem;
  margin: 1rem 0rem;
`

export const ToolsName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: white;
  color: ${props=>props.color};;
  font-size: small;
  margin: 0rem 0.5rem;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover{
    background-color: ${props=>props.colortheme.gradient};
  }
  `
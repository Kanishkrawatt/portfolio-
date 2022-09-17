import styled from "styled-components";

export const MyPathsContainer = styled.div`
  height: auto;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  /* background-color: #afb4ff; */
  align-items: center;
  padding-top: 5rem;
`;
export const ChosePath = styled.h1`
  font-family: "Rum Raisin", sans-serif;
  margin-bottom: 5rem;
  letter-spacing: 0.125rem;
  font-size: 2rem;
  transition: 0.75s all ease;
  &::selection {
    background-color: transparent;
  }
`;
export const PathHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20rem;
  transition: 0.75s all ease;


  @media (max-width: 994px) {
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: 1387px) {
    gap: 2rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const PathHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  margin-bottom: 5rem;
  border: 1px solid #9c9efe;
  background-color: #9c9efe;
  z-index: 10;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 2rem;
  cursor: pointer;
  justify-content: center;
  &::selection {
    background-color: transparent;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.75s all ease;
  align-items: center;
`;
export const Timeline_container_project_container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
`;
export const Timeline_container_project = styled.button`
  padding: 0.75rem 1.75rem;
  background-color: #afb4ff;
  border: #afb4ff;
  cursor: pointer;
`;
export const TimeLine_Heading = styled.h1`
  display: flex;
  width: 100%;
  background-color: #b1e1ff;
  margin: 0px;
  justify-content: center;
  height: 5rem;
  align-items: center;
  font-family: "Rum Raisin", sans-serif;
`;
export const TimeLine_Data = styled.p`
  margin: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const Timeline_Time = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: #afb4ff;
  margin: 0px;
  width: 100%;
`;

export const Timeline_container = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.75s all ease;
  height: auto;
  width: 20rem;
  margin-right: ${(props) => props.right != 1 && "25rem"};
  margin-left: ${(props) => props.right == 1 && "25rem"};
  align-items: center;
  justify-content: center;
  padding: 2% 0;
  padding-top: 0px;
  background-color: white;
  text-align: center;
  border: 1px solid #9c9efe;
  background-color: #9c9efe;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &::selection {
    background-color: transparent;
  }
  &::after {
    content: "";
    position: absolute;
    height: 5rem;
    transform: ${(props) =>
      props.right != 1 ? "translateX(12.5rem)" : "translateX(-12.5rem)"};
    display: block;
    width: 5rem;
    border: 0px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.imgUrl});
  }
  &::before {
    content: "";
    position: absolute;
    height: 30rem;
    transform: ${(props) =>
      props.right != 1 ? "translateX(12.5rem)" : "translateX(-12.5rem)"};
    width: 0.25rem;
    background-color: white;
  }
  @media (max-width: 745px) {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 5rem;
    &::after {
      content: "";
      display: none;
    }
    &::before {
      content: "";
      display: none;
    }
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #b1e1ff;
  cursor: pointer;
  font-family: "Rum Raisin", sans-serif;
  font-size: 1.5rem;
  &::selection {
    background-color: transparent;
  }
`;

import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";


export const MainInfo = styled(flexCenter)`
    background-color: #9ED2C6;
    width: 100vw;
    color:white;
    flex-direction: column;
    height: 100vh;
`

export const Name = styled.div`
    font-family: 'Rum Raisin', sans-serif;
    font-size:6rem;
    transform: translateY(-10vh);
`

export const Shortinfo = styled.div`
    font-family: 'Megrim', cursive;
    font-size: 3rem;
    transform: translateY(-10vh);
    color: #F7ECDE;

`
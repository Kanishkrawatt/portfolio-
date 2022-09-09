import styled from "styled-components"
export const ProjectDetails = styled.div`
    margin: 2rem 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 5rem;
    width: 8rem;
    padding-top: 1rem;
    border-radius: 30%;
    @media (max-width: 480px){
        font-size: x-small;
        margin: 0rem;
        height: 2rem;
        width: 3.5rem;

    }

    @media (max-width: 701px){
        margin: 0rem 2rem;
        height: 2rem;
        width: 3.5rem;
    }
    @media (max-width: 573px){
        margin: 0rem 0rem 0rem 2rem;
        height: 2rem;
        width: 3.5rem;
    }
    &:hover{
        
        position: relative;
        background-color: #EED180}
    
`
export const ProjectDetailsNumber = styled.div`
    font-size: x-large;
    display: flex;
    font-weight: lighter;
    justify-content: center;
    @media (max-width: 701px){
        font-size: medium;
    }
    @media (max-width: 480px){
        font-size: medium;
    }
        
    
`
export const ProjectDiv = styled.div`
    height: 40rem;
    background-color: #F1EFDC;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 4rem 0rem 6rem;
    padding-bottom: 1rem;
    align-content:flex-start;
    border-radius:2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 75vw;
    overflow: hidden;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    @media(max-width: 480px){
        width: 80vw;
        height: 65vh;
    }
`
export const ProjectMain= styled.div`
    display: flex;
    font-family: 'Megrim', cursive;
    width: 100vw;
    flex-direction: column;

    height: auto;
    min-height: 100vh;
    background-color: #FFD07F;
    justify-content: center;
    align-items: center;
    `

export const ProjectTitle = styled.h1`
    font-size: x-large;
    font-weight:bolder;
    letter-spacing: 0.25rem;
    margin-top: 3rem;
    font-family: 'Rum Raisin', sans-serif;
    @media (max-width: 480px){
    
        font-size: 2rem;}

`
export const ProjectDivTitleDiv =styled.div`
    display: flex;
    width: 100%;
    margin: 2rem 2rem 0.5rem;
    justify-content: space-between;
    color: black;
    align-items: center;



`

export const ProjectDivTitle =styled.h1`
    display: flex;
    align-items: center;
    border-radius: 1rem;
    font-size: medium;

    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight:100;
    padding:1rem 1rem;
    @media (max-width: 480px) {
        font-size: medium;
  }
    @media (max-width: 768px) {
        display:${props => props.right ? "none" : "flex"};

    }

`

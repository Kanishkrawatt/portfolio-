import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const AboutPageContainer = styled(flexCenter)`
    height: 100vh;
    width: 100vw;
    background-color: #C1D5A4;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      height: auto;
      padding: 5vh 0;
  }
    
`

export const AboutMe = styled.h1`
    font-family: 'Rum Raisin', sans-serif;
    &::selection{
    background-color: transparent;
  }
`
export const AboutPara = styled.p`
    padding-top:2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    &::selection{
    background-color: transparent;
  }
  @media (max-width: 480px) {
    padding-top:0rem;

  }
`
export const AboutImg = styled.img`
  height: 15rem;
  background-color: #D9F8C4;
  border-radius: 50%;
  @media (max-width: 480px) {
      height: 10rem;
      width: 10rem;
  }
  @media (max-width: 992px) {
    height: 15rem;
      width: 15rem;
  }
`
export const AboutContent =styled.div`
display: flex;
margin:0 20vw;
gap:5rem;
flex-direction: row;
justify-content: center;
    align-items: center;

@media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
  }
`
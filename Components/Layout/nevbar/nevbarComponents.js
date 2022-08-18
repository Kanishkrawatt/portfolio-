import styled from 'styled-components';


export const NevbarUl= styled.ul`
    display: flex;
    flex-direction: column;
    position:fixed;
    margin: 0px;
    top:0px;
    left: 0px;
    height: 100vh;
    width: 5rem;
    margin-left: 0px;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    
    @media (max-width: 480px){
      padding-inline-start:10px
}

    
`
export const Nevbarli= styled.li`
    list-style: none;
    display: flex;
    border-radius: 100px;
    transform: translateY(-5vh);
    max-width: 30px;
    align-items: center;
    flex-direction: column;
    min-height: 30px;
    max-height: 30px;
    background-color: #54BAB9 ;
    margin-top:1.3rem;
    font-size: 0px;
    padding: 10px;
    transition: max-width 0.5s;

    &:hover{
      background-color: lightblue;
      min-height: 30px;
      max-height: 30px;
      flex-direction: row;
      max-width: 90px;
      gap: 10px;
      font-size: small;
      transition: max-width 0.5s;
    }
    &:active{
      background-color: lightblue;
      min-height: 30px;
      max-height: 30px;
      max-width: 90px;
      gap: 10px;
      font-size: small;
      transition: max-width 0.5s;
    }
    &::selection{
      background-color: transparent;
    }

    
`
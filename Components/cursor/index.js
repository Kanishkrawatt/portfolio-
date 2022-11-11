import { useEffect, useRef } from 'react'
import styled from 'styled-components'
export const Cursor = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 10rem;
    position:  fixed;
    /* transition: translate3d 2s; */
    background-color: #BCEAD5;
    z-index: 1000;
`
const Index = ()=>{
    let CursorPos = useRef(null)
    useEffect(()=>{
        document.addEventListener("mousemove",(event)=>{
          const { clientX,clientY} = event;
          const posX = clientX - CursorPos.current.clientWidth / 2
          const posY = clientY - CursorPos.current.clientHeight / 2
          CursorPos.current.style.transform= `translate3d(${posX}px,${posY}px,0)`
          // CursorPos.current.style.transform= `translate(${clientX}px,${clientY}px)`
          return()=>{}
        })
        ,[]})
    return(<Cursor ref={CursorPos}></Cursor>)
}

export default Index
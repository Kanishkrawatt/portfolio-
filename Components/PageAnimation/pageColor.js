/* eslint-disable react-hooks/exhaustive-deps */


import React,{useState,useEffect} from 'react'
import useScrollPosition from "../Hooks/useScreen";
import GetPosition from '../Hooks/getPosition';
const PageColorAnimation= (ScrollElements) => {
    const position = useScrollPosition();
    
    useEffect(() => {
        let Body = document.querySelector("body")
      let Home = GetPosition("Home");
      let AboutPos= GetPosition("About")+400;
      let ProjectPos = GetPosition("Project")+400;
      let ContactPos = GetPosition("Contact")+400;
      let TimeLinePos = GetPosition("Path")+400;
        if (position > Home && position < AboutPos) {
          Body.style.backgroundColor = "#c1d5a4";
        } else if (position > AboutPos && position < ProjectPos) {
          Body.style.backgroundColor = "#ffd07f";
        } else if (position > ProjectPos && position < TimeLinePos) {
          Body.style.backgroundColor = "#afb4ff";
        } else if (position > TimeLinePos && position < ContactPos) {
          Body.style.backgroundColor = "#FFE69A";} 
        else if (position > ContactPos) {
          Body.style.backgroundColor = "#FFE69A";
        }
         else {
          Body.style.backgroundColor = "#9ED2C6";
        }
      }, [position]);
}


export default PageColorAnimation
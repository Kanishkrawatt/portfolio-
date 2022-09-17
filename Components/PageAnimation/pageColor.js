/* eslint-disable react-hooks/exhaustive-deps */


import React,{useState,useEffect} from 'react'
import useScrollPosition from "../Hooks/useScreen";
import GetPosition from '../Hooks/getPosition';
const PageColorAnimation= () => {
    const position = useScrollPosition();
    useEffect(() => {
      let Body = document.querySelector("body")
      let Home = GetPosition("Home");
      let AboutPos= GetPosition("About");
      let ProjectPos = GetPosition("Project");
      let ContactPos = GetPosition("Contact");
      let TimeLinePos = GetPosition("Path");
      // Home 0 About 916 Project 1832 Contact 3904 Timeline 2748
      console.log("Home",Home,"About",AboutPos,"Project",ProjectPos,"Contact",ContactPos,"Timeline",TimeLinePos);
        if (position > Home && position < AboutPos-(AboutPos/2)) {
          // Body.style.backgroundColor = "#c1d5a4";
          Body.style.backgroundColor = "#9ED2C6";

        } else if (position > AboutPos-(AboutPos/2) && position < ProjectPos-(AboutPos/2)) {
          Body.style.backgroundColor = "#c1d5a4";

          // Body.style.backgroundColor = "#ffd07f";
        } else if (position > ProjectPos-(AboutPos/2) && position < TimeLinePos-(AboutPos/2)) {
          // Body.style.backgroundColor = "#afb4ff";
          Body.style.backgroundColor = "#ffd07f";

        } else if (position > TimeLinePos-(AboutPos/2) && position < ContactPos-(AboutPos/2)) {
          Body.style.backgroundColor = "#afb4ff";
          
        } 
        else if (position > ContactPos-(AboutPos/2)) {
          Body.style.backgroundColor = "#FFE69A";
        }
         else {
          Body.style.backgroundColor = "#9ED2C6";
        }
      }, [position]);
}


export default PageColorAnimation
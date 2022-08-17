import React, { useEffect, useState } from "react";
import Image from "next/image";


import {NevbarUl,
  Nevbarli} 
  from "./nevbarComponents"
import Link from "next/link";

function Nevbar(){
  let NevbarContent = [{"Name":"Home","Link":"#Home","img":"home"},
  {"Name":"About","Link":"#About","img":"about"},
  {"Name":"Project","Link":"/Project","img":"project"},
  {"Name":"Contact","Link":"/Contact","img":"contact"}]
  const [check, setcheck] = useState(false)
  const toggleActive = {
      backgroundColor: "lightblue",
      minHeight: "30px",
      maxHeight: "30px",
      maxWidth: "90px",
      gap:"10px",
      fontSize:"small",
  }
  return(
      <NevbarUl>
        {NevbarContent.map((content,index)=>{
          return(<Link key={index} href={content.Link}><Nevbarli  onClick={()=>{setcheck(!check)}} /*style={check?toggleActive:{}}*/ ><Image src ={`/icons8-${content.img}-32.png`} height ="25px" alt="img" width="25px" /> {content.Name}</Nevbarli></Link>)
        }
        )}
      </NevbarUl>
  )
}


export default Nevbar;

import { useState,useEffect } from "react";
import React from 'react'

function GetPosition(id) {
    // return the scoll value of the section
    const Position = document.getElementById(id).offsetTop;
    return Position;
}

export default GetPosition
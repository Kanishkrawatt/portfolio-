import { useState, useEffect } from "react";
import React from "react";

function GetPosition(id) {
  const Position = document.getElementById(id)?.offsetTop ?? 0;
  return Position;
}

export default GetPosition;

import React from "react";
const footerStyle = {
    backgroundColor:"#D6D5CB",
    textAlign: "center",
    padding:"4rem",
    fontSize:"2.5rem",
    fontFamily:"'Libre Barcode 39 Text', cursive",
}
function Foot() {
  return (
    <footer>
      <div style={footerStyle}>
        © 2021 Copyright: Kanishk
      </div>
    </footer>
  );
}

export default Foot;
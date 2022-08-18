import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  background-color: #D6D5CB;
  text-Align: center;
  padding: 4rem;
  font-Size: 2.5rem;
  font-Family: 'Libre Barcode 39 Text';
  @media (max-width:480px){
    font-size: 1.5rem;
  }
`
function Foot() {
  return (
    <footer>
      <Footer>© 2021 Copyright: Kanishk</Footer>
    </footer>
  );
}

export default Foot;

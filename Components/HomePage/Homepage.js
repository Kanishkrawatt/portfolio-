import { useState } from "react";
import { MainInfo, Name, Shortinfo } from "./HomepageComponent";

import Typewriter from "typewriter-effect";

function Homepage({ data }) {
  return (
    <section id="Home">
      <MainInfo>
        <Name>{data.Name}</Name>
        <Shortinfo>
          <Typewriter
            options={{
              strings: data.ShortInfo,
              autoStart: true,
              loop: true,
            }}
          />
        </Shortinfo>
      </MainInfo>
    </section>
  );
}

export default Homepage;

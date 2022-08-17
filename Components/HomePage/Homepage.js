import { MainInfo, Name, Shortinfo } from "./HomepageComponent";

function Homepage() {
  let data ={"Name":"Kanishk","Shortinfo":"A Full Stack Web Developer"}
  return (
    <section id="Home">
    <MainInfo>
      <Name>{data.Name}</Name>
      <Shortinfo>{data.Shortinfo}</Shortinfo>{" "}
    </MainInfo>
    </section>
  );
}

export default Homepage;

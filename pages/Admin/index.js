import React from "react";
import AdminDashBoard from "../../Components/AdminDashBoard/Admin";
import db from "../../db";

const index = (props) => {
  let Data = props.Data;
  return <AdminDashBoard Data={Data} />;
};

export default index;

export async function getStaticProps() {
  let data = await db.collection("contact").get();
  let Data = data.docs.map((entry) => entry.data());
  return {
    props: { Data }, // will be passed to the page component as props
    revalidate: 1,
  };
}

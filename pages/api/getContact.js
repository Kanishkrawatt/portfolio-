import db from "../../db";

const getContact = async (req, res) => {
  try {
    let data = await db.collection("contact").get();
    let Alldata = data.docs.map((entry) => entry.data());
    const Data = Alldata[0].data;
    res.status(200).json(Alldata);
  } catch (e) {
    res.status(400).end();
  }
};

export default getContact;
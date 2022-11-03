import db from "../../db";

const request = async (req, res) => {
  try {
    const { id } = await db.collection("contact").add({
      ...req.body,
      created: new Date().toISOString(),
    });
    res.status(200).json({ id });
  } catch (e) {
    res.status(400).end();
  }
};
export default request;

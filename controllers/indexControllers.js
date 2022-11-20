const Users = require("../models/Users");
const sizeOf = require("image-size");

const getUsers = async (req, res, next) => {
  try {
    const result = await Users.find().select("_id name nim url  ");
    let b64;
    let mimeType;
    let imageHtml;

    result.forEach((e) => {
      b64 = Buffer.from(e.url.data).toString("base64");
      mimeType = "image/jpeg";
      imageHtml = `<img src="data:${mimeType};base64,${b64}" />`;
      res.render("index", {
        layout: "./layout/main",
        title: "Halaman Utama",
        result,
        imageHtml,
      });
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getUsers };

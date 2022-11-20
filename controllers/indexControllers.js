const Users = require("../models/Users");
const sizeOf = require("image-size");

// const renderUI = ()

const getUsers = async (req, res, next) => {
  try {
    const result = await Users.find().select("_id name nim url  ");
    let b64;
    let mimeType;
    let imageHtml;
    let alert;

    if (result <= 0) {
      res.render("index", {
        layout: "./layout/main",
        title: "Halaman Utama",
        result,
        alert: 1,
      });
    } else {
      res.render("index", {
        layout: "./layout/main",
        title: "Halaman Utama",
        result,
        alert: 0,
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { getUsers };

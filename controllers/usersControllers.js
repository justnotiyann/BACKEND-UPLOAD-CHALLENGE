const Users = require("../models/Users");
const sizeOf = require("image-size");

const getUsers = async (req, res, next) => {
  try {
    const result = await Users.find().select("_id name nim url ");
    let b64;
    let mimeType;
    let imageHtml;

    result.forEach((e) => {
      b64 = Buffer.from(e.url.data).toString("base64");
      mimeType = "image/jpeg";
      imageHtml = `<img src="data:${mimeType};base64,${b64}" />`;
      res.json({
        result,
        imageHtml,
      });
    });
    // res.json({
    //   result,
    //   imageHtml,
    // });
    // let mimeType;
    // let imageHtml;
    // result.forEach((e) => {
    //   if (e.contentType == "image/jpeg") {
    //     mimeType = "image/jpeg";
    //     b64 = Buffer.from(e.url.data).toString("base64");
    //     imageHtml = `<img src="data:${mimeType};base64,${b64}" />`;
    //   } else if (e.contentType == "image/png") {
    //     mimeType = "image/png";
    //     b64 = Buffer.from(e.url.data).toString("base64");
    //     imageHtml = `<img src="data:${mimeType};base64,${b64}" />`;
    //   }
    //   console.log(imageHtml);
    //   res.json({
    //     result,
    //     imageHtml,
    //   });
    // });

    // res.json({
    //   result,
    //   // imageHtml,
    // });
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, nim } = req.body;
    const imagePath = { data: new Buffer.from(req.file.buffer, "base64"), contentType: req.file.mimetype };
    const result = new Users({
      name,
      nim,
      url: imagePath,
    });
    result.save();
    res.json({
      msg: "berhasil membuat user",
    });
  } catch (e) {
    next(e);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Users.findById(id).select("_id name nim url");

    const b64 = Buffer.from(result.url.data).toString("base64");
    const mimeType = "image/png";

    const imageHtml = `<img src="data:${mimeType};base64,${b64}" />`;
    res.json({
      msg: "berikut datanya",
      data: result,
      imageHtml,
    });
  } catch (e) {
    next(e);
  }
};

const destroyUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Users.findByIdAndDelete(id);
    res.json({
      msg: "berhasil dihapus",
    });
  } catch (e) {
    next(e);
  }
};

const editUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, nim } = req.body;
    const imagePath = req.file.path;
    const options = { new: true };

    const result = await Users.findByIdAndUpdate(id, { name, nim, url: imagePath }, options);

    res.json({
      msg: "data berhasil di update",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getUsers, createUser, getUserById, destroyUser, editUser };

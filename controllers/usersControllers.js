const Users = require("../models/Users");
const sizeOf = require("image-size");

const getUsers = async (req, res, next) => {
  try {
    const result = await Users.find().select("_id name nim url").lean().exec();
    res.json({
      msg: "here we go",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, nim } = req.body;
    const imagePath = req.body.path;
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
    console.log(e);
    // next(e);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Users.findById(id).select("_id name nim url").lean().exec();
    res.json({
      msg: "berikut datanya",
      data: result,
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

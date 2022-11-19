const db = require("../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    name: String,
    url: String,
  },
  { timestamps: true }
);

const Image = db.model("image", imageSchema);

module.exports = Image;

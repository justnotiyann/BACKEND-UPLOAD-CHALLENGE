const sizeOf = require("buffer-image-size");

const imageDimensionHandler = (lebar, tinggi) => async (req, res, next) => {
  try {
    const reqBuffer = req.file.buffer;
    const dimensions = sizeOf(reqBuffer);
    const { width, height } = dimensions;
    if (lebar <= width || tinggi <= height) {
      res.json({ msg: "data terlalu besar harap upload hanya size 500 x 500 pixel" });
    } else {
      next();
    }
  } catch (e) {
    next(e);
  }
};

module.exports = imageDimensionHandler;

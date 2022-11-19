const sizeOf = require("buffer-image-size");

const imageDimensionHandler = (lebar, tinggi) => async (req, res, next) => {
  console.log(req.file);
  const reqBuffer = req.file.buffer;
  const dimensions = sizeOf(reqBuffer);
  // console.log(10 > 5);
  const { width, height } = dimensions;
  console.log(width);
  if (lebar <= width && tinggi <= height) {
    res.json({ msg: "data terlalu besar harap upload hanya size 500 x 500 pixel" });
  } else {
    next();
  }
  // console.log(dimensions.height);
  // if (req.file) {
  //   const fileBuffer = req.file.buffer;
  //   var dimensions = sizeOf(fileBuffer);

  //   if (width == dimensions.width && height == dimensions.height) {
  //     next();
  //   } else {
  //     res.json({
  //       msg: "ukuran tidak sama",
  //     });
  //   }
  // } else {
  //   next();
  // }
};

module.exports = imageDimensionHandler;

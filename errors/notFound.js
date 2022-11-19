const notFound = (req, res, next) => {
  res.json({
    msg: "routes tidak ditemukan",
  });
};

module.exports = notFound;

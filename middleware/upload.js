// // IMPORT
// const multer = require("multer");

// // INISIALISASI DISK STORAGE
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "tmp");
//   },
//   // PENAMAAN FILE
//   filename: function (req, file, cb) {
//     const mimeExtension = {
//       "image/jpg": "jpg",
//       "image/png": "png",
//     };
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + "." + mimeExtension[file.mimetype]);
//   },
// });

// // FINALISASI
// const upload = multer({
//   storage: storage,
//   // FILEFILTER
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
//       cb(null, true);
//     } else {
//       cb(
//         {
//           message: "Harap upload file hanya jpg dan png saja !",
//         },
//         false
//       );
//     }
//   },
//   // LIMIT
//   limits: {
//     fileSize: 1024 * 1024,
//   },
// });

// module.exports = upload;
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(
        {
          message: "Harap upload file hanya jpeg dan png saja !",
        },
        false
      );
    }
  },
  // LIMIT
  limits: {
    fileSize: 1024 * 1024,
  },
});

module.exports = upload;

const mongoose = require("mongoose");
//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/latihan_upload_qwars";
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("terhubung ke database mongodb"));

module.exports = db;

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejsLayout = require("express-ejs-layouts");
const app = express();

app.listen(3000, () => {
  console.log("server berjalan");
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/users", express.static("tmp"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(ejsLayout);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoute");
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Handle 404
const notFound = require("./errors/notFound");
const errorHandling = require("./errors/handlingErrors");

app.use(errorHandling);
app.use(notFound);

module.exports = app;

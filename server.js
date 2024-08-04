const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
require("dotenv").config();

// 引入routers/api文件
const accountManage = require("./routers/api/accountManage");
const discussion = require("./routers/api/discussion");
const questionExam = require("./routers/api/questionExam");
const questionManage = require("./routers/api/questionManage");
const systemManage = require("./routers/api/systemManage");
const users = require("./routers/api/users");
const usingLogs = require("./routers/api/usingLogs");

// 連接 MongoDB
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// 使用body-parser中間件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 使用cookie-parser中間件
app.use(cookieParser());

// 使用express-session中間件
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);

// 執行靜態頁面
app.use(express.static("client/dist"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html")).catch((err) => console.log(err));
// });

// 使用routers
app.use("/api/accountManage", accountManage);
app.use("/api/discussion", discussion);
app.use("/api/questionExam", questionExam);
app.use("/api/questionManage", questionManage);
app.use("/api/systemManage", systemManage);
app.use("/api/users", users);
app.use("/api/usingLogs", usingLogs);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

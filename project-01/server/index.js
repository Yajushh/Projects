const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./controller/auth");
const blogRouter = require("./controller/post");
const userRouter = require("./controller/User");
const { default: mongoose } = require("mongoose");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`DB Connection Successful : ${process.env.MONGO_URL}`);
  })
  .catch((error) => {
    console.log(`Error connecting to the DB : ${error.message}`);
  });

app.use("/auth", authRouter);
app.use("/post", blogRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

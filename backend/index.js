import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import router from "./routes/user.js";

const app = express();
const PORT = 4600;

app.use(express.json());
app.use("/", router);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http//localhost:5173",
  Credentials: true,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import userRoute from "./routes/user.js";
import companyRoute from "./routes/company.js"
import jobsRoute from "./routes/jobs.js"

const app = express();
const PORT = 4600;

app.use(cookieParser());

const corsOptions = {
  origin: "http//localhost:5173",
  Credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/company",companyRoute);
app.use("/jobs",jobsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

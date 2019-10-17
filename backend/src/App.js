import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/Index";
import usersRouter from "./routes/Users";
import authRouter from "./routes/Auth";
import authMiddleware from "./middlewares/Auth";

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.resolve("../frontend/build")));
app.use("/", indexRouter);
app.use("/secure", usersRouter);
app.use("/secure", authRouter);
// secure all routes that begin with the url secure
app.get("/secure/*", authMiddleware);
export default app;

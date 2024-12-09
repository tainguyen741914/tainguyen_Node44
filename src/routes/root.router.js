import express from "express";
import userRouter from "./user.router.js";

// tạo object router tổng
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

// export rootRouter cho file index.js dùng
export default rootRouter;

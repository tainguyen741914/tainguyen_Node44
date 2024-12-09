import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/:id/:hoten", createUser);
userRouter.get("/get-users", getUsers);
userRouter.delete("/delete-user/:user_id", deleteUser);

export default userRouter;

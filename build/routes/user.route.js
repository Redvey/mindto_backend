"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
//Define the route paths
userRouter.get("/:userId", user_controller_1.getUserController);
userRouter.post("/", user_controller_1.createUserController);
userRouter.delete("/:userId", user_controller_1.deletedUserController);
userRouter.put("/", user_controller_1.updateUserController);
exports.default = userRouter;

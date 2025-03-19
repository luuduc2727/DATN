import express from "express";
import { login, logout, register, updateProfile  } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { validateBody } from "../middleware/validate.js";
import { registerSchema } from "../validation/userValidation.js";



const router = express.Router();

router.route("/register").post(validateBody(registerSchema), register);;
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateProfile);
router.route("/logout").get(logout);

export default router;

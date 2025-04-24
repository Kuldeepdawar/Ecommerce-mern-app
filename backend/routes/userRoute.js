// In this file, we create user-related routes and connect them to controller functions

// Step 1: Import Express and controller functions
import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

// Step 2: Create a router instance
const userRoute = express.Router();

// Step 3: Define POST routes for user registration, login, and admin login
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.post("/admin", adminLogin);

// Step 4: Export the user routes to use in the main app
export default userRoute;

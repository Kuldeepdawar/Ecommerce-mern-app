import userModel from "../models/userModel.js"; // Make sure to include .js if using ES modules
import validator from "validator";
import bcrypt from "bcrypt";
// import jwt jsonwebtoken for user login toke
import jwt from "jsonwebtoken";
// create token use id and jwt.sign({id}. process.env.JWT_SECRET)
// this code will create a token when user login and generate a token with id
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route handler for user login
const loginUser = async (req, res) => {
  // Logic for logging in a user will go here
  // use try and catch for error
  try {
    // in login user we need a email and password
    // create an email and password
    const { email, password } = req.body;

    // then scheck email is exist or not
    const user = await userModel.findOne({ email });

    // if user is not exists

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // check if match password then use bcrypt.compare(passowrd, user.password)
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // if match then create toke and send token
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "password is not right" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Route handler for user registration
const registerUser = async (req, res) => {
  // This route handles user registration (name, email, password)
  // Endpoint: POST localhost:4000/api/user/register

  try {
    const { name, email, password } = req.body;

    // Check if user already exists based on email
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // TODO: Add validation for email/password (e.g., using validator package)
    // check validate email usinf if(!validator.isEmail(email))
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      res.json({ success: false, message: "Please enter a strong passowrd" });
    }
    // TODO: Hash the password before saving (e.g., using bcrypt)
    // how we can give strong password and hashing pasword using bcrypt.genSalt(10) and use bcrypt package and
    // bcrypct.hasg(passowrd, salt)
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // now create a new user because we are register page
    // create new user take const newUsre = new userModel({name,email, password:hashPassword})
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    // after creteing a user then save with and use await newUser.save()
    const user = await newUser.save();

    // Use token function createToken(user._id) and
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route handler for admin login
const adminLogin = async (req, res) => {
  // Logic for admin login will go here
};

// Exporting the route handlers for use in other files
export { loginUser, registerUser, adminLogin };

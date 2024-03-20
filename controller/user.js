const userModel = require("../model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let dotenv = require("dotenv");
dotenv.config();
// User Registration API
const userRegistration = async (req, res) => {
  try {
    let newUser = await userModel.create({ ...req.body });
    newUser.save();
    res.status(200).json({
      success: true,
      message: "user Created successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.status(409).json({
        success: true,
        message: "Email already Exist",
      });
    }
  }
};

// User Login API
const login = async (req, res) => {
  try {
    let isPresent = await userModel.findOne({ email: req.body.email });
    if (!isPresent) {
      res.status(404).json({
        success: false,
        message: "User Not Found Please Signup",
      });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      isPresent.password
    );

    if (isPasswordCorrect) {
      // console.log(isPresent);
      const payLoad = {
        name: isPresent.firstName,
        role: isPresent.role,
      };
      let token = generatedToken(payLoad);
      console.log(token);
      res.status(200).json({
        success: true,
        message: "login successfully",
        email: isPresent.email,
        token: token,
      });
    } else {
      console.log(err);
      res.status(404).json({
        success: false,
        message: "Wrong password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const generatedToken = (Obj) => {
  return jwt.sign(Obj , process.env.JWT_SECRETKEY, { expiresIn: "1d" });
};

module.exports = { userRegistration, login };

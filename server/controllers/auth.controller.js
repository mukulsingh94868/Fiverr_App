import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    console.log('err', err);
    // next(err);
  }
};

export const login = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

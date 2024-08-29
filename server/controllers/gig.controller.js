import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";

export const createGig = async (req, res, next) => {
    if (!req.isSeller)
      return next(createError(403, "Only sellers can create a gig!"));
  
    const newGig = new Gig({
      userId: req.userId,
      ...req.body,
    });
  
    try {
      const savedGig = await newGig.save();
      res.status(201).json(savedGig);
    } catch (err) {
      next(err);
    }
  };

export const deleteGig = async (req, res, next) => {
    try {

    } catch (error) {
        console.log('error', error);
    }
};

export const getGig = async (req, res, next) => {
    try {

    } catch (error) {
        console.log('error', error);
    }
};

export const getGigs = async (req, res, next) => {
    try {

    } catch (error) {
        console.log('error', error);
    }
};
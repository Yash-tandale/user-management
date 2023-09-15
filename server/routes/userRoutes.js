import express from "express";
import userModel from "../models/userSchema.js";
import res from "express/lib/response.js";

const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  try {
    const response = await userModel.find({});
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

//create user
router.post("/create-user", async (req, res) => {
  try {
    const data = new userModel(req.body);
    await data.save();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//update user
router.put("/update-user/:id", async (req, res) => {
  try {
    const response = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(response);
  } catch (error) {
    console.log("Error in update user", error);
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  try {
    const response = await userModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;

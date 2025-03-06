const User = require("../models/user.model");
const addId = async (req, res) => {
  try {
    const { userId } = req.body;

    // thêm vào db
    await User.deleteMany({});
    const newUser = await User.create({
      userId: userId,
      active: true,
    });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log("Error has ocurred at add Id controller ", error.message);
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user[0].userId);
  } catch (error) {
    console.log(
      "Error has ocurred at current  user controller ",
      error.message
    );
  }
};
const active = async (req, res) => {
  try {
    const { userId } = req.body;
    await User.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        active: true,
      }
    );
    return res.status(200).json({ message: "Đã kích hoạt id" });
  } catch (error) {
    console.log("Error has ocurred at active controller ", error.message);
  }
};
const deActive = async (req, res) => {
  try {
    const { userId } = req.body;
    await User.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        active: false,
      }
    );
    return res.status(200).json({ message: "Đã hủy kích hoạt id" });
  } catch (error) {
    console.log("Error has ocurred at active controller ", error.message);
  }
};

module.exports = {
  addId,
  active,
  deActive,
  getCurrentUser,
};

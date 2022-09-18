const User = require("../models/User");

const UserCtrl = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  login: async (req, res) => {
    const { useracc, password } = req.body;
    console.log("useracc",useracc);
    try {
      const user = await User.findOne({ useracc, password });
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(400).json({ mess: "Account not exist" });
      }
    } catch (error) {
      return res.status(200).json(error.message);
    }
  },
  createUser: async (req, res) => {
    const { useracc, password } = req.body;

    console.log("user ax:,", req.body);
    const user = new User({
      useracc,
      password,
      username: "ANnymous",
    });
    try {
      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updateUser: async (req, res) => {
    var { id, useracc, password, username } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { useracc, password, username },
        {
          new: true,
        }
      );
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  deleteUser: async (req, res) => {
    const id = req.body.id;
    try {
      await User.findByIdAndDelete(id);
      return res.status(200).json({ mes: "success" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
};

module.exports = UserCtrl;

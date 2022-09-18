const Menu = require("../models/Menu");

const menuCtrl = {
  getMenu: async (req, res) => {
    try {
      const menu = await Menu.find({})
        .populate("breakfast")
        .populate("lunch")
        .populate("dinner");
      return res.status(200).json(menu);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  getMenubyId: async (req, res) => {
    const userid = req.params.id;
    try {
      const menu = await Menu.findOne({ userId: userid })
        .populate("breakfast")
        .populate("lunch")
        .populate("dinner");
      console.log(menu);
      return res.status(200).json({ menu });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  createMenu: async (req, res) => {
    const { userId, breakfast, lunch, dinner } = req.body;
    const menu = new Menu({
      userId,
      breakfast,
      lunch,
      dinner,
    });
    try {
      await menu.save();
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updateMenu: async (req, res) => {
    const { id, userid, breakfast, lunch, dinner } = req.body;
    try {
      const menu = await Menu.findOneAndUpdate(
        { _id: id },
        { userid, breakfast, lunch, dinner },
        {
          new: true,
        }
      );
      return res.status(200).json(menu);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  deleteMenu: async (req, res) => {
    const id = req.body.id;
    try {
      await Menu.findByIdAndDelete(id);
      return res.status(200).json({ mes: "success" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
};
module.exports = menuCtrl;

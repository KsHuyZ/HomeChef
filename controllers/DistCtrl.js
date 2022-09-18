const Dish = require("../models/Dist");

const DistCtrl = {
  getDish: async (req, res) => {
    try {
      const dishes = await Dish.find({});
      return res.status(200).json(dishes);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  getDishAtKey: async (req, res) => {
    const keyword = req.params.keyword;
    try {
      const dish = await Dish.find({
        keyword: new RegExp("^" + ".*" + keyword + ".*" + "$", "i"),
      });
      if (dish) {
        return res.status(200).json(dish);
      } else {
        return res.status(300).json({ message: "Empty" });
      }
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  getDishbyId: async (req, res) => {
    const id = req.params.id;
    try {
      const dish = await Dish.findById(id);
      if (dish) {
        return res.status(200).json(dish);
      } else {
        return res.status(300).json({ message: "Empty" });
      }
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },

  createDish: async (req, res) => {
    const { dishname, keyword, type, ingredients, howtomade } = req.body;
    const dish = new Dish({
      dishname,
      keyword,
      type,
      ingredients,
      howtomade,
    });
    try {
      await dish.save();
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updateDish: async (req, res) => {
    const { id, dishname, keyword, type, ingredients, howtomade } = req.body;
    try {
      const dish = await Dish.findOneAndUpdate(
        { _id: id },
        { dishname, keyword, type, ingredients, howtomade },
        {
          new: true,
        }
      );
      return res.status(200).json(dish);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  getDIshbyMeal: async (req,res) => {
    const meal = req.params.meal
    try {
      const dish = await Dish.find({type:meal})
      return res.status(200).json(dish)
    } catch (error) {
      return res.status(400).json(error.message);
    }

  },
  deleteDish: async (req, res) => {
    const id = req.body.id;
    try {
      await Dish.findByIdAndDelete(id);
      return res.status(200).json({ mes: "success" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
};

module.exports = DistCtrl;

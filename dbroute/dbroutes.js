const { Router } = require("express");
const router = Router();
const dishcontroller = require("../controllers/DistCtrl");
const usercontroller = require("../controllers/UserCtrl");
const menucontroller = require("../controllers/MenuCtrl");
const cmtcontroller = require("../controllers/CommentCtrl")

//routes for handling dish API

router.get("/dish", dishcontroller.getDish);
router.get("/dish/:id", dishcontroller.getDishbyId);
router.get("/dish/meal/:meal",dishcontroller.getDIshbyMeal)
router.get("/dish/keyword/:keyword", dishcontroller.getDishAtKey);
router.post("/dish", dishcontroller.createDish);
router.put("/dish", dishcontroller.updateDish);
router.delete("/dish", dishcontroller.deleteDish);

//routes for handling user API

router.get("/users", usercontroller.getUsers);
router.post("/users", usercontroller.createUser);
router.put("/users", usercontroller.updateUser);
router.delete("/users", usercontroller.deleteUser);
router.post("/login",usercontroller.login)

//routes for handling menu API

router.get("/menu", menucontroller.getMenu);
router.get("/menu/:id", menucontroller.getMenubyId);
router.post("/menu", menucontroller.createMenu);
router.put("/menu", menucontroller.updateMenu);
router.delete("/menu", menucontroller.deleteMenu);

//routes for handling menu API


router.get("/cmt/:id", cmtcontroller.getCommentbyDishId);
router.post("/cmt", cmtcontroller.writeComment);

module.exports = router;

const Comment = require("../models/Comment");

const CommentCtrl = {
  getCommentbyDishId: async (req, res) => {
    const id = req.params.id;

    try {
      const comment = await Comment.find({ dishId: id })
        .populate("userId")
        .populate("dishId");
      return res.status(200).json(comment);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },

  writeComment: async (req, res) => {
    var { userId, dishId, content } = req.body;

    const comment = new Comment({
      userId,
      dishId,
      content,
    });
    try {
      await comment.save();
      return res.status(200).json(comment);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
};

module.exports = CommentCtrl;

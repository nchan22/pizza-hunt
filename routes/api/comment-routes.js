const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

module.exports = router;

// /api/comments/<pizzaId>
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

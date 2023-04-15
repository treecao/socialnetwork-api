const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// path /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// path /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// path /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// path /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
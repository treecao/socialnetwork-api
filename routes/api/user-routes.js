const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");
// path /api/Users
router.route("/").get(getAllUser).post(createUser);
// path /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// path /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
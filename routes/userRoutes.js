const express = require("express");
const {
  registerUser,
  loginrUser,
  currentrUser,
} = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginrUser);
router.get("/current", validateToken, currentrUser);

module.exports = router;

const express = require("express");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const secret = process.env.JWT_SECRET;
// console.log(secret);

// register user
router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be atleast 3 characters"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be atleast 5 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user)
        return res.status(400).send({ message: "Email already exists" });
      const salt = bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, secret);
      console.log(authToken);

      res.json({ user, authToken });
    } catch (error) {
      res.status(500).send("internal server error");
    }
  }
);

// login
//user detail
module.exports = router;

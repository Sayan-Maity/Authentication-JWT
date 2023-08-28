const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../DB");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Password should be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    // VALIDATED THE INPUT
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    // console.log(email, password);

    // VALIDATE IF USER ALREADY EXISTS
    let checkUser = users.find((item) => {
      return item.email === email;
    });
    if (checkUser) {
      return res.status(400).json({
        errors: [
          {
            msg: "User already exists !",
          },
        ],
      });
    }

    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    users.push({
      email: email,
      password: hashedPassword,
    });

    // JSON WEB TOKEN
    const token = await JWT.sign({ email: email }, process.env.JWT_SECRET_KEY, {
      expiresIn: 360000,
    });
    res.json({
      token: token,
    });

    // res.send("Validation Passed !");
  }
);

// ---------- LOGIN A USER ----------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // VALIDATE IF USER ALREADY EXISTS
  let checkUser = users.find((item) => {
    return item.email === email;
  });

  if (!checkUser) {
    return res.status(400).json({
      errors: [
        {
          msg: "User does not exists !",
        },
      ],
    });
  }
  // CHECK IF PASSWORD IS CORRECT
  const isMatch = await bcrypt.compare(password, checkUser.password);
  if (!isMatch) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Credentials !",
        },
      ],
    });
  }

    // JSON WEB TOKEN
    const token = await JWT.sign({ email: email }, process.env.JWT_SECRET_KEY, {
        expiresIn: 360000,
    })
    res.json({
        token: token
    })
});

router.get("/getUsers", (req, res) => {
  res.json(users);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load User model
const User = require("../models/User");
const Chatkit = require('@pusher/chatkit-server')

require("dotenv")

// @route POST api/users/register
// @desc Register user
// @access Public

const chatkit = new Chatkit.default({
  instanceLocator: process.env.INSTANCE_LOCATOR,
  key: process.env.SECRET_KEY,
})
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });




  router.post('/users', (req, res) => {
      const { username } = req.body
      chatkit
        .createUser({
          id: username,
          name: username
        })
        .then(() => res.sendStatus(201))
        .catch(error => {
          if (error.error === 'services/chatkit/user_already_exists') {
            res.sendStatus(200)
          } else {
            res.status(error.status).json(error)
          }
        })
    })


    router.post('/createUser', (req,res) =>{ 
      const { username } = req.body
      chatkit
      
        .createUser({
          id: username,
          name: username
        })
        .then(() => res.sendStatus(201))
        .catch(error => {
          if (error.error === 'services/chatkit/user_already_exists') {
            res.sendStatus(200)
          } else {
            res.status(error.status).json(error)
          }
        })
    })

    router.post('/authenticate', (req, res) => {
        const authData = chatkit.authenticate({ userId: req.query.user_id })
        res.status(authData.status).send(authData.body)
      })
      
  module.exports = router
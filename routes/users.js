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
router.post("/register/:name/:email/:password/:password2", (req, res) => {
    // Form validation
  // const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    // if (!isValid) {
      // return res.status(400).json(errors);
    // }

  User.findOne({ email: req.params.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.params.name,
          email: req.params.email,
          password: req.params.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          console.log(newUser.password)
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


  router.get("/login/:email/:password", (req, res) => {
    // Form validation
    // const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    // if (!isValid) {
      // return res.status(400).json(errors);
    // }
    const  email = req.params.email
    const password = req.params.password
    console.log(email,password)
    // const {password} =req.body.password
  // /  const { password} = req.body.password

  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      // if (!user) {
        // return res.status(404).json({ emailnotfound: "Email not found" });
      // }
  // Check password
      bcrypt.compare(password,user.password).then(isMatch => {
        
        console.log(isMatch)
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  // router.post('/users', (req, res) => {
  //     const { username } = req.body
  //     chatkit
  //       .createUser({
  //         id: username,
  //         name: username
  //       })
  //       .then(() => res.sendStatus(201))
  //       .catch(error => {
  //         if (error.error === 'services/chatkit/user_already_exists') {
  //           res.sendStatus(200)
  //         } else {
  //           res.status(error.status).json(error)
  //         }
  //       })
  //   })


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
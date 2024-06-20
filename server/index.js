require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./conn");
const LoginModel = require("./models/table");
const bcrypt = require("bcrypt");
const PORT = 4002;


app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  LoginModel.findOne({ email: email })
    .then(user => {
      if (user) {
        
        
       
        bcrypt.compare(password, user.password, (err, result) => {
          
          if (err) {
            
            res.status(500).json({ error: 'Internal server error' });
          } else if (result) {
            
            res.json("success");
          } else {

            res.json("Invalid password");
          }
          
        });
      } else {
        res.json("User not found");
      }
    });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const newUser = new LoginModel({
        email: email,
        password: hashedPassword,
      });
      newUser.save()
        .then(user => {
          res.json("Registration success");
        })
        .catch(err => {
          res.status(400).json({ error: 'Registration failed' });
        });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started at Port No: ${PORT}`);
});

import { token } from "morgan";

const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Send all shoes
router.get("/", async (req, res, next) => {
    try {
      const items = await prisma.items.findMany();
      res.json(items);
    } catch (err) {
      next(err);
    }
});

// Get shoes by their id
router.get("/id/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const item = await prisma.items.findUnique({ where: { id } });
    res.json(item);
  } catch (err) {
    next(err);
  }
});



// login user api

router.post("/login", async(req, res) => {
  const {username, passowrd} = req.body;

  if (!username || !passowrd) {
    res.status(400).json({error:"Log in"})
  }; 

  try {
    const userlogin = await USER.findUnique({username:username});
    console.log(userlogin);

    if(userlogin){
      const isMatch = await token.compare(passowrd, userlogin.password);
      console.log(isMatch);

      if(isMatch){
        res.status(400).json({error:"Invalid Details"})
      } else {
        res.status(201).json({error:"Password Match"})
      }

    }
  } catch (error){
    res.status(400).json({error:"Invalid Details"})

  }
})



// contact route
router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    res.send("Thank you for your message! We'll be in touch soon.")
  } catch (err) {
    next(err);
  }
});

// get by brand
router.get("/brand/:brand", async (req, res, next) => {
  try {
    const brand = req.params.brand;

    const items = await prisma.items.findMany({ where: { brand } });
    res.json(items);
  } catch (err) {
    next(err);
  }
});
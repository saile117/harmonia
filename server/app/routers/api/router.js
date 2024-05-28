const express = require("express");


const router = express.Router();


const { sayWelcome } = require("../../controllers/sayActions");


router.get("/", sayWelcome);


const programsRouter = require ("./programs/router");

router.use("/programs", programsRouter)

const categoryRouter = require('./categories/router')

router.use('/categories', categoryRouter)
// ...
module.exports = router;
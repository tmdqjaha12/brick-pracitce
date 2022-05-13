const express = require("express");
const router = express.Router();

const HomeRouter = require("./index");

router.use("/", HomeRouter);

module.exports = router;

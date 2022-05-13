const express = require("express");
// const ip = require("ip");
// const moment = require("moment");

const router = express.Router();

// main
router.get("/", async (req, res) => {
  let data = [];
  data["message"] = "hello Rs-Team!!!";
  data["ifs"] = true;
  data["fors"] = [
    { label: 1 },
    { label: 2 },
    { label: 3 },
    { label: 4 },
    { label: 5 },
    { label: 6 },
  ];

  res.render("index", data);
});

router.get("/canvas/draw", async (req, res) => {
  res.render("canvas/draw");
});

router.get("/canvas/move", async (req, res) => {
  res.render("canvas/move");
});

router.get("/canvas/bounce", async (req, res) => {
  res.render("canvas/bounce");
});

router.get("/canvas/paddle", async (req, res) => {
  res.render("canvas/paddle");
});

router.get("/canvas/over", async (req, res) => {
  res.render("canvas/over");
});

router.get("/canvas/brick", async (req, res) => {
  res.render("canvas/brick");
});

router.get("/canvas/collision", async (req, res) => {
  res.render("canvas/collision");
});

router.get("/canvas/score", async (req, res) => {
  res.render("canvas/score");
});

router.get("/canvas/mouseControl", async (req, res) => {
  res.render("canvas/mouseControl");
});

router.get("/canvas/result", async (req, res) => {
  res.render("canvas/result");
});

module.exports = router;

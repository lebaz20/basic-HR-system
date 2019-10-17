import express from "express";
import path from "path";

const router = express.Router();
/* GET home page. */

router.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/build/index.html"));
});
export default router;

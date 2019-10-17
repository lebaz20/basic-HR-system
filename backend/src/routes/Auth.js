import express from "express";
import { comparePassword, generateToken } from "../services/Auth";
import User, { POSITIONS } from "../entity/User";

const router = express.Router();

router.post("/login", (req, res) => {
  const domain = req.get("host");
  const { email, password } = req.body;
  const user = new User();
  let status = 200;
  user
    .findOne({ email })
    .then(existingUser => {
      if (!existingUser) {
        status = 404;
        throw new Error("User not found!");
      }
      if (!comparePassword(password, existingUser.hash)) {
        status = 403;
        throw new Error("Wrong password!");
      }
      const isAdmin = existingUser.position === POSITIONS.HR_ASSISSTANT;
      res.status(status).send({ token: generateToken(email, domain, isAdmin) });
    })
    .catch(error => {
      res.status(status).send({ error });
    });
});

export default router;

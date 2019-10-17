import express from "express";
import User from "../entity/User";

const router = express.Router();

const cleanUpEntry = entry => {
  const preparedEntry = { ...entry };
  delete preparedEntry.password;
  return preparedEntry;
};

router.get("/users", (req, res) => {
  const user = new User();
  user.findAll().then(users => {
    let preparedUsers = [];
    if (users) {
      preparedUsers = users.map(cleanUpEntry);
    }
    res.send({ users: preparedUsers });
  });
});

router.post("/user", (req, res) => {
  const user = new User();
  user.create(req.body).then(createdEntry => {
    if (createdEntry) {
      res.send({
        message: "user created successfully!",
        user: cleanUpEntry(createdEntry)
      });
    }
  });
});

router.put("/user", (req, res) => {
  const user = new User();
  user.update(req.body, { where: { id: req.body.id } }).then(updatedEntry => {
    if (updatedEntry) {
      res.send({
        message: "user updated successfully!",
        user: cleanUpEntry(updatedEntry)
      });
    }
  });
});

router.delete("/user", (req, res) => {
  const user = new User();
  user.destroy(req.body, { where: { id: req.body.id } }).then(result => {
    if (result) {
      res.send({ message: "user deleted successfully!" });
    }
  });
});
export default router;

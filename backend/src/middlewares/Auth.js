import jwt from "jsonwebtoken";

export default (req, res, next) => {
  jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        console.log("invalid user, redirecting to login page");
        res.redirect("/login");
      } else {
        req.decoded = decoded;
        req.decoded.loggedIn = true;
        next();
      }
    }
  );
};

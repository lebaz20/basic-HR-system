import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Generate hash from password
 * @param  {String} password
 * @return {String} generated hash
 */
export const hashPassword = password => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

/**
 * Compare password with hash
 * @param  {String} password
 * @param  {String} hash
 * @return {Bool}
 */
export const comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash);

/**
 * Generate JWT token
 * @param  {String} email
 * @param  {String} domain
 * @param  {Bool} isAdmin
 * @return {String}
 */
export const generateToken = (email, domain, isAdmin) => {
  const data = {
    sub: email,
    iss: domain,
    admin: isAdmin
  };
  let token = null;
  token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
  return token;
};

export default {
  hashPassword,
  comparePassword,
  generateToken
};

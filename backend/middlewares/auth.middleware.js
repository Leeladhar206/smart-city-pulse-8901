const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../model/blacklist.model");

require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || null;

  //   console.log(token, "token");

  try {
    if (token) {
      const tokenInBlackList = await BlackListModel.findOne({
        blackList: { $in: token },
      });

      if (tokenInBlackList) {
        return res.status(400).send({ msg: "Please Login !!" });
      }

      jwt.verify(token, process.env.key, async (err, result) => {
        try {
          if (result) {
            req.body.userId = result.userId;
            return next();
          } else {
            return res.status(200).send({ msg: "Please Login!!" });
          }
        } catch (error) {
          return res.status(400).send({ error: error.message });
        }
      });
    } else {
      return res.status(200).send({ msg: "Please Login first!!" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = { authMiddleware };

require("dotenv").config();

module.exports = {
  mongoURI: "mongodb://" + process.env.MONGODB_SERVER + ":" + process.env.MONGODB_PORT + "/" + process.env.MONGODB_DATABASE,
  secretOrKey: process.env.SECRET_OR_KEY,
  rootPassword: process.env.ROOT_PASSWORD,
};

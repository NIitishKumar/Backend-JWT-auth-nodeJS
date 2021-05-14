const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user-Model");
db.role = require("./role-Model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

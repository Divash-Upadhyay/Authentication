const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://dishu:qwerty123456@evaluation.ubmpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

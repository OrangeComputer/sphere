Item = require("../models/").Item;
module.exports = {
  index(req, res) {
    return Item.findAll({});
  }
};

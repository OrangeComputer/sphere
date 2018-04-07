Item = require("../models/").Item;
utils = require("./utils");
module.exports = {
  index(req, res) {
    Item.findAll({
      // return the tables associated with each user
      //   include: [
      //     {
      //       model: Item
      //     }
      //   ]
    })
      .then(function(products) {
        console.log(products);
        utils.sendResult(res, products);
      })
      .catch(function(error) {
        console.log(error);
        utils.sendError(res, error);
      });
  }
};

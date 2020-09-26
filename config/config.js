module.exports = function () {
      var database = require("./database");
      var config = Object.assign(database);
      return config;
}();
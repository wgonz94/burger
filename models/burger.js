var orm = require("../config/orm.js");

//create code to call ORM functions using burger specific input
//CRUD

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    //columns and values
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColvals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("cats", condition, function(res) {
            cb(res);
        });
    }

};

//export database functions to controller
module.exports = burger;





module.exports = burger
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

//create burger routes locals
router.get("/", function(req, res) {
    burger.all(function(data){
        var bgrObject = {
            burgers: data
        };
        console.log(bgrObject);
        res.render("index", bgrObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create ([
        "name", "devour"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devour: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(results) {
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export router to server.js
module.exports = router;
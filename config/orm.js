// Import mySQL connection
var connection = require("../config/connection.js");

// object for all SQL statement functions
var orm = {
    // selectAll method
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // insertOne method
    insertOne: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols}) VALUES (${vals});`
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // updateOne method
    updateOne: function(table, cols, condition, cb) {
        var queryString = `UPDATE ${table} SET ${cols} WHERE ${condition};`

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;
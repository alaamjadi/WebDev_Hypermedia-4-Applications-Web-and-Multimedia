"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.presentDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the present table exists");
  return sqlDb.schema
    .hasTable("present")
    .then((exists) => {
      if (!exists) {
        console.log("Mmm, The table present doesn't exists!");
      } else {
        console.log("Wow, The table present exists!");
      }
    })
    .catch(function (error) {
      console.log("DB presentDbSetup failed ", error);
    });
};

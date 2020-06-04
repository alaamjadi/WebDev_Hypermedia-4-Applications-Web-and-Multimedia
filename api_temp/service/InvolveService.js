'use strict';

let sqlDb;

// sqlDb is an object returend by knex.js
exports.involveDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the involve table exists");
  return sqlDb.schema.hasTable("involve")
  .then( (exists) => {
    if (!exists) {
      console.log("Mmm, The table involve doesn't exists!");
    } else {
      console.log("Wow, The table involve exists!");
    }
  })
}
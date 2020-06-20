"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.involveDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the involve table exists");
  return sqlDb.schema
    .hasTable("involve")
    .then((exists) => {
      if (exists) {
        sqlDb.dropTable("involve")
        console.log("Och, The table involve has been deleted!");
      }
      if (!exists) {
        console.log("Mmm, The table involve doesn't exists!");
        return sqlDb.schema.createTable("involve", table =>{
          table.increments("involve_id");
          table.integer("person_id");
          table.integer("service_id");
          console.log("Wow, The table involve has been created!");
        })
      } else {
        console.log("Mmm, The table involve has not been generated!");
      }
    })
    .catch(function (error) {
      console.log("DB involveDbSetup failed ", error);
    });
};

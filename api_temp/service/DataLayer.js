const sqlDbFactory = require("knex");

let { eventsDbSetup } = require("./EventService");

let sqlDbLocal = sqlDbFactory({
  client: 'pg',
  ssl: true,
  debug: true,
  connection: {
    // host: 'localhost'
    // port: '5432'
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'postgres'
  }
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return eventsDbSetup(sqlDbLocal);
}

module.exports = { database: sqlDbLocal, setupDataLayer };

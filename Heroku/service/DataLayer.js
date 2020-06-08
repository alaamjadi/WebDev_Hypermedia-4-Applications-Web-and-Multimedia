const sqlDbFactory = require("knex");

let { eventsDbSetup } = require("./EventService");
let { personDbSetup } = require("./PersonService");
let { servicesDbSetup } = require("./ServiceService");
let { involveDbSetup } = require("./InvolveService");
let { presentDbSetup } = require("./PresentService");

let sqlDbLocal = sqlDbFactory({
  client: "pg",
  ssl: true,
  debug: true,
  connection: process.env.DATABASE_URL,
  /* {
    host :  'localhost',
    //host : '127.0.0.1',
    //database : 'postgres',
    user : 'postgres',
    password : '1234'
  } */
});

function setupDataLayer() {
  console.log("Setting up the data layer");
  return (
    eventsDbSetup(sqlDbLocal) &&
    personDbSetup(sqlDbLocal) &&
    servicesDbSetup(sqlDbLocal) &&
    involveDbSetup(sqlDbLocal) &&
    presentDbSetup(sqlDbLocal)
  );
}

module.exports = { database: sqlDbLocal, setupDataLayer };

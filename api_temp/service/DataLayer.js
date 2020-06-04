const sqlDbFactory = require('knex');

let { eventsDbSetup } = require('./EventService');
//let { personDbSetup } = require('./PersonService');
//let { serviceDbSetup } = require('./ServiceService');

let sqlDb = sqlDbFactory({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ssl: true,
  debug: true
});

function setupDataLayer() {
  console.log('Setting up data layer');
  //personDbSetup(sqlDb);
  //serviceDbSetup(sqlDB);
  return eventsDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };
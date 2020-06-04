"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.servicesDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the services table exists");
  return sqlDb.schema.hasTable("services").then((exists) => {
    if (!exists) {
      console.log("Mmm, The table services doesn't exists!");
    } else {
      console.log("Wow, The table services exists!");
    }
  });
};

/**
 * List of all events of a service
 *
 * codeService String Code of a service that we want the related events
 * returns List
 **/
exports.servicesCodeServiceEventsGET = function(codeService) {
  return sqlDb("present")
  .select("event_id")
  .where("service_id", codeService)
  .then(function (result) {
    let event_id = result.map((result) => result.event_id);
    return sqlDb("events")
      .whereIn("event_id", event_id)
      .select("event_name");
  })
}


/**
 * Find a service with the service code
 *
 * codeService String Code of a service that we want
 * returns Service
 **/
exports.servicesCodeServiceGET = function(codeService) {
  return sqlDb("services")
    .where("service_id", codeService)
    .then((result) => result[0]);
}


/**
 * List of all persons of a service
 *
 * codeService String Code of a service that we want the related persons
 * returns List
 **/
exports.servicesCodeServicePeopleGET = function(codeService) {
  return sqlDb("involve")
    .select("person_id")
    .where("service_id", codeService)
    .then(function (result) {
      let person_id = result.map((result) => result.person_id);
      return sqlDb("person")
        .whereIn("person_id", person_id)
        .select("person_name");
    })
}


/**
 * List of all the services of the association
 *
 * returns List
 **/
exports.servicesGET = function() {
  return sqlDb("services")
  .then((data) => {
    return data.map((result) => {
      return result;
    });
  });
}


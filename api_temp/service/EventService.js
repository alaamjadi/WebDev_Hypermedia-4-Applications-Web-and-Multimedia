"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.eventsDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the events table exists");
  return sqlDb.schema.hasTable("events").then((exists) => {
    if (!exists) {
      console.log("Mmm, The table events doesn't exists!");
    } else {
      console.log("Wow, The table events exists!");
    }
  });
};

/**
 * Find an event with the event code
 *
 * codeEvent Long Code of the event that we want
 * returns Event
 **/
exports.eventsCodeEventGET = function (codeEvent) {
  return sqlDb("events")
    .where("event_id", codeEvent)
    .then((result) => result[0]);
};

/**
 * List of all persons of an event
 *
 * codeEvent Long Code of an event that we want the related persons
 * returns Person
 **/
exports.eventsCodeEventPeopleGET = function (codeEvent) {
  return sqlDb("events")
    .select("person_id")
    .where("event_id", codeEvent)
    .then(function (person) {
      return sqlDb("person").where("person_id", person[0].person_id);
    })
    .then((result) => result[0].person_name);
};

/**
 * List of all services of an event
 *
 * codeEvent Long Code of an event that we want the related services
 * returns List
 **/

exports.eventsCodeEventServicesGET = function (codeEvent) {
  return sqlDb("present")
    .select("service_id")
    .where("event_id", codeEvent)
    .then(function (result) {
      let service_id = result.map((result) => result.service_id);
      return sqlDb("services")
        .whereIn("service_id", service_id)
        .select("service_name");
    })
    .then((data) => {
      return data;
    });
};

/**
 * List of all the events of the association
 *
 * returns List
 **/
exports.eventsGET = function () {
  return sqlDb("events")
  .orderBy("time_date", "desc")
  .then((data) => {
    return data.map((result) => {
      return result;
    });
  });
};

/**
 * List of events of a month
 *
 * month Long Number of the month of the events for filtering
 * returns List
 **/
/* exports.eventsMonthGET = function (month) {
  return sqlDb("events")
    .orderBy("time_date", "desc")
    .select("time_date")
    .then()
};
 */
"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.personDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the person table exists");
  return sqlDb.schema
    .hasTable("person")
    .then((exists) => {
      if (!exists) {
        console.log("Mmm, The table person doesn't exists!");
      } else {
        console.log("Wow, The table person exists!");
      }
    })
    .catch(function (error) {
      console.log("DB personDbSetup failed ", error);
    });
};

/**
 * List of all events of a person
 *
 * codePerson Long Code of a person that we want the related events
 * returns List
 **/
exports.personCodePersonEventsGET = function (codePerson) {
  return sqlDb("events")
    .select("event_id", "event_name")
    .where("person_id", codePerson)
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Endpoint personCodePersonEventsGET failed ", error);
    });
};

/**
 * Find a person with the person code
 *
 * codePerson Long Code of a person that we want
 * returns Person
 **/
exports.personCodePersonGET = function (codePerson) {
  return sqlDb("person")
    .where("person_id", codePerson)
    .then((result) => result[0])
    .catch(function (error) {
      console.log("Endpoint personCodePersonGET failed ", error);
    });
};

/**
 * List of all services of a person
 *
 * codePerson Long Code of a person that we want the related services
 * returns List
 **/
exports.personCodePersonServicesGET = function (codePerson) {
  return sqlDb("involve")
    .select("service_id")
    .where("person_id", codePerson)
    .then(function (result) {
      let service_id = result.map((result) => result.service_id);
      return sqlDb("services")
        .whereIn("service_id", service_id)
        .select("service_id", "service_name");
    })
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Endpoint personCodePersonServicesGET failed ", error);
    });
};

/**
 * List of all the persons of the association
 *
 * returns List
 **/
exports.personGET = function () {
  return sqlDb("person")
    .orderBy("person_name", "asc")
    .then((data) => {
      return data.map((result) => {
        return result;
      });
    })
    .catch(function (error) {
      console.log("Endpoint personGET failed ", error);
    });
};

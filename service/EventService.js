"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.eventsDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the events table exists");
  return sqlDb.schema
    .hasTable("events")
    .then((exists) => {
      if (!exists) {
        console.log("Mmm, The table events doesn't exists!");
      } else {
        console.log("Wow, The table events exists!");
      }
    })
    .catch(function (error) {
      console.log("DB eventsDbSetup failed ", error);
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
    .then((result) => result[0])
    .catch(function (error) {
      console.log("Endpoint evnetsCodeEventGET failed: ", error);
    });
};

/**
 * List of all persons of an event
 *
 * codeEvent Long Code of an event that we want the related persons
 * returns Person
 **/
exports.eventsCodeEventPersonGET = function (codeEvent) {
  return sqlDb("events")
    .select("person_id")
    .where("event_id", codeEvent)
    .then(function (codePerson) {
      return sqlDb("person")
        .select("person_id", "person_name")
        .where("person_id", codePerson[0].person_id);
    })
    .catch(function (error) {
      console.log("Endpoint eventsCodeEventPersonGET failed: ", error);
    });
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
        .select("service_id", "service_name");
    })
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Endpoint eventsCodeEventServicesGET failed: ", error);
    });
};

/**
 * List of all the events of the association
 *
 * returns List
 **/
exports.eventsGET = function () {
  return sqlDb("events")
    .orderBy("event_date", "desc")
    .then((data) => {
      return data.map((result) => {
        return result;
      });
    })
    .catch(function (error) {
      console.log("Endpoint eventsGET failed: ", error);
    });
};

/**
 * List of events of a month in a specific year
 *
 * year Long Number of the Year of the events for filtering
 * month Long Number of the month of the events for filtering
 * returns List
 **/
exports.eventsYearMonthGET = function(year,month) {
  if (year == "9999" && month=="00") {
    return sqlDb("events")
    .orderBy("event_date", "desc")
    .then((data) => {
      return data.map((result) => {
        return result;
      });
    })
    .catch(function (error) {
      console.log("Endpoint eventsGET failed: ", error);
    });
  } else if (year =="9999" && month !== "00") {
    return sqlDb("events")
    .orderBy("event_date", "desc")
    .whereRaw(`EXTRACT(MONTH FROM "event_date")::INTEGER = ?`, month)
    .select(
      "event_id",
      "person_id",
      "event_name",
      "event_date",
      "event_location",
      "photo_address",
      "short_description"
    )
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Request failed: ", error);
    });
  } else if (year !=="9999" && month == "00") {
    return sqlDb("events")
    .orderBy("event_date", "desc")
    .whereRaw(`EXTRACT(YEAR FROM "event_date")::INTEGER = ?`, year)
    .select(
      "event_id",
      "person_id",
      "event_name",
      "event_date",
      "event_location",
      "photo_address",
      "short_description"
    )
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Request failed: ", error);
    });
  } else {
    return sqlDb("events")
    .orderBy("event_date", "desc")
    .whereRaw(`EXTRACT(YEAR FROM "event_date")::INTEGER = ?`, year)
    .andWhereRaw(`EXTRACT(MONTH FROM "event_date")::INTEGER = ?`, month)
    .select(
      "event_id",
      "person_id",
      "event_name",
      "event_date",
      "event_location",
      "photo_address",
      "short_description"
    )
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Request failed: ", error);
    });
  }
}
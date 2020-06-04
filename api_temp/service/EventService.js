"use strict";

let sqlDb;

// sqlDb is an object returend by knex.js
exports.eventsDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the events table exists");
  return sqlDb.schema.hasTable("events")
  .then( (exists) => {
    if (exists) {
      console.log("Wow, The table events exists!");
    } else {
      console.log("Mmm, The table events doesn't exists!");
    }
  });
};

/**
 * Find an event with the event code
 *
 * codeEvent Long Code of the event that we want
 * returns Event
 **/
exports.eventCodeGET = function (codeEvent) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      CodeEvent: 1,
      Name: "Presentation of service X",
      Date: "2020-05-25T17:00:00",
      Location: "Milan",
      ShortDescription: "Short description of the event",
      LongDescription: "Long description of the event",
      Images: ["Image1", "Image2", "Image3", "Image4"],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * List of events of a month
 *
 * month Long Number of the month of the events for filtering
 * returns List
 **/
exports.eventMonthGET = function (month) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        CodeEvent: 1,
        Name: "Presentation of service X",
        Date: "2020-05-25T17:00:00",
        Location: "Milan",
        ShortDescription: "Short description of the event",
        LongDescription: "Long description of the event",
        Images: ["Image1", "Image2", "Image3", "Image4"],
      },
      {
        CodeEvent: 1,
        Name: "Presentation of service X",
        Date: "2020-05-25T17:00:00",
        Location: "Milan",
        ShortDescription: "Short description of the event",
        LongDescription: "Long description of the event",
        Images: ["Image1", "Image2", "Image3", "Image4"],
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * List of all persons of an event
 *
 * codeEvent Long Code of an event that we want the related persons
 * returns Person
 **/
exports.eventsCodePersonGET = function (codeEvent) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      CodePerson: "FistName-LastName",
      Name: "FistName LastName",
      Role: "Volunteer",
      Description: "Biography",
      Images: ["Image1"],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * List of all services of an event
 *
 * codeEvent Long Code of an event that we want the related services
 * returns List
 **/
exports.eventsCodeServicesGET = function (codeEvent) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        Name: "Hospice",
        ShortDescription: "short description of the service",
        LongDescription: "Long description of the service",
        Images: [
          "Image1",
          "Image2",
          "Image3",
          "Image4",
          "Image4",
          "Image5",
          "Image6",
        ],
      },
      {
        Name: "Hospice",
        ShortDescription: "short description of the service",
        LongDescription: "Long description of the service",
        Images: [
          "Image1",
          "Image2",
          "Image3",
          "Image4",
          "Image4",
          "Image5",
          "Image6",
        ],
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * List of all the events of the association
 *
 * returns List
 **/
/*
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "Location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "LongDescription" : "Long description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4" ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "Location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "LongDescription" : "Long description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
 */

exports.eventsGET = function () {
  return sqlDb("events")
  .then( (data) => {
    return data.map( e => 
      {
        e.CodeEvent = { value: e.CodeEvent};
      })
  });
};

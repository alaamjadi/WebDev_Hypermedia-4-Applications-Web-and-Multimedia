'use strict';

let sqlDb;

exports.eventsDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if events table exists");
  return database.schema.hasTable("events").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("events", table => {
        table.increments();
        table.float("CodeEvent");
        table.text("Name");
        table.text("Date");
        table.text("location");
        table.text("ShortDescription");
        table.text("DetailedDescription");
        table.string("Event1.jpg");
        table.string("Event2.jpg")
      });
    }
  });
};

/**
 * Find an event with the event code
 *
 * codeEvent Long Code of the event that we want
 * returns Event
 **/
exports.eventCodeGET = function(codeEvent) {
  return sqlDb("events")
  .codeEvent(codeEvent)
  .then(data => {
    return data.map(e => {
      return e;
    });
  });
};


/**
 * List of events of a month
 *
 * month Long Number of the month of the events for filtering
 * returns List
 **/
exports.eventMonthGET = function(month) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all persons of an event
 *
 * codeEvent Long Code of an event that we want the related persons
 * returns Person
 **/
exports.eventsCodePersonGET = function(codeEvent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CodePerson" : "Name-Family",
  "Name" : "FName LName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all services of an event
 *
 * codeEvent Long Code of an event that we want the related services
 * returns List
 **/
exports.eventsCodeServicesGET = function(codeEvent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
}, {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all the events of the association
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25T17:00:00",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


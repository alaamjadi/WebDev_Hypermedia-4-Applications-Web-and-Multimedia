'use strict';

let sqlDb;

// sqlDb is an object returend by knex.js
exports.servicesDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the services table exists");
  return sqlDb.schema.hasTable("services")
  .then( (exists) => {
    if (!exists) {
      console.log("Mmm, The table services doesn't exists!");
    } else {
      console.log("Wow, The table services exists!");
    }
  })
}

/**
 * List of all the services of the association
 *
 * returns List
 **/
exports.servicesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "LongDescription" : "Long description of the service",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6" ]
}, {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "LongDescription" : "Long description of the service",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all events of a service
 *
 * name String Name of a service that we want the related events
 * returns List
 **/
exports.servicesNameEventsGET = function(name) {
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


/**
 * Find a service with the service name
 *
 * name String Name of a service that we want
 * returns Service
 **/
exports.servicesNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "LongDescription" : "Long description of the service",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all persons of a service
 *
 * name String Name of a service that we want the related persons
 * returns List
 **/
exports.servicesNamePeopleGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodePerson" : "FistName-LastName",
  "Name" : "FistName LastName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1" ]
}, {
  "CodePerson" : "FistName-LastName",
  "Name" : "FistName LastName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


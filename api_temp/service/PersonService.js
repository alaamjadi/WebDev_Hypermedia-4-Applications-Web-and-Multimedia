'use strict';

let sqlDb;

// sqlDb is an object returend by knex.js
exports.personDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the person table exists");
  return sqlDb.schema.hasTable("person")
  .then( (exists) => {
    if (!exists) {
      console.log("Mmm, The table person doesn't exists!");
    } else {
      console.log("Wow, The table person exists!");
    }
  })
}

/**
 * List of all events of a person
 *
 * codePerson String Code of a person that we want the related events
 * returns List
 **/
exports.peopleCodePersonEventsGET = function(codePerson) {
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
 * Find a person with the person code
 *
 * codePerson String Code of a person that we want
 * returns Person
 **/
exports.peopleCodePersonGET = function(codePerson) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CodePerson" : "FistName-LastName",
  "Name" : "FistName LastName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all services of a person
 *
 * codePerson String Code of a person that we want the related services
 * returns List
 **/
exports.peopleCodePersonServicesGET = function(codePerson) {
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
 * List of all the persons of the association
 *
 * returns List
 **/
exports.peopleGET = function() {
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


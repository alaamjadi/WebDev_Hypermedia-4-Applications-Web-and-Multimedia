'use strict';


/**
 * List of all the persons of the association
 *
 * returns List
 **/
exports.peopleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodePerson" : "Name-Family",
  "FName" : "Name",
  "LName" : "Family",
  "Role" : "Volunteer",
  "Description" : "Biography"
}, {
  "CodePerson" : "Name-Family",
  "FName" : "Name",
  "LName" : "Family",
  "Role" : "Volunteer",
  "Description" : "Biography"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all events of a person
 *
 * codePerson String Code of a person that we want the related events
 * returns List
 **/
exports.personCodeEventsGET = function(codePerson) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
}, {
  "CodeEvent" : 1,
  "Name" : "Presentation of service X",
  "Date" : "2020-05-25",
  "location" : "Milan",
  "ShortDescription" : "Short description of the event",
  "DetailedDescription" : "Detailed description of the event",
  "Images" : [ ]
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
exports.personCodeGET = function(codePerson) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CodePerson" : "Name-Family",
  "FName" : "Name",
  "LName" : "Family",
  "Role" : "Volunteer",
  "Description" : "Biography"
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
exports.personCodeServicesGET = function(codePerson) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service"
}, {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


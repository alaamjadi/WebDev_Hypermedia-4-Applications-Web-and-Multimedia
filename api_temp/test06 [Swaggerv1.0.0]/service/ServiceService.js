'use strict';


/**
 * Find a service with the service name
 *
 * name String Name of a service that we want
 * returns Service
 **/
exports.serviceNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Name" : "Hospice",
  "ShortDescription" : "short description of the service",
  "DetailedDescription" : "detailed description of the service"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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


/**
 * List of all events of a service
 *
 * name String Name of a service that we want the related events
 * returns List
 **/
exports.servicesNameEventGET = function(name) {
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
 * List of all persons of a service
 *
 * name String Name of a service that we want the related persons
 * returns List
 **/
exports.servicesNamePeopleGET = function(name) {
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


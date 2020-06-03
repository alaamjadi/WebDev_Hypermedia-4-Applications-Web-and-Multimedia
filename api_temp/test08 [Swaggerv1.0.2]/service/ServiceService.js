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
  "DetailedDescription" : "detailed description of the service",
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
  "Name" : "FName LName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
}, {
  "CodePerson" : "Name-Family",
  "Name" : "FName LName",
  "Role" : "Volunteer",
  "Description" : "Biography",
  "Images" : [ "Image1", "Image2", "Image3", "Image4", "Image4", "Image5", "Image6", "Image7", "Image8", "Image9" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

